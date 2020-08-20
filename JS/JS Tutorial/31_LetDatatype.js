

// global scope
var CarName = "Valvo";

myFunction();

function myFunction(){
    console.log(CarName);
}

// Function Scope
myFunctionlocal();
function myFunctionlocal(){
    var carName = "Valvo";
    console.log(carName);
}


// js block scope
{
    var x=2;
}
{
    let x=2;
}

// redeclaring variables
var x=10;
{
    var x=2;
    console.log(x);     //2
}
console.log(x);         //2

var x = 10
{
    let x = 3;
    console.log("let :" + x);       //3
}
console.log("var :" + x);   //10

// loop scope
var i=5;
for(var i=0;i<10;i++){

}
console.log(i);     //10

let j = 5;
for(let j=0;j<10;j++){

}
console.log(j);     //5

// global Variable in html
var carname1 = "BMW";
console.log(window.carname1);

let carname2 = "bmw";
console.log(window.carname2);


// redeclartion
var y=2;
var y=3;
console.log(y);

/*
var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

*/

/*
let x = 2;       // Allowed
let x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
}

*/

/*

let x = 2;       // Allowed
var x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  var x = 5;   // Not allowed
}

*/

let z = 2;
{
    let z = 3;
}
{
    let z = 4;
}
console.log(z);


// Hoisting
carname3 = "BMW";
console.log(carname3);
var carname3;

carname4 = "BMW";
console.log(carname4);  //ReferenceError
let carname4;