describe("UserController", function() {
	
	var $httpBackend,
			userController,
			scope;

	beforeEach(module('DemoApp'));	
	beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
		
		scope = $rootScope.$new();
		
		$httpBackend = _$httpBackend_;
		$httpBackend.when('GET','/json/users.json').respond([{name: 'jeado'}, {'name': 'jeado'}]);

		userController = $controller("UserController", {
        $scope: scope
    });
	}));

  it("사용자를 추가할 수 있어야 한다.", function() {
      // scope.userList = [{name: 'name1'}, {'name': 'name2'}];
      scope.addUser({name: 'jeado'});
      expect(scope.userList[scope.userList.length-1].name).toMatch("jeado");
  });

  it("사용자를 조회할 수 있어야 한다.", function() {

      scope.selectUsers({});
      
      $httpBackend.flush();

      expect(scope.userList[scope.userList.length-1].name).toMatch("jeado");
  });

});