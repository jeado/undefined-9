function UserService($http) {

	this.getUsers = function(param, callback, error) {
		$http.get("/json/users.json").then(function(response) {
			var data = response.data;
			if(callback) {
				(callback)(data);
			}
			return data;
		},error);
	};

	this.addUser = function(user) {

	};

	this.deleteUser = function(user) {

	};

	this.updateUser = function(user) {

	};
}

DemoApp.service('UserService', UserService);

DemoApp.factory('UserServiceF', function($http) {

    return new UserService($http);
});

DemoApp.provider('UserServiceP', function() {
  var contextRoot = '/';

  this.setContextRoot = function(rootUrl) {
    contextRoot = rootUrl;
  };

	function UserService($http) {

		this.getUsers = function(param, callback, error) {
			$http.get(contextRoot+"json/users.json").then(function(response) {
				var data = response.data;
				if(callback) {
					(callback)(data);
				}
				return data;
			},error);
		};

		this.addUser = function(user) {

		};

		this.deleteUser = function(user) {

		};

		this.updateUser = function(user) {

		};
	}

  this.$get = function($http) {
    return new UserService($http);
  };
});


