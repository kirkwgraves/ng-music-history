app.controller('AddSongCtrl',
  [
    '$firebaseArray',
    function($songsArray) {

    	var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');
    	this.songs = $songsArray(ref);
      this.newSong = {};
      console.log('this.songs', this.songs);


      this.addSong = function() {
        this.songs.$add({
        	album: this.newSong.album,
          artist: this.newSong.artist,
          year: this.newSong.year,
          genre: this.newSong.genre,
          title: this.newSong.title
        });
        console.log("newSong added: ", this.newSong);
      }.bind(this);
    }
  ]
);