'use strict';

/**
 * @ngdoc function
 * @name new1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the new1App
 */
angular.module('new1App')
  .controller('MainCtrl', function ($scope,$http) {

     	$http({
     		url:"http://www.somenote.cn:1602/list1",
     		method:"get",
     	}).success(function(e){
			
                $scope.data=e
     		
     	})

   }).controller('new', function ($scope,$http) {

     	$http({
     		url:"http://www.somenote.cn:1602/list2",
     		method:"get",
     	}).success(function(e){
			
				$scope.data1=e
     		
     	})

   })