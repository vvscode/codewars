# Description of the kata

Name: Create Your Own "Promise.All"

URL: http://www.codewars.com/kata/create-your-own-promise-dot-all

Author: Vasiliy Vanchuk

Rank: 

Slug: create-your-own-promise-dot-all

Project ID: 5c10f0df8a2d87ebbf0000ae

Solution ID: 5c10f0df8a2d87ebbf0000b0

Tags: Fundamentals, Promises, Design Patterns, Design Principles, Arrays, Data Types

## Task

According to Mozilla, "The Promise.all(iterable) method returns a promise that resolves when all of the promises in the iterable argument have resolved..."

#Your Task
Your task is to declare a function called, "all", which works a lot like Promise.all. It will accept any number of Promises as arguments and return an array with all of the resolved promises' values in the order in which they were entered as arguments.

So, you should be able to call it, like this:

``` javascript
let promise1 = new Promise(resolve => {
  resolve("O");
});

let promise2 = new Promise(resolve => {
  resolve("K");
});

all(promise1, promise2).then(console.log) // logs ["O", "K"]
```


#Notes

- Be honest. I've disabled Promise.all.
- Make sure that everything resolves *in order* before the array of values is returned.

## Code

```javascript
// take any number of promises for arguments
function all() {

  // return a promise
} // end all
```

## Test

```javascript
Test.describe("Promise all function fulfilled", function() {

  var promise1 = new Promise(resolve => {
    setTimeout(resolve, 300, 'first');
  });
  
  var promise2 = new Promise(resolve => {
    resolve("second");
  });


  Test.it("returns an array when the promise is resolved", function() {
    all(promise1, promise2).then((fulfill) => {
      var testArr = fulfill;
      Test.assertEquals(testArr[0], "first", "first element of array returned should be 'first'");    
      Test.assertEquals(testArr[1], "second", "second element of array returned should be 'second'");
    });
  }); // end it
  
  }); // end describe

```

