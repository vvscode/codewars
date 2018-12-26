//This is exactly what the real test fixture looks like.
var lucky_number = Math.floor(Math.random() * 100 + 1);
Test.assertEquals(guess, lucky_number, "Sorry. Unlucky this time.");