angular.module('MyApp')
	.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.currentUser = {
			username: 'msmith'
		};
	}]);
