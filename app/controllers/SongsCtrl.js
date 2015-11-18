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