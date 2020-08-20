

/*

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects


*/

/*

JavaScript primitives

- primitive value is value has no property and method
- primitive data type is data that has primitive value

-string
-number
-boolean
-null
-undefined

*/

// object are variable
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


// object property
/*
Property	Value
firstName	John
lastName	Doe
age	        50
eyeColor	blue

Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl

*/

// objct methods
/*
Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue

fullName	function() {return this.firstName + " " + this.lastName;}

*/

// create js object

// using object literal
person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// using the JS keyword new
person = new Object();
person.firstName = "john";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// object are mutable
person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
x = person;
x.age = 25;
console.log(person);
console.log(x);