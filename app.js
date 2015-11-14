var app = angular.module('MusicHistoryApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/songs-list.html',
        controller: 'SongsCtrl'
      })
      .when('/add', {
        templateUrl: 'partials/add-song.html',
        controller: 'AddSongCtrl'
      });
  }]);

app.factory('song_service', function($http, $q) {
  
  var songList = [];

  function init() {
    return $q(function(resolve, reject) {
    	$http
      	.get('./data/songs.json')
      	.success(
        	function(objectFromJSONFile) {
          	songList = objectFromJSONFile.songs;
          	console.log('songList', songList);
          	resolve(songList)
        	},function(error) {
         	 reject(error);
        	}
      	);
    });
  };

  var promise = init();

  function getSongs(){
  	console.log('songList', songList);
    return promise;
  }

  console.log('songList', songList);

  function getSingleSong(id) {
    return songList.filter(function(song){
    	console.log('song', song);
      return song.id === id;
    })[0];
  }

  function addSong(songObj) {
    songList.push(songObj);
    return songList;
  }

  return {
    getSongs: getSongs,
    getSingleSong: getSingleSong,
    addSong: addSong
  };
}); //end factory

app.controller('SongsCtrl',
  [
    '$scope',
    'song_service',
    function($scope, song_service) {
      // get initial list of songs on page load
      song_service.getSongs().then(function(songsList) {
      	$scope.songs_list = songsList;
	      console.log('$scope.songs_list', $scope.songs_list);

      });
    }
  ]
);

app.controller("AddSongCtrl",
  [
    "$scope",
    "song_service",
    function($scope, song_service ) {
      $scope.newSong = { title: "", album: "", year: "", artist: "" };

      $scope.addSong = function() {
        $scope.songs_list = song_service.addSong({
          artist: $scope.newSong.artist,
          title: $scope.newSong.title,
          album: $scope.newSong.album
        });
        console.log("Add song", $scope.songs_list);
      };
    }
  ]
);



