describe("UserMnge E2E Test", function() {
	beforeEach(function() {
    browser().navigateTo('index.html');
    // expect(browser().location().url()).toBe('/phones');
  });

	it("5개의 로우를 렌더링 해야 한다.", function() {
		element('.input-append .searchBtn').click();
  	expect(repeater('table tbody tr').count()).toEqual(5);
  });
});