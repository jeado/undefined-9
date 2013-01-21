describe("Calculator", function() {
	var cal;

	beforeEach(function() {
		cal = new Calculator();
	});

	afterEach(function() {
		cal = null;
	});

	describe("add()", function() {
		it("값 2개를 받아와 합을 리턴한다",function() {
			var sum = cal.add(1,2);

			expect(sum).toEqual(3);
		});
	});
});