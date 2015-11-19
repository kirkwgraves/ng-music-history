app.controller('AddSongCtrl',
  [
    '$firebaseArray',
    'Auth',
    function($songsArray, Auth) {

      this.newSong = {};
      this.auth = Auth;
      this.auth.$onAuth(function(authData) {
        this.userData = authData.uid;
      }.bind(this));
      console.log('userData', this.userData);
      var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs/' + userId);
      this.songs = $songsArray(ref);


      this.addSong = function() {
        this.songs.$add({
        	album: this.newSong.album,
          artist: this.newSong.artist,
          year: this.newSong.year,
          genre: this.newSong.genre,
          title: this.newSong.title,
          userId: this.userData
        });
        console.log("newSong added: ", this.newSong);
      }.bind(this);
    }
  ]
);