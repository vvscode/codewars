# Description of the kata

Name: UriBuilder

URL: http://www.codewars.com/kata/uribuilder

Author: Vasiliy Vanchuk

Rank: -4

Slug: uribuilder

Project ID: 5c0f4241316a58119b000035

Solution ID: 5c0f4241316a58119b000037

Tags: Algorithms, Object-oriented Programming, Programming Paradigms, Strings, Data Types, Parsing, Logic

## Task

Create a basic UriBuilder object that will be used specifically to build query params on an existing URI. It should support a params property and a build method. It will handle the URL having pre-existing params that need to be managed. The URL must be properly encoded (i.e. "a b" should be encoded as "a%20b")

Examples of how the builder will be used:

```javascript

var builder = new UriBuilder('http://www.codewars.com')
builder.params.page = 1
builder.params.language = 'javascript'

// new builder instance to demonstrate pre-existing params.
builder = new UriBuilder('http://www.codewars.com?page=1')

builder.params.page = 2
// should return 'http://www.codewars.com?page=2'
builder.build()

// if you delete params then they will disappear from the url string
delete builder.params.page

// should return 'http://www.codewars.com'
builder.build()

```

```coffeescript

builder = new UriBuilder('http://www.codewars.com')
builder.params.page = 1
builder.params.language = 'javascript'

# should return 'http://www.codewars.com?page=1&language=javascript'
builder.build() 

# new builder instance to demonstrate pre-existing params.
builder = new UriBuilder('http://www.codewars.com?page=1')
builder.params.page = 2

# should return 'http://www.codewars.com?page=2'
builder.build()

# if you delete params then they will disappear from the url string
delete builder.params.page

# should return 'http://www.codewars.com'
builder.build()

```

**Note:** For extra style points you can have your solution handle array values as query parameters, however there are no tests that explicitly test for them. 

## Code

```javascript
// TODO: create UriBuilder object
```

## Test

```javascript
var root = 'http://www.codewars.com'
var builder = new UriBuilder(root + '?a=1')

function testUrl(url){
  url = root + encodeURI(url)
  Test.assertEquals(builder.build(), url, "build() with params " + Test.inspect(builder.params))
}

describe('UriBuilder', function(){
  it('should have build method', function(){
    Test.expect(builder.build)
  });
  it('params.a = 1', function(){
    testUrl('?a=1')
  });
  
  it('params.a = 2', function(){
    builder.params.a = 2
    testUrl('?a=2')
  });
});
```

