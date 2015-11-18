var app = angular.module('MusicHistoryApp', ['ngRoute', 'firebase']);

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
      .when('/auth', {
      	templateUrl: 'partials/auth.html',
      	controller: 'AuthCtrl as authCtrl'
      })
      .otherwise({redirectTo: '/songs/list'});

  }]);


app.controller('SongsCtrl',
  [
    '$firebaseArray',
    function($songsArray) {
      // get initial list of songs on page load	
      var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');
      this.songs_list = $songsArray(ref);

    }
  ]
);

app.controller('AddSongCtrl',
  [
    '$firebaseArray',
    function($songsArray) {

    	var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');
    	this.songs = $songsArray(ref);
      this.newSong = {};
      console.log('this.songs', this.songs);


      this.addSong = function() {
        this.songs.$add({
        	album: this.newSong.album,
          artist: this.newSong.artist,
          year: this.newSong.year,
          genre: this.newSong.genre,
          title: this.newSong.title
        });
        console.log("newSong added: ", this.newSong);
      }.bind(this);
    }
  ]
);

app.controller('SongDetailCtrl',
	[
		'$routeParams',
		'$firebaseArray',
		function($routeParams, $songsArray) {
			this.selectedSong = {};
			this.songId = $routeParams.songId;

			var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');
			this.songs = $songsArray(ref);
			
			this.songs.$loaded()
        .then(function() {
          // The $getRecord method on a $firebaseArray is very useful
          this.selectedSong = this.songs.$getRecord(this.songId);
        })
        .catch(function(error) {
          console.log("Error: ", error);
        });
		}
	]
);

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



