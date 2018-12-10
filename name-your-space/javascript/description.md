# Description of the kata

Name: Name Your Space

URL: http://www.codewars.com/kata/name-your-space

Author: Vasiliy Vanchuk

Rank: -4

Slug: name-your-space

Project ID: 5c0df02049b284037500002d

Solution ID: 5c0df02049b284037500002f

Tags: Algorithms, Utilities, Namespaces, Basic Language Features, Fundamentals

## Task

Finish the namespace function so that it sets or gets the value at the path specified. The first argument should be the root object that the path belongs to. The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path. 

If a value is provided then the path will be set to that value. Any objects not present within the path will be created automatically in order for the path to be successfully set.

```coffeescript

stuff = {}
namespace(stuff, 'moreStuff.name', 'the stuff')
# results in {moreStuff: {name: 'the stuff'}}

```

If no value is provided the the function will return the value at the path given. If the path is not valid/present then undefined will be returned. 

```coffeescript
namespace(stuff, 'moreStuff.name') # returns 'the stuff'
namesace(stuff, 'otherStuff.id') # returns undefined
```

## Code

```javascript
function namespace(root, path, value){
  
}
```

