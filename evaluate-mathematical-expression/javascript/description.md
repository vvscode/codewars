# Description of the kata

Name: Evaluate mathematical expression

URL: http://www.codewars.com/kata/evaluate-mathematical-expression

Author: Vasiliy Vanchuk

Rank: -2

Slug: evaluate-mathematical-expression

Project ID: 5c1a39d09c06f06a3b000136

Solution ID: 5c1a43f602c59cfa8a000169

Tags: Algorithms, Mathematics, Logic, Numbers, Expressions, Basic Language Features, Fundamentals, Operators, Parsing, Strings

## Task

# Instructions

Given a mathematical expression as a string you must return the result as a number.

## Numbers
Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

## Operators
You need to support the following mathematical operators:

 - Multiplication `*`
 - Division `/` (as true division)
 - Addition `+`
 - Subtraction `-`

Operators are always evaluated from left-to-right, and `*` and `/` must be evaluated before `+` and `-`.

## Parentheses
You need to support multiple levels of nested parentheses, ex. `(2 / (2 + 3.33) * 4) - -6`

## Whitespace
There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (`-`) used for negating numbers and parentheses will *never* be separated by whitespace. I.e., all of the following are **valid** expressions.

```
1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2

6 + -(4)   // 2
6 + -( -4) // 10
```

And the following are **invalid** expressions
```
1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
```

## Validation
You do not need to worry about validation - you will only receive **valid** mathematical expressions following the above rules.

```if:javascript
NOTE: Both `eval` and `Function` are disabled. Same goes for `String.match`.
```

```if:php
NOTE: `eval` is disallowed in your solution.
```

```if:python
NOTE: `eval` and `exec` are disallowed in your solution.
```

## Code

```javascript
var calc = function (expression) {
  // evaluate `expression` and return result
};
```

## Test

```javascript
var tests = [
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],
];

tests.forEach(function (m) {
  Test.assertEquals(calc(m[0]), m[1]);
});
```

