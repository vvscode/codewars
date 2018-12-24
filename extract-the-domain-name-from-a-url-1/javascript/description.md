# Description of the kata

Name: Extract the domain name from a URL

URL: http://www.codewars.com/kata/extract-the-domain-name-from-a-url-1

Author: Vasiliy Vanchuk

Rank: -5

Slug: extract-the-domain-name-from-a-url-1

Project ID: 5c20ed74b26767502700001c

Solution ID: 5c20ed74b26767502700001e

Tags: Fundamentals, Parsing, Algorithms, Logic, Strings, Regular Expressions, Declarative Programming, Advanced Language Features, Programming Paradigms

## Task

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
```ruby
domain_name("http://github.com/carbonfive/raygun") == "github" 
domain_name("http://www.zombie-bites.com") == "zombie-bites"
domain_name("https://www.cnet.com") == "cnet"
```
```python
domain_name("http://github.com/carbonfive/raygun") == "github" 
domain_name("http://www.zombie-bites.com") == "zombie-bites"
domain_name("https://www.cnet.com") == "cnet"
```
```javascript
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
```

## Code

```javascript
function domainName(url){
  //your code here
}
```

## Test

```javascript
Test.assertEquals(domainName("http://google.com"), "google");
Test.assertEquals(domainName("http://google.co.jp"), "google");
Test.assertEquals(domainName("www.xakep.ru"), "xakep");
Test.assertEquals(domainName("https://youtube.com"), "youtube");
```

