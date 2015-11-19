var app = angular.module('MusicHistoryApp', ['ngRoute', 'firebase', 'Songs.User']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/user-login.html',
        controller: 'UserCtrl as userCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/user-new.html',
        controller: 'UserCtrl as userCtrl'
      })
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
      .otherwise({redirectTo: '.'});

  }]);
