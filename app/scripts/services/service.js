'use strict';
angular.module('demoApp')
.factory('contact', function () {

     var dataObj = {};

     return {
            setData: function(data) {
                
                console.log(data);
                dataObj.firstName = data.firstName;
                 dataObj.lastName = data.lastName; 
                dataObj.email = data.email;
                dataObj.phoneNumber = data.phoneNumber;
                 dataObj.address = data.address;
           
            },
            getData: function() {
               
               return dataObj;
            }
     };
});