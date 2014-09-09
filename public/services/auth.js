angular.module('MyApp')
	.factory('Auth', ['$http', '$location', '$rootScope', '$cookieStore', '$alert',
	                  function($http, $location, $rootScope, $cookieStore, $alert) {
		$rootScope.currentUser = $cookieStore.get('user');
		$cookieStore.remove('user');
		
		return {
			signup: function(user) {
			},
			login: function(user) {
				$rootScope.currentUser = data;
				$location.path('/');
				$alert({
					title: 'Success!',
					content: 'You have successfully logged in.',
					placement: 'top-right',
					type: 'success',
					duration: 3
				});
			},
			logout: function() {
				$rootScope.currentUser = null;
				$cookieStore.remove('user');
				$alert({
					content: "You have been logged out.",
					placement: 'top-right',
					type: 'info',
					duration: '3'
				});
			}
		};
	}]);
