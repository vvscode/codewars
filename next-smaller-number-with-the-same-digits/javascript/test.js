Test.describe("Fixed tests", function() {
	Test.it("Smaller numbers", function() {
    Test.assertEquals(nextSmaller(21), 12)
 		Test.assertEquals(nextSmaller(907), 790)
		Test.assertEquals(nextSmaller(531), 513)
		Test.assertEquals(nextSmaller(135), -1)
		Test.assertEquals(nextSmaller(2071), 2017)
		Test.assertEquals(nextSmaller(1027), -1)
		Test.assertEquals(nextSmaller(414), 144)
	})
  
	Test.it("Bigger numbers", function() {
		Test.assertEquals(nextSmaller(123456798), 123456789)
		Test.assertEquals(nextSmaller(123456789), -1)
		Test.assertEquals(nextSmaller(1234567908), 1234567890)
	})
})