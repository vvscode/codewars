# Description of the kata

Name: Simple Fun #159: Middle Permutation

URL: http://www.codewars.com/kata/simple-fun-number-159-middle-permutation

Author: Vasiliy Vanchuk

Rank: -4

Slug: simple-fun-number-159-middle-permutation

Project ID: 5c03c810131c1afae10001e2

Solution ID: 5c03c81b131c1afae10001e4

Tags: Puzzles, Games

## Task

# Task

You are given a string `s`. Every letter in `s` appears once.

Consider all strings formed by rearranging the letters in `s`. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length `n`, define its middle term to be the `(n/2)`th term.)

# Example

For `s = "abc"`, the result should be `"bac"`.

````
The permutations in order are:
"abc", "acb", "bac", "bca", "cab", "cba"
So, The middle term is "bac".```

# Input/Output


 - `[input]` string `s`

  unique letters (`2 <= length <= 26`)

 - `[output]` a string

  middle permutation.

## Code

```javascript
function middlePermutation(s) {
  //coding and coding..


}
````

## Test

```javascript
describe('Basic Tests', function() {
  it('It should works for basic tests.', function() {
    Test.assertEquals(middlePermutation('abc'), 'bac');

    Test.assertEquals(middlePermutation('abcd'), 'bdca');

    Test.assertEquals(middlePermutation('abcdx'), 'cbxda');

    Test.assertEquals(middlePermutation('abcdxg'), 'cxgdba');

    Test.assertEquals(middlePermutation('abcdxgz'), 'dczxgba');
  });
});
```
