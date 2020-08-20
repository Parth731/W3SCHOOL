
// What is regular expression?
// A regular expression is a sequence of characters that forms a search pattern.

// The search pattern can be used for text search and text replace operations.

// syntax of regular expression
// /pattern/modification;

// Example:
// let patt = /w3school/i

// Using string search() with a string
// The search() method searches a string for a specified value and returns the position of the match
let str = "visit w3schools!";
let n = str.search("w3schools");
console.log(n);

// using string search() with a regular expression
// Use a regular expression to do a case-insensitive search for "w3schools" in a string
str = "Visit W3schools";
n = str.search(/w3school/i);
console.log(n);

// using string replace() with string
// The replace() method replaces a specified value with another value in a string
str = "Visit Microsoft!";
let res = str.replace("Microsoft","W3Schools");
 console.log(res);

 str = "Visit Microsoft!";
res = str.replace(/microsoft/i,"W3Schools");
console.log(res);

// Note:
// Regular expression arguments (instead of string arguments) can be used in the methods above.
// Regular expressions can make your search much more powerful (case insensitive for example).

// regular Expression modification
// Perform case-insensitive matching
str = "Visit W3Schools";
let patt1 = /w3schools/i;
res = str.match(patt1);
console.log(res);

// Perform a global match
str = "Is this all there is?";
patt1 = /is/g;
result = str.match(patt1);
console.log(result);

// Perform multiline matching
str = "\nIs th\nis it?";
patt1 = /^is/m;
result = str.match(patt1);
console.log(result);


// regular expression patterns
// breckets
str = "Is this all there is?";
patt1 = /[h]/g; 
result = str.match(patt1);
console.log(result);

str = "123456789";
patt1 = /[1-4]/g;
result = str.match(patt1);
console.log(result);

str = "re, green, red, green, gren, gr, blue, yellow";
patt1 = /(red|green)/g;
result = str.match(patt1);
console.log(result);

// metacharacters
// Find a digit
str = "Give 100%!"; 
patt1 = /\d/g;
result = str.match(patt1);
console.log(result);

// Find a whitespace character
str = "Is this all there is?";
patt1 = /\s/g;
result = str.match(patt1);
  console.log(result);

// Find a match at the beginning of a word like this: \bWORD
str = "HELLO, LOOK AT YOU!"; 
patt1 = /\bLO/;
result = str.search(patt1);
console.log(result);

// at the end of a word like this: WORD\b
str = "HELLO, LOOK AT YOU!"; 
patt1 = /LO\b/;
result = str.search(patt1);
console.log(result);


// using test()
patt = /e/;
text = "The best things in life are free!";
consolr.log(patt.test(text));
