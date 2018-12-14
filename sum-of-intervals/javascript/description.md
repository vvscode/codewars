# Description of the kata

Name: Sum of Intervals

URL: http://www.codewars.com/kata/sum-of-intervals

Author: Vasiliy Vanchuk

Rank: -4

Slug: sum-of-intervals

Project ID: 5c112d2d57415b2d6e00028e

Solution ID: 5c112d2d57415b2d6e000290

Tags: Algorithms, Logic, Aggregations, Arithmetic, Mathematics, Numbers, Data Types, Integers

## Task

Write a function called `sumIntervals`/`sum_intervals()` that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

### Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: `[1, 5]` is an interval from 1 to 5. The length of this interval is 4.

### Overlapping Intervals

List containing overlapping intervals:

```
[
   [1,4],
   [7, 10],
   [3, 5]
]
```

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

### Examples:

```javascript
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
```
```java
// null argument
Interval.sumIntervals(null);  // => 0

// empty intervals
Interval.sumIntervals(new int[][]{});  // => 0
Interval.sumIntervals(new int[][]{2,2}, {5,5});  // => 0

// disjoined intervals
Interval.sumIntervals(new int[][]{
  {1,2},{3,5}
});  // => (2-1) + (5-3) = 3

// overlapping intervals
Interval.sumIntervals(new int[][]{
  {1,4},{3,6},{2,8}
});  // [1,8] => 7
```
```cpp
sum_intervals( {
   {1,2},
   {6, 10},
   {11, 15}
} ); // => 9

sum_intervals( {
   {1,4},
   {7, 10},
   {3, 5}
} ); // => 7

sum_intervals( {
   {1,5},
   {10, 20},
   {1, 6},
   {16, 19},
   {5, 11}
} ); // => 19
```

## Code

```javascript
function sumIntervals(intervals){
  //TODO
}
```

## Test

```javascript
describe('sumIntervals', function(){
  it('should return the correct sum for non overlapping intervals', function(){
    var test1 = [[1,5]];
    var test2 = [[1,5],[6,10]];
    Test.assertEquals(sumIntervals(test1), 4);
    Test.assertEquals(sumIntervals(test2), 8);
  });
  
  it('should return the correct sum for overlapping intervals', function(){
    var test1 = [[1,5],[1,5]];
    var test2 = [[1,4],[7, 10],[3, 5]];
    Test.assertEquals(sumIntervals(test1), 4);
    Test.assertEquals(sumIntervals(test2), 7);
  });
});
```

