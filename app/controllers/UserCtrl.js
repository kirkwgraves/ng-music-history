angular.module('Songs.User')
	.controller('UserCtrl', ['Auth', function(Auth) {

		this.createUser = function() {
			this.message = null;
			this.error = null;
		
			Auth.$createUser({
				email: this.email,
				password: this.password
			}).then(function(userData) {
				this.message = "User created with uid: " + userData.uid;
			}).catch(function(error) {
				this.error = error;
			});
		}.bind(this);

		this.removeUser = function() {
			this.message = null;
			this.error = null;

			Auth.removeUser({
				email: this.email,
				password: this.password
			}).then(function() {
				this.message = "User removed";
			}).catch(function(error) {
				this.error = error;
			});
		}.bind(this);

		this.loginUser = function() {
			Auth.$authWithPassword({
				email: this.email,
				password: this.password
			}).then(function(authData) {
				console.log('Logged in as: ',authData);
				this.authData = authData;
			}).catch(function(error) {
				this.error = error;
				console.log('Authentication failed: ', error);
			});			
		}.bind(this);
	
	}

]);