angular.module('MyApp')
	.directive('requirement', function($compile) {
		return {
			restrict: 'E',
			//terminal: true,
			replace: true,
			scope: { val: '=', parentData: '=' },
			link: function(scope, element, attrs) {
				//console.log(scope.val);

				// Create template depending on type of requirement
				var template = "";
				if (scope.val.type === 'AllOrAnyRequirement') {
					template +=
					'<div class="requirement all-or-any-requirement">' +
						'<select class="form-control">' +
							'<option value="All">All</option>' +
							'<option value="Any">Any</option>' +
						'</select>' +
						'<button type="button" class="btn btn-success" ng-click="addCourseRequirement()"><span class="glyphicon glyphicon-plus"></span> Course</button>' +
						'<button type="button" class="btn btn-success" ng-click="addCourseGroupRequirement()"><span class="glyphicon glyphicon-plus"></span> Course Group</button>' +
						'<button type="button" class="btn btn-success" ng-click="addAllOrAnyRequirement()"><span class="glyphicon glyphicon-plus"></span> Requirement Group</button>' +
						'<button type="button" class="btn btn-danger" ng-click="deleteSelf()" ng-if="parentData"><span class="glyphicon glyphicon-minus"></span></button>' +
						'<ul>' +
							'<li ng-repeat="req in val.requirements">' +
								'<requirement val="req" parent-data="val.requirements"></requirement>' +
							'</li>' +
						'</ul>' +
					'</div>'
				}
				else if (scope.val.type === 'CourseRequirement') {
					template +=
					'<div class="requirement course-requirement">' +
						'<input class="form-control" type="text" placeholder="e.g. CS 284" ng-model="val.courseName">' +
						'<button type="button" class="btn btn-danger" ng-click="deleteSelf()"><span class="glyphicon glyphicon-minus"></span></button>' +
					'</div>'
				}
				else if (scope.val.type === 'CourseGroupRequirement') {
					template +=
					'<div class="requirement course-group-requirement">' +
						'<select class="form-control" ng-model="val.numCourses">' +
							'<option value=""></option>' +
							'<option value="All">All</option>' +
							'<option value="1">1</option>' +
							'<option value="2">2</option>' +
							'<option value="3">3</option>' +
							'<option value="4">4</option>' +
							'<option value="5">5</option>' +
							'<option value="6">6</option>' +
							'<option value="7">7</option>' +
							'<option value="8">8</option>' +
							'<option value="9">9</option>' +
							'<option value="10">10</option>' +
						'</select> from ' +
						'<input class="form-control" type="text" placeholder="e.g. CS 181 Core" ng-model="val.courseGroup">' +
						'<button type="button" class="btn btn-danger" ng-click="deleteSelf()"><span class="glyphicon glyphicon-minus"></span></button>' +
					'</div>'
				}

				// Removes requirement from parent (if parent exists)
				scope.deleteSelf = function(index) {
					if (scope.parentData != null) {
						var index = scope.parentData.indexOf(scope.val);
						if (index >= 0) {
							scope.parentData.splice(index, 1);
						}
					}
				}

				// Functions for AllOfAnyRequirement
				if (scope.val.type === 'AllOrAnyRequirement') {
					// Adds a CourseRequirement
					scope.addCourseRequirement = function() {
						scope.val.requirements.push({
							//parent: scope.val,
							type: 'CourseRequirement',
							courseName: ''
						});

						//console.log(scope.val);
					}

					// Adds a CourseGroupRequirement
					scope.addCourseGroupRequirement = function() {
						scope.val.requirements.push({
							//parent: scope.val,
							type: 'CourseGroupRequirement',
							numCourses: 'All',
							courseGroup: ''
						});

						//console.log(scope.val);
					}

					// Adds an AllOrAnyRequirement
					scope.addAllOrAnyRequirement = function() {
						var newAllOrAnyRequirement = {
							//parent: scope.val,
							type: 'AllOrAnyRequirement',
							allOrAny: 'All',
							requirements: []
						};

						newAllOrAnyRequirement.requirements.push({
							//parent: newAllOrAnyRequirement,
							type: 'CourseGroupRequirement',
							numCourses: 'All',
							courseGroup: ''
						});

						scope.val.requirements.push(newAllOrAnyRequirement);

						//console.log(scope.val);
					}
				}

				// Compile new element
				var newElement = angular.element(template);
				$compile(newElement)(scope);
				element.replaceWith(newElement);
			}
		};
	});
