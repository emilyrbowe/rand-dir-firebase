'use strict';

/**
 * @ngdoc function
 * @name randdirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the randdirApp
 */
angular.module('randdirApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.floors = [
      {
        id: 100,
        floorNumber: 0,
        floorName: 'Basement',
        landlord: 'Weston Urban'
      },
      {
        id: 101,
        floorNumber: 1,
        floorName: '1st Floor',
        landlord: 'Weston Urban'
      },
      {
        id: 102,
        floorNumber: 2,
        floorName: '2nd Floor',
        landlord: 'Weston Urban'
      },
      {
        id: 103,
        floorNumber: 3,
        floorName: '3rd Floor',
        landlord: 'Weston Urban'
      },
      {
        id: 104,
        floorNumber: 4,
        floorName: '4th Floor',
        landlord: 'Weston Urban'
      },
      {
        id: 105,
        floorNumber: 5,
        floorName: '5th Floor',
        landlord: 'Weston Urban'
      },
      {
        id: 106,
        floorNumber: 6,
        floorName: '6th Floor',
        landlord: 'Geekdom'
      },
      {
        id: 107,
        floorNumber: 7,
        floorName: '7th Floor',
        landlord: 'Geekdom'
      },
      {
        id: 108,
        floorNumber: 8,
        floorName: '8th Floor',
        landlord: 'Geekdom'
      }
    ];
    $scope.suites = [
      {
        id: 601,
				suiteName: 'Athlon',
        floorId: 106
			},
			{
        id: 602,
        suiteName: 'Atom',
				floorId: 106
			},
			{
        id: 603,
        suiteName:'Celeron',
				floorId: 106
			},
			{
        id: 604,
        suiteName:'CORE',
				floorId: 106,
      },
      {
        id: 605,
        suiteName:'Pentium',
				floorId: 106,
      },
      {
        id: 606,
        suiteName:'Phenom',
				floorId: 106,
      },
      {
        id: 607,
        suiteName:'Sempron',
				floorId: 106,
      },
      {
        id: 608,
        suiteName:'Turion',
				floorId: 106,
      },
    ];
  }]);
