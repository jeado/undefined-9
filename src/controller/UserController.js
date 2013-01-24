function UserController($scope, UserService) {
	
	$scope.userList = [];

	$scope.addUser = function(user) {
		$scope.userList.push(user);
	};

	$scope.seledUsers = function() {
		var searchOpts = $scope.searchOpts;

		UserService.getUsers(searchOpts,function(data) {
			$scope.userList = data;
		});
	};
}

angular.module('DemoApp', [])
	.controller('UserController',UserController);