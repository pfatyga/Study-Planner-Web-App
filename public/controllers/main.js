angular.module('MyApp')
	.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
		// TODO - test code, should remove
		$rootScope.currentUser = {
			username: 'msmith'
		};
	}]);
