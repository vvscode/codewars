# Description of the kata

Name: Find the unique string

URL: http://www.codewars.com/kata/find-the-unique-string

Author: Vasiliy Vanchuk

Rank: -5

Slug: find-the-unique-string

Project ID: 5c09758138b1d3cecc00023d

Solution ID: 5c09758138b1d3cecc00023f

Tags: Algorithms, Fundamentals, Logic, Arrays, Data Types, Strings

## Task

There is an array of strings. All strings contains similar _letters_ except one. Try to find it!

```javascript
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
```

```php
find_uniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]); // => 'BbBb'
find_uniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]); // => 'foo'
```

```python
find_uniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) # => 'BbBb'
find_uniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) # => 'foo'
```

Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

This is the second kata in series:

1. [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
2. Find the unique string (this kata)
3. [Find The Unique](https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)

## Code

```javascript
function findUniq(arr) {
  // do magic
}

```

## Test

```javascript
describe('findUniq', () => {
  it('should handle sample cases', () => {
    Test.assertEquals(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb');
    Test.assertEquals(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo');
    Test.assertEquals(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor');
    Test.assertEquals(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
    Test.assertEquals(findUniq([ '    ', 'a', ' ' ]), 'a');
  });
});

```

