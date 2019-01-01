# Description of the kata

Name: Multi Line Task++: Hello World

URL: http://www.codewars.com/kata/multi-line-task-plus-plus-hello-world

Author: Vasiliy Vanchuk

Rank: -2

Slug: multi-line-task-plus-plus-hello-world

Project ID: 5c2a30c096115625db28922f

Solution ID: 5c2a30c196115625db289231

Tags: Fundamentals

## Task

You need to write a function `f` that returns the string `Hello, world!`.

Requirement: Every line must have at most `2` characters, and total number of lines must be less than `40`.

Hint: It's possible to complete this in `28` lines only.

---

(Even) harder verion: https://www.codewars.com/kata/59a421985eb5d4bb41000031

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
```

