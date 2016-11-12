'use strict';
  var abc=""
/**
 * @ngdoc overview
 * @name dengluApp
 * @description
 * # dengluApp
 *
 * Main module of the application.
 */
angular
  .module('new1App', ["ui.router"]).controller('con',['$scope','$http',function ($scope,$http) {
	  
	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
			$stateProvider.state('index',{
				url:'/new1',
				templateUrl:'views/main.html',
				controller:'MainCtrl'
			}).state('new',{
				url:'/new',
				templateUrl:'views/new.html',
				controller:'new'
			})
		}])
