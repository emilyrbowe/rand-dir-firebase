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
    var fbRef = new Firebase('https://rand2.firebaseio.com/');
    var floorsRef = fbRef.child('floors');
    $scope.floors = $firebaseArray(floorsRef);

    // $scope.sortedFloors = null;

    // $scope.floors.$loaded(function(){
    //   // console.log("The floors are loaded!");
    //   angular.forEach($scope.floors, function(floor){
    //     forEach
    //   })
    // })


  }]);

angular.module('randdirApp')
  .filter('toArray', function() { return function(obj) {
    if (!(obj instanceof Object)) return obj;
    return _.map(obj, function(val, key) {
        return Object.defineProperty(val, '$key', {__proto__: null, value: key});
    });
  }});
