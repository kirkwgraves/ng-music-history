var app = angular.module('MusicHistoryApp', ['ngRoute', 'firebase', 'Songs.User']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/songs/list', {
        templateUrl: 'partials/songs-list.html',
        controller: 'SongsCtrl as songsCtrl'
      })
      .when('/songs/new', {
        templateUrl: 'partials/add-song.html',
        controller: 'AddSongCtrl as addSongCtrl'
      })
      .when('/songs/:songId', {
      	templateUrl: 'partials/song-detail.html',
      	controller: 'SongDetailCtrl as songDetailCtrl'
      })
      .when('/login', {
      	templateUrl: 'partials/user-login.html',
      	controller: 'UserCtrl as userCtrl'
      })
      .when('/register', {
      	templateUrl: 'partials/user-new.html',
      	controller: 'UserCtrl as userCtrl'
      })
      .otherwise({redirectTo: '.'});

  }]);








app.controller('AuthCtrl',
	[
		'$firebaseAuth',
		function($firebaseAuth) {
			var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');

			var auth = $firebaseAuth(ref);

			auth.$authWithOAuthPopup('facebook').then(function(authData) {
				console.log('Logged in as: ', authData.uid);
			}).catch(function(error) {
				console.log('Authentication failed: ', error);
			});
		}
	]
);



