'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoAppApp
 */
angular.module('demoApp')
  .controller('AboutCtrl', ['$scope','contact',function ($scope,contact) {
   $scope.messages='From AboutCtrl';
      $scope.contact=contact.getData();
     
  }]);
