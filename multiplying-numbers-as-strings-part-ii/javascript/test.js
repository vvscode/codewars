describe('Some simple multiplications', function() {
  it('simple', function() {
    Test.assertEquals(multiply("2", "3"), "6");
    Test.assertEquals(multiply("30", "69"), "2070");
    Test.assertEquals(multiply("11", "85"), "935");
  });
});

describe('Some corner test multiplications', function() {
  it('simple', function() {
    Test.assertEquals(multiply("-0.00", "0.0000"), "0");
    Test.assertEquals(multiply("-0.01", "0.0000"), "0");
    Test.assertEquals(multiply("2.01", "3.0000"), "6.03");
    Test.assertEquals(multiply("2", "-3.000001"), "-6.000002");
    Test.assertEquals(multiply("-5.0908", "-123.1"), "626.67748");
  });
});