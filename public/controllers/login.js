angular.module('MyApp')
	.controller('LoginController', ['$scope', function($scope) {
		$scope.login = function() {
			Auth.login({
				email: $scope.email,
				password: $scope.password
			});
		};
	}]);
