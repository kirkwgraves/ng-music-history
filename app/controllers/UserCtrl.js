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
				console.log('this.message', this.message);
			}.bind(this)).catch(function(error) {
				this.error = error;
			}.bind(this));

			this.email = null;
			this.password=null;
		};

		this.removeUser = function() {
			this.message = null;
			this.error = null;

			Auth.$removeUser({
				email: this.email,
				password: this.password
			}).then(function() {
				this.message = "User removed";
				console.log('this.message', this.message);
			}.bind(this)).catch(function(error) {
				this.error = error;
			}.bind(this));

			this.email = null;
			this.password = null;
		};

		this.loginUser = function() {
			Auth.$authWithPassword({
				email: this.email,
				password: this.password
			}).then(function(authData) {
				console.log('Logged in as: ',authData);
				this.authData = authData;
			}.bind(this)).catch(function(error) {
				this.error = error;
				console.log('Authentication failed: ', error);
			}.bind(this));			
		};
	
	}

]);