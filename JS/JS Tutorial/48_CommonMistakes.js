
// Assignment operator
let x = 0;
console.log(x == 10);       //false
console.log(Boolean(x = 10)); //true
console.log(Boolean(x = 0));  //false

// Expecting loose comparison
x = 10;
let y = "10";
console.log(x == y);  //true
console.log(x === y);  //false

switch (x) {
    // case 10: alert("Hello");
}

switch (x) {
    case "10": alert("Hello");
}

// confusing addition & concatenation
console.log(x + 5);     //15
console.log(x + "5");   //105

// misunderstanding floats
x = 0.1;
y = 0.2;
console.log(x + y);
console.log((x * 10 + y * 10) / 10);

// breaking a js string
x =
    "hello world";
console.log(x);

// error
// x = "hello
// world";
// console.log(x);

x = "hello \
world";
console.log(x);

// misplacing semicolon
x = 5;
if (x == 19);
{
    console.log("hello");
}

// breaking a return statement
console.log(myFunction(55));

function myFunction(a) {

    // example 1
    // let power = 10;
    // return a * power;    //550

    // example 2
    // let 
    // power = 10;
    // return a* power;     //550

    // example 3
    let
        power = 10;
    return
    a * power;      //undefined

}

// Accessing Array with Named indexes
let person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;

console.log(person[0] + " " + person.length);

person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;

console.log(person[0] + " " + person.length);

// ending defination with a comma
// person = {firstName : "John", lastName : "Doe", age : 46};
// points = [40,100,1,5,25,10];


// undefine is not null
console.log(typeof myObj == "undefined");   //true
console.log(typeof myObj == "null");   //false
// console.log(typemyObj !== null && typeof myObj !== "undefined");   //incorrect
console.log(typeof myObj !== null && typeof myObj !== "undefined");   //false
console.log(typeof myObj !== "undefined" &&  myObj !== null);   // false



