app.controller('SongsCtrl',
  [ '$rootScope',
    '$firebaseArray',
    'Auth',
    function($rootScope, $songsArray, Auth) {
      $rootScope.auth = Auth;
      console.log('$rootScope.auth', $rootScope.auth);
      $rootScope.auth.$onAuth(function(authData) {
        console.log('authData', authData);
      $rootScope.user = authData.uid;
      console.log('$rootScope.user', $rootScope.user);
      var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs/' + $rootScope.user);
      console.log('ref', ref);
      });
      
      // get initial list of songs on page load, filtered by userID. showSong is called from ng-if in song-list partial	
      this.songs_list = $songsArray(ref);
      this.showSong = function(song) {
      	return song;
      }.bind(this);

    }
  ]
);