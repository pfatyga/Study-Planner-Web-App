angular.module('MyApp')
	.directive('tabs', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: function($scope, $element, $attrs) {
				$attrs.$observe('type', function(value) {
					$scope.type = value;
				});

				var panes = $scope.panes = [];

				$scope.select = function(pane) {
					angular.forEach(panes, function(pane) {
						pane.selected = false;
					});
					pane.selected = true;
				}

				this.addPane = function(pane) {
					if (panes.length == 0)
						$scope.select(pane);
					panes.push(pane);
				}
			},
			template:
				'<div class="tabbable">' +
					'<ul class="nav {{type}}">' +
						'<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
							'<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
						'</li>' +
					'</ul>' +
					'<div class="tab-content" ng-transclude></div>' +
				'</div>',
			replace: true
		};
	});
