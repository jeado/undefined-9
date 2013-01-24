describe("UserController", function() {
	
	var userController,
			scope;

	beforeEach(module('DemoApp'));	
	beforeEach(inject(function($rootScope, $controller) {
		
		scope = $rootScope.$new();

		userController = $controller("UserController", {
        $scope: scope
    });

	}));

  it("사용자를 추가할 수 있어야 한다.", function() {
      // scope.userList = [{name: 'name1'}, {'name': 'name2'}];
      scope.addUser({name: 'jeado'});
      expect(scope.userList[scope.userList.length-1].name).toMatch("jeado");
  });

});