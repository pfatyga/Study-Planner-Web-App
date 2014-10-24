angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ui.router', 'ngAnimate', 'mgcrea.ngStrap', 'ui.sortable', 'ngTable'])
	.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
			 function($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);

		// Set up redirects
		$urlRouterProvider
			.when('/admin', '/admin/dashboard')
			.when('/admin/courses', '/admin/courses/list')
			.when('/admin/course-groups', '/admin/course-groups/list')
			.when('/admin/degrees', '/admin/degrees/list')
			.otherwise('/');

		// Set up states
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
				templateUrl: 'views/admin/courses/courses.html',
				controller: 'AdminCoursesController'
			})
			.state('admin.courses.list', {
				url: '/list',
				templateUrl: 'views/admin/courses/course-list.html',
				controller: 'AdminCourseListController'
			})
			.state('admin.courses.add', {
				url: '/add',
				templateUrl: 'views/admin/courses/course-form.html',
				controller: 'AdminAddCourseController'
			})
			.state('admin.courses.addPeter', {
				url: '/add-peter',
				templateUrl: 'views/admin/courses/add-course-peter.html',
				controller: 'AdminAddCoursePeterController'
			})
			.state('admin.courses.edit', {
				url: '/edit/:courseId',
				templateUrl: 'views/admin/courses/course-form.html',
				controller: 'AdminEditCourseController'
			})
			.state('admin.course-groups', {
				url: '/course-groups',
				templateUrl: 'views/admin/course-groups/course-groups.html',
				controller: 'AdminCourseGroupsController'
			})
			.state('admin.course-groups.list', {
				url: '/list',
				templateUrl: 'views/admin/course-groups/course-group-list.html',
				controller: 'AdminCourseGroupListController'
			})
			.state('admin.course-groups.add', {
				url: '/add',
				templateUrl: 'views/admin/course-groups/add-course-group.html',
				controller: 'AdminAddCourseGroupController'
			})
			.state('admin.course-groups.edit', {
				url: '/edit/:courseGroupId',
				templateUrl: 'views/admin/course-groups/edit-course-group.html',
				controller: 'AdminEditCourseGroupController'
			})
			.state('admin.degrees', {
				url: '/degrees',
				templateUrl: 'views/admin/degrees/degrees.html',
				controller: 'AdminDegreesController'
			})
			.state('admin.degrees.list', {
				url: '/list',
				templateUrl: 'views/admin/degrees/degree-list.html',
				controller: 'AdminDegreeListController'
			})
			.state('admin.degrees.add', {
				url: '/add',
				templateUrl: 'views/admin/degrees/degree-form.html',
				controller: 'AdminAddDegreeMattController'
			})
			.state('admin.degrees.addMatt', {
				url: '/add-matt',
				templateUrl: 'views/admin/degrees/add-degree-matt.html',
				controller: 'AdminAddDegreeMattController'
			})
			.state('admin.degrees.edit', {
				url: '/edit/:degreeId',
				templateUrl: 'views/admin/degrees/degree-form.html',
				controller: 'AdminEditDegreeController'
			})
			.state('admin.degrees.details', {
				url: '/details/:degreeId',
				templateUrl: 'views/admin/degrees/detail-degree.html',
				controller: 'AdminDetailDegreeController'
			})
            .state('student', {
                url: '/student',
                templateUrl: 'views/student/student.html',
                controller: 'StudentController'
            })
            .state('student.dashboard', {
                url: '/dashboard',
                templateUrl: 'views/student/dashboard.html',
                controller: 'StudentDashboardController'
            })
            .state('student.study-plan-builder', {
                url: '/study-plan-builder',
                templateUrl: 'views/student/study-plan/study-plan-builder.html',
                controller: 'StudentStudyPlanBuilderController'
            })
			.state('student.study-plan', {
                url: '/study-plan',
                templateUrl: 'views/student/study-plan/study-plan.html',
                controller: 'StudentStudyPlanController'
            });
	}]);
