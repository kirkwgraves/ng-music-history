app.controller('songsCtrl', function($scope) {
	$scope.songs = null;
	$scope.moreSongs = null;
	$scope.allSongs = [];

	$.ajax('json/songs.json')
	.done(function(songsData) {
		$scope.songs = songsData.songs;
		$scope.$apply();
		console.log('songs', $scope.songs);		
	}).fail(function(error) {
		console.log('error', error);
	});


	$.ajax('json/moreSongs.json')
	.done(function(moreSongsData) {
		$scope.moreSongs = moreSongsData.moreSongs;
		$scope.$apply();
		console.log('moreSongs', $scope.moreSongs);
	}).fail(function(error) {
		console.log('error', error);
	});

	console.log($scope.moreSongs);
	// $scope.allSongs = $scope.songs.concat($scope.moreSongs);
	// console.log('allSongsArray', $scope.allSongs);

});