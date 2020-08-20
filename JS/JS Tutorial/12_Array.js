
// creating Array
var cars = ["saab", "valvo", "BMW"];
var cars = [
    "saab",
    "valvo",
    "BMW"
];

// Access the Elements of an Array
console.log(cars[0]);

// changing an Array Element
cars[0] = "Opel";
console.log(cars[0]);

//Accessing full Array
console.log(cars); 

// Array are Objects
var person = ["Parth", "Doe", 46];  //Array
var person = {firstName:"John", lastName:"Doe", age:46};//object

// Accessing the First Array Element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// Looping Array Elements
var flen = fruits.length;
var i;
text = "";
for(i=0;i<flen;i++)
{
    text +=  fruits[i] + " "; 
}


console.log(text);


// Array.forEach()
text = "";
fruits.forEach(myfunction);
console.log("Fruits: " + text);



function myfunction(value){

    text += value + " ";
}

// Adding Array Element
// fruits.push("Lemon");
console.log(fruits);

fruits[fruits.length] = "Lemon";
console.log(fruits);

// Associative Arrays
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;     // person.length will return 3
var y = person[0];         // person[0] will return "John"
console.log(x);
console.log(y);

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;     // person.length will return 0
var y = person[0];         // person[0] will return undefined
console.log(x);         //0
console.log(y);             //undefined

/*
The Difference Between Arrays and Objects
arrays use numbered indexes.  
objects use named indexes.
*/

/*
When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
*/

// How do I know if a variable is an array?
console.log(typeof fruits);
console.log(Array.isArray())

// The instanceof operator returns true if an object is created by a given constructor:
console.log(fruits instanceof Array);



