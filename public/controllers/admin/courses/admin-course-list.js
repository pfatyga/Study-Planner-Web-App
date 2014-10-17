angular.module('MyApp')
	.controller('AdminCourseListController', ['$scope', '$filter', 'ngTableParams', 'CourseManager', 'Courses',
				function($scope, $filter, ngTableParams, CourseManager, Courses) {
		console.log('AdminCourseListController');

		// Get courses from Courses service
		var courses = Courses.query(function() {
			console.log('courses:');
			console.log(courses);
		});

		// Get courses from CourseManager
		// TODO - use Courses service instead
		CourseManager.getCourses(function(courses) {
			$scope.courses = courses;
		});

		$scope.courseTableParams = new ngTableParams({
			page: 1,
			count: 25,
			sorting: {
				number: 'asc'
			}
		}, {
			total: $scope.courses.length,
			getData: function($defer, params) {
            	// use built-in angular filter
				var orderedData = params.sorting() ? $filter('orderBy')($scope.courses, params.orderBy()) : $scope.courses;
		        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
		});

		// Model for delete course modal
		$scope.deleteModal = {
			title: "Delete Course",
			content: "Are you sure you want to delete this course?"
		};
	}]);
