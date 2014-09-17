angular.module('MyApp')
	.controller('LoginController', ['$scope', 'Auth', function($scope, Auth) {
		$scope.login = function() {
			Auth.login({
				email: $scope.email,
				password: $scope.password
			});
		};
	}]);
