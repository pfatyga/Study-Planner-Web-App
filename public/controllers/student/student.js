angular.module('MyApp')
    .controller('StudentController', ['$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.userType = 'Student';
    }]);
