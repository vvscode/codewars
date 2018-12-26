# Description of the kata

Name: Don't rely on luck HARDCORE

URL: http://www.codewars.com/kata/dont-rely-on-luck-hardcore

Author: Vasiliy Vanchuk

Rank: -3

Slug: dont-rely-on-luck-hardcore

Project ID: 5c2102c372ad3b5831000075

Solution ID: 5c2102c34f43955deb000085

Tags: Refactoring, Object-oriented Programming, Programming Paradigms, Mathematics, Algorithms, Logic, Numbers, Prototypes, Security

## Task

The test fixture I use for this kata is incredibly harder than this kata: http://www.codewars.com/kata/dont-rely-on-luck/train/javascript

You should be able to finish that kata before this.

This test fixture will compare your guess to a random number generated 
in Javascript/CoffeeScript by:

`Math.floor(Math.random() * 100000 + 1)`
You can pass only by relying on skill - because our tests will be repeated for multiple times.

>And note that in HARDCORE mode: there are strict anti-cheat measures!!
PREPARE to hack into the internals of javascript.

> Also note that there are cheating methods that can solve all katas, but please do not use them, they will be detected by the Codewars system (by testing if tests that should fail actually pass) and you will lose your points. Please use a method that only works for this particular kata.

Finished this one? You are up for a harder challenge: http://www.codewars.com/kata/55041210decf057109000277

## Code

```javascript
guess=42; // The answer to everything, huh?
```

## Test

```javascript
})();
//This is an basic test fixture, it has basic anticheat measures
var lastrandom=-1;
createLuckyNumber = function(){
  var random=Math.random();
  if(lastrandom>0){
    Test.assertNotEquals(random, lastrandom, "Sorry.Random numbers shouldn't repeat: "+random);
  }
  lastrandom=random;
  return Math.floor(random * 100000 + 1);
}

describe("Basic checks", function(){
for(var i=0;i<10;i++){
  Test.assertEquals(createLuckyNumber(),guess, "Sorry. Unlucky this time.");
}
})

describe("Hardcore Checks",function(){
  // Guess what advanced anticheat means...
});


```

