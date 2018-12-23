# Description of the kata

Name: Javascript Magic Function

URL: http://www.codewars.com/kata/javascript-magic-function

Author: Vasiliy Vanchuk

Rank: -5

Slug: javascript-magic-function

Project ID: 5c1f90bd7b3560f8410001c2

Solution ID: 5c1f90bd7b3560f8410001c4

Tags: Fundamentals, Duck Typing, Dynamic Programming, Dynamic Typing, Weak Typing, Programming Paradigms, Language Semantics, Basic Language Features

## Task

Create function that:
<ul>
<li>accepts any number of parameters,</li>
<li>returns sum of every single parameter given,</li>
<li>any parameter that can not be parsed as a number will be counted as 0.</li>
<li>can be called infinitely,</li>
<li>the next function call will do the same thing, but also summing the last returned number.</li>
</ul>

<br>
```javascript
MagicFunction(3) == 3; // should return true
MagicFunction(1, 2) == 3; // should return true
MagicFunction(1, 3)(2) == 6; // should return true
MagicFunction(1, 2)(3, 4, 5)(6)(7, 10) == 38; // should return true
```

## Code

```javascript
function MagicFunction() {
  
}
```

## Test

```javascript
Test.expect(0 == MagicFunction());
Test.expect(3 == MagicFunction(1, 2));
Test.expect(6 == MagicFunction(1, 3)(2));
Test.expect(6 == MagicFunction(1)(2, 3));
Test.expect(6 == MagicFunction(1)(2)(3));
Test.expect(38 == MagicFunction(1, 2)(3, 4, 5)(6)(7, 10));

```

