# Description of the kata

Name: Next bigger number with the same digits

URL: http://www.codewars.com/kata/next-bigger-number-with-the-same-digits

Author: Vasiliy Vanchuk

Rank: -4

Slug: next-bigger-number-with-the-same-digits

Project ID: 5c1b1fd6850427f071000039

Solution ID: 5c1b1fd6850427f07100003b

Tags: Algorithms, Numbers, Data Types, Strings, Integers

## Task

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

```js
12 ==> 21
513 ==> 531
2017 ==> 2071
```

If no bigger number can be composed using those digits, return `-1`:

```js
9 ==> -1
111 ==> -1
531 ==> -1
```

## Code

```javascript
function nextBigger(n){
  //your code here
}
```

## Test

```javascript
Test.assertEquals(nextBigger(12),21)
Test.assertEquals(nextBigger(513),531)
Test.assertEquals(nextBigger(2017),2071)
Test.assertEquals(nextBigger(414),441)
Test.assertEquals(nextBigger(144),414)
```

