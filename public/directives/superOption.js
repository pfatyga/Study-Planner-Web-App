angular.module('MyApp')
	.directive('superoption', function() {
		return {
			require: '^superselect',
			restrict: 'E',
			transclude: true,
			scope: {},
			link: function(scope, element, attrs, superSelectCtrl) {
				//console.log('linking superoption ');
				//console.log(element);
				superSelectCtrl.addOption(scope);
			},
			controller: function($scope, $element, $attrs) {
				$scope.onClick = function() {
					//$scope.selected = !$scope.selected;
				}
			},
			template:
				'<option contenteditable="true" class="super-option" ng-click="onClick()" ng-transclude>' +
				'</option>',
			replace: true
		};
	});
