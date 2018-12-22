# Description of the kata

Name: Next smaller number with the same digits

URL: http://www.codewars.com/kata/next-smaller-number-with-the-same-digits

Author: Vasiliy Vanchuk

Rank: -4

Slug: next-smaller-number-with-the-same-digits

Project ID: 5c1b255034fb62f382000041

Solution ID: 5c1b255034fb62f382000043

Tags: Algorithms, Numbers, Data Types, Strings, Integers, Mathematics, Logic

## Task

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

```javascript
nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
```
```haskell
nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
```
```csharp
nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
```
```python
next_smaller(21) == 12
next_smaller(531) == 513
next_smaller(2071) == 2017
```
```ruby
next_smaller(21) == 12
next_smaller(531) == 513
next_smaller(2071) == 2017
```

Return -1 (for `Haskell`: return `Nothing`), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

```javascript
nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
```
```csharp
nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
```
```haskell
nextSmaller(9) == Nothing
nextSmaller(135) == Nothing
nextSmaller(1027) == Nothing -- 0721 is out since we don't write numbers with leading zeros
```
```python 
next_smaller(9) == -1
next_smaller(135) == -1
next_smaller(1027) == -1  # 0721 is out since we don't write numbers with leading zeros
```
```ruby 
next_smaller(9) == -1
next_smaller(135) == -1
next_smaller(1027) == -1  # 0721 is out since we don't write numbers with leading zeros
```

 * some tests will include very large numbers.
 * test data only employs positive integers.

*The function you write for this challenge is the inverse of this kata: "[Next bigger number with the same digits](http://www.codewars.com/kata/next-bigger-number-with-the-same-digits)."*

## Code

```javascript
function nextSmaller(n) {
  return 0;
}
```

## Test

```javascript
Test.describe("Fixed tests", function() {
	Test.it("Smaller numbers", function() {
    Test.assertEquals(nextSmaller(21), 12)
 		Test.assertEquals(nextSmaller(907), 790)
		Test.assertEquals(nextSmaller(531), 513)
		Test.assertEquals(nextSmaller(135), -1)
		Test.assertEquals(nextSmaller(2071), 2017)
		Test.assertEquals(nextSmaller(1027), -1)
		Test.assertEquals(nextSmaller(414), 144)
	})
  
	Test.it("Bigger numbers", function() {
		Test.assertEquals(nextSmaller(123456798), 123456789)
		Test.assertEquals(nextSmaller(123456789), -1)
		Test.assertEquals(nextSmaller(1234567908), 1234567890)
	})
})
```

