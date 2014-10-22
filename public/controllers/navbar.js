angular.module('MyApp')
	.controller('NavbarController', ['$scope', 'Auth', function($scope, Auth) {
		$scope.userType = "Student";
        $scope.logout = function() {
			Auth.logout();
		};
	}]);
