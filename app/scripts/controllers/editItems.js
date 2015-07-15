'use strict';

angular
   .module('messUiApp')   //no dependency as already defined
    .controller('editItemsCtrl',['$scope','$http','$q','$interval','uiGridConstants','items','main','$state',function($scope,$http,$q,$interval,uiGridConstants,items,main,$state) {  
            

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

          //create filter
          $scope.itemGrid = {
            enableSorting: true,
            enableFiltering: true,
            paginationPageSizes: [15, 30, 45,60,90],
            paginationPageSize: 15,
            columnDefs: [
              { field: 'item_id',enableFiltering: false,enableCellEdit: false,width: '20%'},
              { field: 'item_name',headerCellClass: $scope.highlightFilteredHeader ,width: '40%'},
              { field: 'item_unit',enableSorting: false ,enableFiltering: false,
                editableCellTemplate: 'ui-grid/dropdownEditor', width: '40%',
                cellFilter:'',editDropdownValueLabel: 'unit', editDropdownOptionsArray: [
                  { id: 1, unit: 'kg' },
                  { id: 2, unit: 'litre' },
                  { id: 3, unit: 'quintal'},
                  { id: 4, unit: 'std-unit'}
                ]
              }              
            ],
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfHeader: { text: 'My Header', style: 'headerStyle' },
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
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
            }
          };

           $scope.tableData=function(){
            var data=[];
            var i=1;
            var item_name='';
                items.getItems().then(function(d){
                  console.log(d);
                   angular.forEach(d,function(value,key){
                      console.log(value.item_name);        //optimize for local storage if data already present
                      data.push({
                       "item_id":value.item_id,
                       "item_name":value.item_name,
                       "item_unit":value.item_unit                       
                      });                                  
                  });                  
                });
          return data;
        };

        $scope.saveRow = function( rowEntity ) {            
            var promise = $q.defer();
            $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise.promise );
            delete rowEntity['$$hashKey'];
            //console.log(rowEntity);
            var item_id=rowEntity.item_id;
            //console.log(item_id);
            items.setItem(item_id);
            items.editItem(rowEntity).then(function(d){
                console.log(d);
            });            
            return promise.promise;
        };                    

        $scope.itemGrid.data=$scope.tableData();
    }]);