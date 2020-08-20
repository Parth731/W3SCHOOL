
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;

    // adding property to a constructor
    // this.nationality = "hindu"


    // // adding method to a constructor
    // this.name = function () { return this.firstName + " " + this.lastName; };

    this.changename = function(name){
        this.lastName = name;
    }
}
let myfather = new person("john", "doe", "30", "blue");
let mymother = new person("sally", "Rally", "28", "green");
console.log(myfather.age);
console.log(mymother.age);

// adding a property to an object
myfather.nationality = "Indian";
console.log(myfather);
console.log(mymother);

// adding a method to an object
mymother.name = function () {
    return this.firstName + " " + this.lastName;
}
console.log(mymother);
console.log(mymother.name());


// adding a property to a construtor
person.nationality = "Hindu";
console.log(mymother.nationality);  //undefined


// change name
mymother.changename("doe");
console.log(mymother.lastName);


// built in js constructors
var x1 = new Object();   // A new Object object
var x2 = new String();   // A new String object
var x3 = new Number();   // A new Number object
var x4 = new Boolean();  // A new Boolean object
var x5 = new Array();  // A new Array object
var x6 = new RegExp();   // A new RegExp object
var x7 = new Function(); // A new Function object
var x8 = new Date();   // A new Date object
console.log(
    "x1: " + typeof x1 + " " +
    "x2: " + typeof x2 + " " +
    "x3: " + typeof x3 + " " +
    "x4: " + typeof x4 + " " +
    "x5: " + typeof x5 + " " + 
    "x6: " + typeof x6 + " " +
    "x7: " + typeof x7 + " " +
    "x8: " + typeof x8 + " "
);


// string object
let firstName = new String("John");
console.log(firstName);

// Number object
let x = new Number(123);
console.log(x);

// boolean  object
x = new Boolean(false);
console.log(x);

