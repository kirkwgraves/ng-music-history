app.controller('AddSongCtrl',
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
      }.bind(this);
    }
  ]
);