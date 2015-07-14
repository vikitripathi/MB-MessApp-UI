'use strict';

angular
   .module('messUiApp')   //no dependency as already defined
    .controller('addItemsCtrl',['$scope','$http','items',function($scope,$http,items) {  
         $scope.submit=function(){
            //console.log(JSON.stringify($scope.form));
            var data=JSON.parse(JSON.stringify($scope.form));   //convert to object
            /*
            JSON.stringify() Converts an object into a string.
            JSON.parse() Converts a JSON string into an object.
             */
            
            //data.push({"item_id":"4"});
            console.log(data);            
            items.getItems().then(function(response){
                //console.log(response);
                var len=response.length;                
                var itemData={};
                // Object.defineProperties(itemData,{
                //     "item_id":{
                //         value:len+1,
                //         writable:true
                //     }
                // });
                itemData['item_id']=len+1;
                for(var key in data){
                    itemData[key]=data[key];
                }
                //data['item_id']=len+1;
                console.log(itemData);
                items.addItem(itemData).then(function(response){
                    console.log(response);
                });
            }); 
         };
         // $scope.form.item_unit="kg";                                       
    }]);