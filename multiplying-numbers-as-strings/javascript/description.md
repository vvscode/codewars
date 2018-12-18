# Description of the kata

Name: Multiplying numbers as strings

URL: http://www.codewars.com/kata/multiplying-numbers-as-strings

Author: Vasiliy Vanchuk

Rank: -4

Slug: multiplying-numbers-as-strings

Project ID: 5c17c1836a9c556f79000056

Solution ID: 5c17c1836a9c556f79000058

Tags: Fundamentals, Strings, Data Types

## Task

This is the first part. You can solve the second part <a href="https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript">here</a> when you are done with this.
Multiply two numbers! Simple!

1. The arguments are passed as strings.
2. The numbers may be way very large
3. Answer should be returned as a string
4. The returned "number" should not start with zeros e.g. 0123 is invalid

Note: 100 randomly generated tests!

## Code

```javascript
function multiply(a, b)
{
}
```

## Test

```javascript
describe('Some simple multiplications', function() {
  it('simple', function() {
    Test.assertEquals(multiply("2", "3"), "6");
    Test.assertEquals(multiply("30", "69"), "2070");
    Test.assertEquals(multiply("11", "85"), "935");
  });
});

describe('Some corner case', function() {
  it('corner cases', function() {
    Test.assertEquals(multiply("2" ,"0"), "0");
    Test.assertEquals(multiply("0", "30"), "0");
    Test.assertEquals(multiply("0000001", "3"), "3");
    Test.assertEquals(multiply("1009", "03"), "3027");
  });
});

describe('Some big multiplications', function() {
  it('big boys', function() {
    Test.assertEquals(multiply("98765", "56894"), "5619135910");
    Test.assertEquals(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
    Test.assertEquals(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
    Test.assertEquals(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
  });
});
```

