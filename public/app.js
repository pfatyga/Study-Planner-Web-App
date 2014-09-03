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
			.when('/admin/home', {
				templateUrl: 'views/admin/home.html',
				controller: 'AdminController'
			})
			.when('/admin/courses', {
				templateUrl: 'views/admin/courses.html',
				controller: 'CoursesController'
			})
			.when('/admin/course-groups', {
				templateUrl: 'views/admin/course-groups.html',
				controller: 'CourseGroupsController'
			})
			.when('/admin/degrees', {
				templateUrl: 'views/admin/degrees.html',
				controller: 'DegreesController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
