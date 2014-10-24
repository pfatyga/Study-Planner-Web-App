angular.module('MyApp')
	.controller('AdminController', ['$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.userType = 'Admin';
	}]);
