angular.module('MyApp')
	.directive('superselect', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: function($scope, $element, $attrs) {
				//console.log($attrs);
				$attrs.$observe('data-model', function(value) {
					
				});

				$scope.element = $element;
				$scope.options = [];

				$scope.deleteOptions = function() {
					console.log('deleting options');
					console.log($scope.options);
				}

				$scope.onChange = function(value) {
					console.log('onChange superselect');
					console.log(value);
				}

				this.addOption = function(option) {
					console.log($scope.options);
					$scope.options.push(option);
					console.log($scope.options[0].selected);
				}
			},
			template:
				'<div class="super-select-wrapper">' +
					'<select multiple size="8" class="superselect form-control" ng-model="model" ng-change="onChange(element)" ng-transclude>' +
					'</select>' +
					'<button type="button" class="btn btn-danger btn-delete-superoption" ng-click="deleteOptions()">' +
						'<span class="glyphicon glyphicon-remove"></span>' +
					'</button>' +
				'</div',
			replace: true
		};
	});
