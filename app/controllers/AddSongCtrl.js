app.controller('AddSongCtrl',
  [
    '$firebaseArray',
    'Auth',
    function($songsArray, Auth) {

    	var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');
    	this.songs = $songsArray(ref);
      this.newSong = {};
      this.auth = Auth;
      this.auth.$onAuth(function(authData) {
        this.userData = authData.uid;
      }.bind(this));
      console.log('this.songs', this.songs);


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