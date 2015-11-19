app.directive('musicHistorySongDetail', function() {
	return {
		restrict: 'E', //restrict directive to element
		scope: {
			selectedSong: '=song',
			maxRating: '=' //bind 'max-rating' to maxRating local variable
		},
		templateUrl: 'partials/song-detail.html',
		link: function(scope, elem, attrs) {
			 /*
        Create a new key on the song called `stars`. It's
        an array of objects. Each object contains which 
        class to use on each of the stars.
       */
   		function setStars() {
      	scope.stars = [];
        var rating = parseInt(scope.selectedSong.rating);
        for (var i = 0; i < scope.maxRating; i++) {
          var clazz = (rating <= i) ? "star--empty" : "star--filled";
          scope.stars.push({class: clazz});
        }        
      }

       /*
        Since the selectedSong in the `song-view` template
        is bound directly to an object in the controller
        that gets updated after an XHR, I have to watch that
        variable for changes and then run the logic again
        once it gets updated values.
       */
      scope.$watch('selectedSong', function(value){
        console.log("value changed");
        scope.selectedSong = value;
        setStars();
      });

      setStars();

		}
	}
});