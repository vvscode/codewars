# Description of the kata

Name: ES5 Generators(i)

URL: http://www.codewars.com/kata/es5-generators-i

Author: Vasiliy Vanchuk

Rank: -4

Slug: es5-generators-i

Project ID: 5c2212e6b2676798790000b6

Solution ID: 5c2212e6b2676798790000b8

Tags: Fundamentals, Functional Programming, Declarative Programming, Programming Paradigms

## Task

This is the first part of three ([part2](http://www.codewars.com/kata/es5-generators-ii), [part3](http://www.codewars.com/kata/es5-generators-iii)).

Generators and Iterators are new ES6 features that will allow things like this:

```javascript
function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}
```

Using them in this way, we can do amazing things:

```javascript
let seq = fibonacci();
print(seq.next()); // 1
print(seq.next()); // 2
print(seq.next()); // 3
print(seq.next()); // 5
print(seq.next()); // 8
```

This is powerful, but until a few months later, ES6 will not be born.

The goal of this kata is to implement pseudo-generators with ES5.

The first thing to do is to implement the generator function:

```javascript
function generator(sequencer) {
   ...
}
```

`generator(sequencer[, arg1, arg2, ...])` receives a *sequencer* function to generate the sequence and returns an object with a `next()` method. When the `next()` method is invoked, the next value is generated. The method could receive as well optional arguments to be passed to the *sequencer* function.

This is an example of a dummy sequencer:

```javascript
function dummySeq() {
  return function() {
    return "dummy";
  };
}
```

To test `generator()`, you could use `dummySeq()` in this way:

```javascript
var seq = generator(dummySeq);
seq.next(); // 'dummy'
seq.next(); // 'dummy'
seq.next(); // 'dummy'
....
```

When you're done, you should implement the following generators (I think the functions are self explanatory):

```javascript
function factorialSeq() {...} // 1, 1, 2, 6, 24, ...
function fibonacciSeq() {...} // 1, 1, 2, 3, 5, 8, 13, ...
function rangeSeq(start, step) {...} // rangeSeq(1, 2)  -> 1, 3, 5, 7, ...
function primeSeq() {...} // 2, 3, 5, 7, 11, 13, ...
partialSumSeq(1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
```

You can use any of them in the same way:

```javascript
var seq = generator(factorialSeq);
seq.next(); // !0 = 1
seq.next(); // !1 = 1
seq.next(); // !2 = 2
seq.next(); // !3 = 6
seq.next(); // !4 = 24
...
```

There are some sequences which are infinite and others are not. For example:

* primeSeq: Is infinite
* partialSumSeq: Is limited to the passed values.

When the sequence is done (in finite sequences), if you call `seq.next()` again, it should produce an error.

Good luck!

## Code

```javascript
function generator(sequencer) {
}

function dummySeq() {
  return function() {
    return "dummy";
  };
}

function factorialSeq() {
}

function fibonacciSeq() {
}

function rangeSeq(start, step) {
}

function primeSeq() {
}

function partialSumSeq() {
}
```

## Test

```javascript
Test.describe("ES5 Dummy generator", function() {
  Test.it("Test dummy generator", function() {
    var seq = generator(dummySeq);
    Test.assertEquals(seq.next(), 'dummy');
    Test.assertEquals(seq.next(), 'dummy');
    Test.assertEquals(seq.next(), 'dummy');
  });
});

Test.describe("ES5 Simple Generators", function() {
  
  Test.it("Test factorial generator", function() {
    var seq = generator(factorialSeq);
    Test.assertEquals(seq.next(), 1); // 0! = 1
    Test.assertEquals(seq.next(), 1); // 1! = 1
    Test.assertEquals(seq.next(), 2); // 2! = 2
    Test.assertEquals(seq.next(), 6); // 3! = 6
    Test.assertEquals(seq.next(), 24); // 4! = 6
  });
    
  Test.it("Test Fibonacci generator", function() {
    var seq = generator(fibonacciSeq);
    Test.assertEquals(seq.next(), 1); // fib(0) = 1
    Test.assertEquals(seq.next(), 1); // fib(1) = 1
    Test.assertEquals(seq.next(), 2); // fib(2) = 2
    Test.assertEquals(seq.next(), 3); // fib(3) = 3
    Test.assertEquals(seq.next(), 5); // fib(4) = 5
    Test.assertEquals(seq.next(), 8); // fib(5) = 8
    Test.assertEquals(seq.next(), 13); // fib(6) = 13
  });
  
  Test.it("Test Range generator", function() {
    var seq = generator(rangeSeq, 5, 3); // 5,8,11,14,17
    Test.assertEquals(seq.next(), 5);
    Test.assertEquals(seq.next(), 8);
    Test.assertEquals(seq.next(), 11);
    Test.assertEquals(seq.next(), 14);
  });
  
  Test.it("Test Prime Numbers generator", function() {
    var seq = generator(primeSeq);
    Test.assertEquals(seq.next(), 2);
    Test.assertEquals(seq.next(), 3);
    Test.assertEquals(seq.next(), 5);
    Test.assertEquals(seq.next(), 7);
    Test.assertEquals(seq.next(), 11);
    Test.assertEquals(seq.next(), 13);
    Test.assertEquals(seq.next(), 17);
    Test.assertEquals(seq.next(), 19);
  });
  
  Test.it("Test partial sum generator", function() {
    var seq = generator(partialSumSeq, -1, 4, 2, 5);
    Test.assertEquals(seq.next(), -1);
    Test.assertEquals(seq.next(), 3);
    Test.assertEquals(seq.next(), 5);
    Test.assertEquals(seq.next(), 10); //End of sequence
    Test.expectError('End of sequence error expected', seq.next);
  });
});
```

