'use strict';

angular
   .module('messUiApp')   //no dependency as already defined
    .controller('transactionCtrl',['$scope','$http','$state','main','uiGridConstants','transactionsFactory',function($scope,$http,$state,main,uiGridConstants,transactionsFactory) {  
            
        if(!main.getIsUserAuthenticated()){
            $state.transitionTo('login');
        }  

        //check use ?
         $scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
            if( col.filters[0].term ){
              return 'header-filtered';
            } else {
              return '';
            }
          };           

         $scope.transactionGrid = {
            enableSorting: true,
            enableFiltering: true,
            paginationPageSizes: [15, 30, 45,60,90],
            paginationPageSize: 15,
            columnDefs: [
              { field: 'sr_no',enableFiltering: false,},
              { field: 'item_name',headerCellClass: $scope.highlightFilteredHeader },
              { field: 'transaction_type',enableSorting: false ,enableFiltering: false,},
              { field: 'quantity', enableSorting: false ,enableFiltering: false,},
              { field: 'cost',enableSorting: false,enableFiltering: false,},
              { field: 'inventory',enableSorting: false,enableFiltering: false,},
              { field: 'date',enableSorting: false,enableFiltering: false,},
              { field: 'timestamp',enableFiltering: false,}
            ],
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
            exporterPdfFooter: function ( currentPage, pageCount ) {
              return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            exporterPdfCustomFormatter: function ( docDefinition ) {
              docDefinition.styles.headerStyle = { fontSize: 22, bold: true }; 
              docDefinition.styles.footerStyle = { fontSize: 10, bold: true }; 
              return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            onRegisterApi: function( gridApi ) {
              $scope.grid1Api = gridApi;
            }
          };


         $scope.tableData=function(){
            var data=[];
            var i=1;
            var item_name='';
                transactionsFactory.getTransactions().then(function(d){
                  console.log(d);
                   angular.forEach(d,function(value,key){
                      console.log(value.item);        //optimize for local storage if data already present
                      
                      transactionsFactory.getItemsName(value.item+"").then(function(val){
                          item_name=val;
                          console.log(item_name);
                          data.push({
                            "sr_no":i++,
                            "item_name":item_name,
                            "transaction_type":value.transaction_type,
                            "quantity":value.quantity,
                            "cost":value.cost,
                            "inventory":value.inventory,
                            "date":value.date,
                            "timestamp":value.timestamp
                          });                          
                      });                  
                 
                  });                  
                });
          return data;
        };
        
         
        
        $scope.transactionGrid.data=$scope.tableData();  //use transactions factory to get data from api in required format
 
         
         //add dependency , eg factory(items) to be added
         // $scope.things = ['A', 'Set', 'fOf', 'Things'];
         // $scope.title  = 'State 2 List';
         // $scope.selectedValue='Set';
         // $scope.items=items;
         // console.log(items);
         // // localStorage.itemDetails = JSON.stringify(response);
         // $scope.save=function(){
         //    //alert(JSON.stringify($scope.items));
                          
         // };
    }]);