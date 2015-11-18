angular.module('Songs.User')
	.factory('Auth', ['$firebaseAuth',
		function($firebaseAuth) {
			var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/');
			return $firebaseAuth(ref);
		}
	]);