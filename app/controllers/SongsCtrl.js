app.controller('SongsCtrl',
  [
    '$firebaseArray',
    'Auth',
    function($songsArray, Auth) {
      var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');
      var auth = ref.getAuth();
      var user = auth.uid;
      
      // get initial list of songs on page load, filtered by userID. showSong is called from ng-if in song-list partial	
      this.songs_list = $songsArray(ref);
      this.showSong = function(song) {
      	return song.userId === user;
      }.bind(this);

    }
  ]
);