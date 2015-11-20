app.controller('AddSongCtrl',
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


      this.newSong = {};
      
      this.songs = $songsArray(ref);


      this.addSong = function() {
        this.songs.$add({
        	album: this.newSong.album,
          artist: this.newSong.artist,
          year: this.newSong.year,
          genre: this.newSong.genre,
          title: this.newSong.title,
        });
        console.log("newSong added: ", this.newSong);

        this.newSong = {
          album: null,
          artist: null,
          year: null,
          genre: null,
          title: null   
        };

      }.bind(this);
    }
  ]
);