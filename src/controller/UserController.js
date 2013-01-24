function UserController($scope, UserService) {
	
	$scope.userList = [];

 	$scope.searchOptions = [
 		{text: '이름', key: 'name', icon:'icon-user',},
  	{text: 'E-Mail', key: 'email', icon:'icon-envelope'}
  ];

	$scope.addUser = function(user) {
		$scope.userList.push(user);
	};

	$scope.selectUsers = function(searchData) {
		console.log(searchData);

		UserService.getUsers(searchData,function(data) {
			$scope.userList = data;
		});
	};
}

DemoApp.controller('UserController',UserController);