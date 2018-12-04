# Description of the kata

Name: Explosive Sum

URL: http://www.codewars.com/kata/explosive-sum

Author: Vasiliy Vanchuk

Rank: -4

Slug: explosive-sum

Project ID: 5c0604357172569c1600017e

Solution ID: 5c0604357172569c16000180

Tags: Fundamentals, Algorithms, Logic, Numbers, Data Types, Arithmetic, Mathematics, Integers

## Task

# How many ways can you make the sum of a number?

From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

>In number theory and combinatorics, a partition of a positive integer *n*, also called an *integer partition*, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:
```
4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
```

## Examples

### Basic

```javascript
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42
```
```haskell
explosiveSum  1   -- 1
explosiveSum 2   -- 2 -> 1+1 , 2
explosiveSum 3   -- 3 -> 1+1+1, 1+2, 3
explosiveSum 4   -- 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
explosiveSum 5   -- 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
explosiveSum 10  -- 42
```
```ruby
sum(1) # 1
sum(2) # 2  -> 1+1 , 2
sum(3) # 3 -> 1+1+1, 1+2, 3
sum(4) # 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) # 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) # 42
```
```python
sum(1) # 1
sum(2) # 2  -> 1+1 , 2
sum(3) # 3 -> 1+1+1, 1+2, 3
sum(4) # 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) # 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) # 42
```

### Explosive

```javascript
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
```
```haskell
explosiveSum  50 --    204226
explosiveSum  80 --  15796476
explosiveSum 100 -- 190569292
```
```ruby
sum(50) # 204226
sum(80) # 15796476
sum(100) # 190569292
```
```python
sum(50) # 204226
sum(80) # 15796476
sum(100) # 190569292
```

See [here](http://www.numericana.com/data/partition.htm) for more examples.


## Code

```javascript
function sum(num) {
  return 0;
}
```

## Test

```javascript
Test.assertEquals(sum(1), 1);
Test.assertEquals(sum(2), 2);
Test.assertEquals(sum(3), 3);
Test.assertEquals(sum(4), 5);

Test.assertEquals(sum(5), 7);

Test.assertEquals(sum(10), 42);
```

