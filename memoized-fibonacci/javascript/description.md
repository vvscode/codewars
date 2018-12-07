# Description of the kata

Name: Memoized Fibonacci

URL: http://www.codewars.com/kata/memoized-fibonacci

Author: Vasiliy Vanchuk

Rank: -5

Slug: memoized-fibonacci

Project ID: 5c0a3f448a2d87ee7b00007a

Solution ID: 5c0a3f448a2d87ee7b00007c

Tags: Refactoring, Memoization, Design Patterns, Design Principles

## Task

### Problem Context

The [Fibonacci](http://en.wikipedia.org/wiki/Fibonacci_number) sequence is traditionally used to explain tree recursion.  

```javascript
function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
```

```ruby
def fibonacci(n)
  return n if (0..1).include? n
  fibonacci(n - 1) + fibonacci(n - 2)
end
```

```python
def fibonacci(n):
    if n in [0, 1]:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

```haskell
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci (n-1) + fibonacci (n-2)
```

```scala
def fibonacci(n: Int): Int = n match {
   case 0 | 1 => n
   case _ => fibonacci(n - 1) + fibonacci(n - 2)
}
```

This algorithm serves welll its educative purpose but it's [tremendously inefficient](http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.2), not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. `fibonacci(n-2)`) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. `fibonacci(n-1)`).

This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

For this particular Kata we want to **implement the memoization solution**. This will be cool because it will let us *keep using the tree recursion* algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

Refactor the function into a recursive Fibonacci function that using  a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this function? 



## Code

```javascript
var fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
```

## Test

```javascript
describe("Kata Test Suite", function(){
  it("should calculate large Fibonacci numbers", function(){
    Test.assertEquals(fibonacci(70), 190392490709135);
    Test.assertEquals(fibonacci(60), 1548008755920);
    Test.assertEquals(fibonacci(50), 12586269025);
  });
});

```

