# Description of the kata

Name: Multi Line Task∞: Hello World

URL: http://www.codewars.com/kata/multi-line-task-hello-world

Author: Vasiliy Vanchuk

Rank: -1

Slug: multi-line-task-hello-world

Project ID: 5c2a301dea9b77015952af95

Solution ID: 5c2a301dea9b77015952af97

Tags: Fundamentals, Puzzles, Games

## Task

You need to write a function `f` that returns the string `Hello, world!`.

Requirement: Every line must have at most `1` character, and total number of lines must be less than `145`.

Hint:  It's possible to complete this in `99` lines only.

---

Easier version: https://www.codewars.com/kata/5935558a32fb828aad001213

---

Trivia: While `∞` can be pronounced as `infinity`, it's preferred to be pronounced as `mugen` here. It's the same, but way cooler.

## Code

```javascript
f=_=>//coding and coding.. shorter and more shorter..
```

## Test

```javascript
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
```

