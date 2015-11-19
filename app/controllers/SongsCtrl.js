app.controller('SongsCtrl',
  [ 'rootScope',
    '$firebaseArray',
    'Auth',
    function($rootScope, $songsArray, Auth) {
      var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs/' + $rootScope.user);
      var user = auth.uid;
      var auth = ref.getAuth();
      
      // get initial list of songs on page load, filtered by userID. showSong is called from ng-if in song-list partial	
      this.songs_list = $songsArray(ref);
      this.showSong = function(song) {
      	return song;
      }.bind(this);

    }
  ]
);