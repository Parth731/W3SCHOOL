// jS Strings
x = "John Doe";
console.log(x);

// double and single quote
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"'; 
console.log(answer1);
console.log(answer2);
console.log(answer3);

// Escape Character
var x = "We are the so-called \"Vikings\" from the north.";
console.log(x);
var x = 'It\'s alright.';
console.log(x);
var x = "The character \\ is called backslash";
console.log(x);

// breaking long code lines
console.log
("Hello Dolly!");

console.log("Hello \
Dolly!");

console.log("Hello " +
"Dolly!");

// console.log\
// ("Hello Dolly!");

//string can objects
var x = "John";
var y = new String("Doe");
console.log(x + " " + y);


// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types (string and object)


var x = new String("John");             
var y = new String("John");
console.log(x + " " + y);

// (x == y) is false because x and y are different objects
// (x === y) is false because x and y are different objects


//Note the difference between (x==y) and (x===y).
// Comparing two JavaScript objects will always return false.


