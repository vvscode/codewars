# Description of the kata

Name: Don't rely on luck.

URL: http://www.codewars.com/kata/dont-rely-on-luck

Author: Vasiliy Vanchuk

Rank: -6

Slug: dont-rely-on-luck

Project ID: 5c21029e878179ce16000070

Solution ID: 5c21106c72ad3ba9650000c6

Tags: Puzzles, Games

## Task

The test fixture I use for this kata is pre-populated.

It will compare your guess to a random number generated using:

```ruby 
(Kernel::rand() * 100 + 1).floor
```
```javascript
Math.floor(Math.random() * 100 + 1)
```
```python
randint(1,100)
```
```php
rand(1, 100)
```

You can pass by relying on luck or skill but try not to rely on luck.

"The power to define the situation is the ultimate power." - Jerry Rubin

Good luck!

## Code

```javascript
var guess = 10
```

## Test

```javascript
//This is exactly what the real test fixture looks like.
var lucky_number = Math.floor(Math.random() * 100 + 1);
Test.assertEquals(guess, lucky_number, "Sorry. Unlucky this time.");
```

