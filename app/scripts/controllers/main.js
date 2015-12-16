'use strict';

/**
 * @ngdoc function
 * @name randdirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the randdirApp
 */
angular.module('randdirApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.floors = [
      {
        id: 123,
        floorNumber: 1,
        landlord: "Weston Urban"
      },
      {
        id: 345,
        floorNumber: 2,
        landlord: "Geekdom"
      }
    ];
  }]);
