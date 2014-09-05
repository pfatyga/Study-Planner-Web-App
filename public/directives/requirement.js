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
				if (scope.val.type === 'AllorAnyRequirement') {
					template +=
					'<div class="requirement all-or-any-requirement">' +
						'<select>' +
							'<option value="All">All</option>' +
							'<option value="Any">Any</option>' +
						'</select> of the following' +
						'<button type="button" ng-click="deleteSelf()">-</button>' +
						'<ul style="list-style: none">' +
							'<li ng-repeat="req in val.requirements">' +
								'<requirement val="req" parent-data="val.requirements"></requirement>' +
							'</li>' +
						'</ul>' +
						'<button type="button" ng-click="addRequirement()">+</button>' +
					'</div>'
				}
				else if (scope.val.type === 'CourseRequirement') {
					template +=
					'<div class="requirement course-requirement">' +
						'<input type="text">' +
						'<button type="button" ng-click="deleteSelf()">-</button>' +
					'</div>'
				}
				else if (scope.val.type === 'CourseGroupRequirement') {
					template +=
					'<div class="requirement course-group-requirement">' +
						'<select>' +
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
						'</select> from' +
						'<input type="text">' +
						'<button type="button" ng-click="deleteSelf()">-</button>' +
					'</div>'
				}

				// Changes requirement type
				scope.editRequirementType = function() {
				}

				// Removes requirement from parent
				scope.deleteSelf = function(index) {
					if (scope.parentData != null) {
						var index = scope.parentData.indexOf(scope.val);
						if (index >= 0) {
							scope.parentData.splice(index, 1);
						}
					}
				}

				if (scope.val.type === 'AllorAnyRequirement') {
					scope.addRequirement = function() {
						scope.val.requirements.push({
							type: 'CourseGroupRequirement',
							parent: scope.val,
							numCourses: 1,
							courseGroup: 'CS'
						});

						console.log(scope.val);
					}
				}

				// Compile new element
				var newElement = angular.element(template);
				$compile(newElement)(scope);
				element.replaceWith(newElement);
			},
			/*template:
				'<div class="requirement" ng-if="val.type == "AllOrAnyRequirement">' +
					'{{val.type}}<select>' +
						'<option value="All">All</option>' +
						'<option value="Any">Any</option>' +
					'</select> of the following' +
				'</div>',*/
		};
	});
