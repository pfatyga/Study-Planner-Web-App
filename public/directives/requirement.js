angular.module('MyApp')
	.directive('requirement', function($compile) {
		return {
			restrict: 'E',
			//terminal: true,
			replace: true,
			scope: { val: '=', parentData: '=', allCourses: '=', allCourseGroups: '=' },
			link: function(scope, element, attrs) {
				// Pass to ui.sortable requirements list
				var sortableOptions = {
					connectWith: "sortable-requirements"
				};

				// Create template depending on type of requirement
				var template = "";
				if (scope.val.type === 'BoolRequirement') {
					template +=
					'<div class="requirement all-or-any-requirement panel panel-default">' +
						//'<div class="panel-heading">Title</div>' +
						'<div class="panel-body">' +
							'<select class="form-control" ng-model="val.operator">' +
								'<option value="AND">AND</option>' +
								'<option value="OR">OR</option>' +
							'</select>' +
							'<button type="button" class="btn btn-success" ng-click="addCourseRequirement()"><span class="glyphicon glyphicon-plus-sign"></span> Course</button>' +
							'<button type="button" class="btn btn-success" ng-click="addCourseGroupRequirement()"><span class="glyphicon glyphicon-plus-sign"></span> Course Group</button>' +
							'<button type="button" class="btn btn-success" ng-click="addBoolRequirement()"><span class="glyphicon glyphicon-plus-sign"></span> Bool Requirement</button>' +
							'<button type="button" class="btn btn-danger" ng-click="deleteSelf()" ng-if="parentData"><span class="glyphicon glyphicon-minus-sign"></span></button>' +
							'<p style="margin: 0 2px"></p>' +
							'<ul ui-sortable="sortableOptions" class="sortable-childRequirements" ng-model="val.childRequirements">' +
								'<li ng-repeat="req in val.childRequirements"">' +
									'<requirement data-val="req" data-parent-data="val.childRequirements" data-all-courses="allCourses" data-all-course-groups="allCourseGroups"></requirement>' +
								'</li>' +
							'</ul>' +
						'</div>' +
					'</div>'
				}
				else if (scope.val.type === 'CourseRequirement') {
					template +=
					'<div class="requirement course-requirement">' +
						'<input class="form-control" type="text" placeholder="e.g. CS 105" ng-model="val.courseName" ng-options="course for course in allCourses" bs-typeahead data-min-length="0">' +
						'<button type="button" class="btn btn-danger" ng-click="deleteSelf()"><span class="glyphicon glyphicon-minus-sign"></span></button>' +
					'</div>'
				}
				else if (scope.val.type === 'CourseGroupRequirement') {
					template +=
					'<div class="requirement course-group-requirement">' +
						'<select class="form-control" ng-model="val.numCourses">' +
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
						'<input class="form-control" type="text" placeholder="e.g. CS 105 Core" ng-model="val.courseGroup" ng-options="courseGroup for courseGroup in allCourseGroups" bs-typeahead data-min-length="0">' +
						'<button type="button" class="btn btn-danger" ng-click="deleteSelf()"><span class="glyphicon glyphicon-minus-sign"></span></button>' +
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

				// Functions for BoolRequirement
				if (scope.val.type === 'BoolRequirement') {
					// Adds a CourseRequirement
					scope.addCourseRequirement = function() {
						scope.val.childRequirements.push({
							//parent: scope.val,
							type: 'CourseRequirement',
							courseName: ''
						});

						//console.log(scope.val);
					}

					// Adds a CourseGroupRequirement
					scope.addCourseGroupRequirement = function() {
						scope.val.childRequirements.push({
							//parent: scope.val,
							type: 'CourseGroupRequirement',
							numCourses: 'All',
							courseGroup: ''
						});

						//console.log(scope.val);
					}

					// Adds a BoolRequirement
					scope.addBoolRequirement = function() {
						var newBoolRequirement = {
							//parent: scope.val,
							type: 'BoolRequirement',
							operator: 'AND',
							childRequirements: []
						};

						scope.val.childRequirements.push(newBoolRequirement);

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
