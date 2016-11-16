//'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAppApp
 */
/*angular.module('demoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.messages = 'Hello From main controller';
  });*/



(function() {
  'use strict';

  angular.module('demoApp')
      .controller('MainCtrl', function ($scope) {
    $scope.currentNavItem = 'Home';
      
      $scope.messages='From main controller';
      
  } );

 
})();


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/