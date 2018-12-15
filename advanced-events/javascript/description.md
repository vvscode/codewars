# Description of the kata

Name: Advanced Events

URL: http://www.codewars.com/kata/advanced-events

Author: Vasiliy Vanchuk

Rank: -4

Slug: advanced-events

Project ID: 5c122765b48e914422000193

Solution ID: 5c122765b48e914422000195

Tags: Fundamentals, Design Patterns, Design Principles, Event Handling

## Task

This excercise is a more sophisticated version of [Simple Events](http://www.codewars.com/dojo/katas/52d3b68215be7c2d5300022f/) kata.

Your task is to implement an __Event__ constructor function for creating event objects
```javascript
var event = new Event();
```
which comply to the following:

 - an __event__ object should have __.subscribe()__ and __.unsubscribe()__ methods to add and remove handlers

 - __.subscribe()__ and __.unsubscribe()__ should be able take an arbitrary number of arguments and tolerate invalid arguments (not functions, or for __unsubscribe__, functions which are not subscribed) by simply skipping them

 - multiple subscription of the same handler is allowed,  and in this case unsubscription removes the last subscription of the same handler

 - an __event__ object should have an __.emit()__ method which must invoke all the handlers with the arguments provided 

 - __.emit()__ should use its own invocation context as handers' invocation context

 - the order of handlers invocation must match the order of subscription

- handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next __emit__ call - the handlers for an ongoing __emit__ call should not be affected

 - __subscribe__, __unsubscribe__ and __emit__ are the only public properties that are allowed on __event__ objects (apart from __Object.prototype__ methods)

Check the test fixture for usage example




## Code

```javascript
function Event() {
  //your code goes here
}
```

## Test

```javascript
function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

var e = new Event(),
    bucket = [];

e.subscribe(l, o, l);
e.emit(bucket);

//bucket should be ['l', 'o', 'l']
Test.assertSimilar(bucket, ['l', 'o', 'l']); 

e.unsubscribe(o, l);
bucket = [];

e.emit(bucket); //bucket should be ['l']

Test.assertSimilar(bucket, ['l']); 
```

