# Description of the kata

Name: Base64 Encoding

URL: http://www.codewars.com/kata/base64-encoding

Author: Vasiliy Vanchuk

Rank: -5

Slug: base64-encoding

Project ID: 5c27cc8fb734d052b8e8f46c

Solution ID: 5c27cc8fb734d052b8e8f46e

Tags: Algorithms, Binary, Prototypes, Strings, Data Types

## Task

Extend the String object (JS) or create a function (Python, C#) that converts the value of the String **to and from Base64** using the ASCII (UTF-8 for C#) character set.

Do not use built in functions.

**Usage:**
```javascript
// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(); 
```
```python
# should return 'dGhpcyBpcyBhIHN0cmluZyEh'
to_base_64('this is a string!!')

# should return 'this is a string!!'
from_base_64('dGhpcyBpcyBhIHN0cmluZyEh')
```
```swift
// should return "dGhpcyBpcyBhIHN0cmluZyEh"
"this is a string!!".toBase64 

// should return 'this is a string!!'
"dGhpcyBpcyBhIHN0cmluZyEh".fromBase64
```
``` csharp
// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
Base64Utils.ToBase64("this is a string!!");

// should return 'this is a string!!'
Base64Utils.FromBase64("dGhpcyBpcyBhIHN0cmluZyEh");
```

You can learn more about Base64 encoding and decoding <a href="http://en.wikipedia.org/wiki/Base64">here</a>.

Note: This kata uses the non-padding version ("=" is not added to the end).


## Code

```javascript
//Extend the String object with toBase64() and fromBase64() functions
```

## Test

```javascript
Test.assertEquals('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh');
Test.assertEquals('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!');

```

