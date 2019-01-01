Test.describe("Basic tests", function(){
  Test.it("It should work for basic tests", function(){
    Test.assertEquals(f(),'Hello, world!');
  });
});

Test.describe("Code length check", function(){
  Test.it("Every line should have less than 3 characters", function(){
    const limit = 3;
    const lines = usercode.split('\n');
    Test.expect(Math.max(...lines.map(s=>s.length))<limit, `Some lines of your code exceeded the character limit`);
  });
  Test.it("There should be less than 40 lines", function(){
    const limit = 40;
    const lines = usercode.split('\n');
    Test.expect(lines.length<limit, `Your code has ${lines.length} lines`);
  });
});