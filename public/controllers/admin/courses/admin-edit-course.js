angular.module('MyApp')
	.controller('AdminEditCourseController', ['$scope', '$stateParams', '$state', 'CourseManager', 'Courses',
				function($scope, $stateParams, $state, CourseManager, Courses) {		
		$scope.title = "Edit Course";
		$scope.submit_text = "Save Course";

		var c = Courses.get({ id: $stateParams.courseId }, function(course) {
			console.log('course:');
			console.log(c);
			console.log(course);
		});

		// Get course to be edited
		CourseManager.getCourse($stateParams.courseId, function(course) {
			$scope.course = course;
			console.log($scope.course);

			// Clone course
			$scope.editedCourse = $.extend(new Course(), JSON.parse(JSON.stringify($scope.course)));
			console.log($scope.editedCourse);
		});

		// Saves the edited course
		$scope.saveCourse = function() {
			// TODO - validate
			CourseManager.editCourse($scope.editedCourse);
			$state.go('admin.courses');
		}

		$scope.preReqs = [
			[
				{ name: "" }
			]
		];

		$scope.preReqAnd = function() {
			$scope.preReqs.push([{ name: "" }]);
		};

		$scope.preReqOr = function(index) {
			$scope.preReqs[index].push({ name: "" });
		};

		$scope.coReqs = [
			[
				{ name: "" }
			]
		];

		$scope.coReqAnd = function() {
			$scope.coReqs.push([{ name: "" }]);
		};

		$scope.coReqOr = function(index) {
			$scope.coReqs[index].push({ name: "" });
		};
	}]);
