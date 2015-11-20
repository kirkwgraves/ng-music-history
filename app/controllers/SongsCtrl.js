app.controller('SongsCtrl',
  [ 
    '$firebaseArray',
    'Auth',
    function($songsArray, Auth) {
      this.auth = Auth;
      console.log('this.auth', this.auth);
      this.auth.$onAuth(function(authData) {
        console.log('authData', authData);
      this.user = authData.uid;
      console.log('this.user', this.user);
      console.log('ref', ref);
      }.bind(this));
      
      var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs/' + this.user);
      
      // get initial list of songs on page load, filtered by userID. showSong is called from ng-if in song-list partial	
      this.songs_list = $songsArray(ref);
      this.showSong = function(song) {
      	return song;
      }.bind(this);

    }
  ]
);