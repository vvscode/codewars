# Description of the kata

Name: Large Factorials

URL: http://www.codewars.com/kata/large-factorials

Author: Vasiliy Vanchuk

Rank: -4

Slug: large-factorials

Project ID: 59d124af9f0cbc63a50000b5

Solution ID: 59d124b0a25c8c34e1000033

Tags: Algorithms, Big Integers, Integers, Data Types, Numbers

## Task

In mathematics, the factorial of integer `n` is written as `n!`. It is equal to the product of `n` and every integer preceding it. For example: `5! = 1 x 2 x 3 x 4 x 5 = 120`

Your mission is simple: write a function that takes an integer `n` and returns the value of `n!`.

You are guaranteed an integer argument. For any values outside the non-negative range, return `null`, `nil` or `None` (return an empty string `""` in **C** and **C++**).  For non-negative numbers a full length number is expected for example, return `25! =  "15511210043330985984000000" ` as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

## Code

```javascript
function factorial(n){
  // Add some code
}
```

## Test

```javascript
Test.assertEquals(factorial(1), '1', '1!');
Test.assertEquals(factorial(5), '120', '5!');
Test.assertEquals(factorial(9), '362880', '9!');
Test.assertEquals(factorial(15), '1307674368000', '15!');
```

