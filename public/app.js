angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'ui.router', 'mgcrea.ngStrap'])
	.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
		//$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html',
				controller: 'MainController'
			})
			.state('help', {
				url: '/help',
				templateUrl: 'views/help.html',
				controller: 'HelpController'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'LoginController'
			})
			.state('admin', {
				url: '/admin',
				templateUrl: 'views/admin/admin.html',
				controller: 'AdminController'
			})
			.state('admin.dashboard', {
				url: '/dashboard',
				templateUrl: 'views/admin/dashboard.html',
				controller: 'AdminDashboardController'
			})
			.state('admin.help', {
				url: '/help',
				templateUrl: 'views/admin/help.html',
				controller: 'AdminHelpController'
			})
			.state('admin.courses', {
				url: '/courses',
				templateUrl: 'views/admin/courses.html',
				controller: 'CoursesController'
			})
			.state('admin.courses.add', {
				url: '/add-course',
				templateUrl: 'views/admin/courses/add-course.html',
				controller: 'AddCourseController'
			})
			.state('admin.course-groups', {
				url: '/course-groups',
				templateUrl: 'views/admin/course-groups.html',
				controller: 'CourseGroupsController'
			})
			.state('admin.degrees', {
				url: '/degrees',
				templateUrl: 'views/admin/degrees.html',
				controller: 'DegreesController'
			});
	}]);
