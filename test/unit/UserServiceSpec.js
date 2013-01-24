describe("UserService", function() {
	
  var $httpBackend,
      service;

  beforeEach(module('DemoApp'));

  beforeEach(inject(function(UserService, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    service = UserService;
  }));

  describe("getUsers", function() {
    it("사용자 정보를 가지고 온다.", function() {
      $httpBackend.expectGET('/json/users.json').respond([{name: 'name1'}, {'name': 'name2'}]);

      service.getUsers({},function(data) {
        expect(data.length).toBeGreaterThan(0);
      });

      $httpBackend.flush();
    });
  });
});

describe("UserServiceF", function() {
  
  var $httpBackend,
      userServiceF;

  beforeEach(module('DemoApp'));

  beforeEach(inject(function(UserServiceF, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    userServiceF = UserServiceF;
  }));

  describe("getUsers", function() {
    it("사용자 정보를 가지고 온다.", function() {
      $httpBackend.expectGET('/json/users.json').respond([{name: 'name1'}, {'name': 'name2'}]);

      userServiceF.getUsers({},function(data) {
        expect(data.length).toBeGreaterThan(0);
      });

      $httpBackend.flush();
    });
  });
});

describe("UserServiceP", function() {
  
  var $httpBackend,
      userServiceP;

  beforeEach(module('DemoApp'));
  beforeEach(module(function(UserServicePProvider) {
      UserServicePProvider.setContextRoot('/test/');
  }));

  beforeEach(inject(function(UserServiceP, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    userServiceP = UserServiceP;
  }));

  describe("getUsers", function() {

    it("사용자 정보를 가지고 온다.", function() {
      $httpBackend.expectGET('/test/json/users.json').respond([{name: 'name1'}, {'name': 'name2'}]);

      userServiceP.getUsers({},function(data) {
        expect(data.length).toBeGreaterThan(0);
      });

      $httpBackend.flush();
    });
  });
});