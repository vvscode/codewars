# Description of the kata

Name: The fusc function  -- Part 1

URL: http://www.codewars.com/kata/the-fusc-function-part-1

Author: Vasiliy Vanchuk

Rank: -7

Slug: the-fusc-function-part-1

Project ID: 5c0b7a7b85e9ff61470000b8

Solution ID: 5c0b7a7b85e9ff61470000ba

Tags: Algorithms

## Task

The fusc function is defined recursively as follows:

    fusc(0) = 0
    fusc(1) = 1
    fusc(2n) = fusc(n)
    fusc(2n + 1) = fusc(n) + fusc(n + 1)
    
Your job is to produce the code for the `fusc` function. In this kata, your function will be tested with small values of `n`, so you should not need to be concerned about stack overflow or timeouts. 

When done, move on to [Part 2](http://www.codewars.com/kata/the-fusc-function-part-2).

## Code

```javascript
function fusc(n){
  
}
```

## Test

```javascript
Test.describe("The fusc function -- part 1", function() {
  Test.describe("Example tests", function() {
    Test.assertEquals(fusc(0), 0) 
    Test.assertEquals(fusc(1), 1)
    Test.assertEquals(fusc(85), 21)
  
    let solutions = [0, 1, 1, 2, 1, 3, 2, 3, 1, 4, 3, 5, 2, 5, 3, 4, 1, 5, 4, 7, 3];
    for(let i=0; i<solutions.length; i++){
    	Test.assertEquals(fusc(i), solutions[i]);
    }
  });
});
```

