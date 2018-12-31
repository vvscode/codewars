Test.describe("Basic tests", function(){
  Test.it("It should work for basic tests", function(){
    Test.assertEquals(f(),'Hello, world!');
  });
});

Test.describe("Code length check", function(){
  Test.it("Every line should have less than 2 characters", function(){
    const limit = 2;
    const lines = usercode.split('\n');
    Test.expect(Math.max(...lines.map(s=>s.length))<limit, 'Some lines of your code exceeded the character limit');
  });
  Test.it("There should be less than 145 lines", function(){
    const limit = 145;
    const lines = usercode.split('\n');
    Test.expect(lines.length<limit, `Your code has ${lines.length} lines`);
  });
});