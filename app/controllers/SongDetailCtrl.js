app.controller('SongDetailCtrl',
	[
		'$routeParams',
		'$firebaseArray',
		function($routeParams, $songsArray) {
			this.selectedSong = {};
			this.songId = $routeParams.songId;
			console.log('$routeParams', $routeParams);

			var ref = new Firebase('https://scorching-heat-1482.firebaseio.com/songs');
			this.songs = $songsArray(ref);
			// console.log('this.songs', this.songs);
			
			this.songs.$loaded()
        .then(function() {
          // The $getRecord method on a $firebaseArray is very useful
          console.log('this.songs', this.songs);
          this.selectedSong = this.songs.$getRecord(this.songId);
          console.log('this.selectedSong', this.selectedSong);
        }.bind(this))
        .catch(function(error) {
          console.log("Error: ", error);
        }.bind(this));
		}
	]
);