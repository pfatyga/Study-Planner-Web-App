angular.module('MyApp')
	.directive('editablelist', function() {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {},
			controller: function($scope, $element, $attrs) {
				$attrs.$observe('placeholder', function(value) {
					$scope.placeholder = value;
				});

				$attrs.$observe('addItem', function(value) {
					$scope.addItem = value;
				});

				//$scope.addItem = function() {
				//}
			},
			template:
				'<div class="editable-list">' +
				'<input class="form-control" type="text" placeholder="{{ placeholder }}" ng-enter="addItem()">' +
					'<ul style="list-style: none; padding: 0">' +
						'<li>' +
							'<div class="input-group">' +
								'<input class="form-control" type="text" ng-enter="">' +
								'<span class="input-group-btn">' +
									'<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-remove"></span></button>' +
								'</span>' +
							'</div>' +
						'</li>' +
					'</ul>' +
					'<div class="tab-content" ng-transclude></div>' +
				'</div>'
		};
	});
