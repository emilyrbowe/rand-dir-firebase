'use strict';

/**
 * @ngdoc function
 * @name randdirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the randdirApp
 */
angular.module('randdirApp')
  .controller('MainCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
    var fbRef = new Firebase('https://rand2.firebaseio.com');
    var floorsRef = fbRef.child('floors');
    $scope.floors = $firebaseArray(floorsRef);


  }]);
