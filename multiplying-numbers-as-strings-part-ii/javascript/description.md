# Description of the kata

Name: Multiplying numbers as strings: Part II

URL: http://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii

Author: Vasiliy Vanchuk

Rank: -3

Slug: multiplying-numbers-as-strings-part-ii

Project ID: 5c19d02ff810a1f126000046

Solution ID: 5c19d030f810a1f126000048

Tags: Fundamentals, Numbers, Data Types, Strings, Arithmetic, Mathematics, Algorithms, Logic

## Task

<p>This is the Part II of <a href="https://www.codewars.com/kata/55911ef14065454c75000062">Multiplying numbers as strings</a>.</p>
<h3>TODO</h3>
<p>Multiply two numbers! Simple!</p>
<h3>Rules</h3>
<ol>
<li>The arguments are passed as strings.
<li>The numbers will be very large
<li>The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. <code>"-01.300"</code>
<li>Answer should be returned as string
<li>The returned answer should not have leading or trailing zeroes (when applicable) e.g. <code>"0123"</code> and <code>"1.100"</code> are wrong, they should be <code>"123"</code> and <code>"1.1"</code>
<li>Zero should not be signed and <code>"-0.0"</code> should be simply returned as <code>"0"</code>. 
</ol>

## Code

```javascript
function multiply(n, o){
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

describe('Some corner test multiplications', function() {
  it('simple', function() {
    Test.assertEquals(multiply("-0.00", "0.0000"), "0");
    Test.assertEquals(multiply("-0.01", "0.0000"), "0");
    Test.assertEquals(multiply("2.01", "3.0000"), "6.03");
    Test.assertEquals(multiply("2", "-3.000001"), "-6.000002");
    Test.assertEquals(multiply("-5.0908", "-123.1"), "626.67748");
  });
});
```

