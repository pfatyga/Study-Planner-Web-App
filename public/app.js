angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutController'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
