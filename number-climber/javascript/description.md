# Description of the kata

Name: Number climber

URL: http://www.codewars.com/kata/number-climber

Author: Vasiliy Vanchuk

Rank: -7

Slug: number-climber

Project ID: 5c0b84913cff0dee7e0000da

Solution ID: 5c0b84923cff0dee7e0000dc

Tags: Fundamentals

## Task

For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1. 

For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :
```
 3 =  2*1 +1
 6 =  2*3
 13 = 2*6 +1
```

Write a function that returns this sequence given a number N. Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prependig the elements to a list.

## Code

```javascript
function climb(n){
  // ...
}
```

## Test

```javascript
Test.assertSimilar(climb(1), [1]);
Test.assertSimilar(climb(10), [1, 2, 5, 10]);
Test.assertSimilar(climb(13), [1, 3, 6, 13]);

```

