describe("Kata Test Suite", function(){
  it("should calculate large Fibonacci numbers", function(){
    Test.assertEquals(fibonacci(70), 190392490709135);
    Test.assertEquals(fibonacci(60), 1548008755920);
    Test.assertEquals(fibonacci(50), 12586269025);
  });
});
