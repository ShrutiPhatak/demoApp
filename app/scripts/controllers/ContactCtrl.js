'use strict';

angular.module('demoApp')

.controller('ContactCtrl',['$scope','$mdDialog','contact',function($scope, $mdDialog,contact) {
  $scope.status = '  ';
 
  $scope.customFullscreen = false;
  $scope.showConfirm = function(ev,firstName,lastName,email,phoneNum,address) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to Submit your information?')
          .textContent('Info provided will not be visible to public')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Submit')
          .cancel('Discard');

    $mdDialog.show(confirm).then(function() {
    
      var data={
          firstName:firstName,
          lastName:lastName,
          email:email,
          phoneNumber:phoneNum,
          address:address
      };
      $scope.status = 'Submitted';
      contact.setData(data);
     
    }, function() {
      $scope.status = 'Discarded';
    });
  
    
  };

    
  }]);



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/