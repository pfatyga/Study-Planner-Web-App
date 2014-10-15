angular.module('MyApp')
	.factory('Courses', ['$resource', function($resource) {
		return $resource('/api/courses');
	}]);
