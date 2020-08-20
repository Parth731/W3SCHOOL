
// ECMAScript 2015
const PI = 3.141592653589793;
// PI = 3.14;      // error
// PI = PI + 10;   //error

// Block scope
var x = 10;
{
    const x = 2;

}
console.log(x); //10

// Assigned when Declared
/*
const PI;
PI = 3.14159265359; //incorrect
*/

/*
const PI = 3.14159265359;   //correct
*/

// primitive value
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// constant object can change
const car = {type:"fiat", model:"500", color:"white"};
console.log(car);
car.color = "red";
console.log(car);

//  you can NOT reassign a constant object
/*
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
*/

// constant array can change
const cars = ["saab", "valvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);

//  you can NOT reassign a constant Array:
/*
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
*/

// redeclaring
/*
var x = 2;    //  Allowed
var x = 3;    //  Allowed
x = 4;        //  Allowed
*/

/*
var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}
*/

/*
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}
*/
/*
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
*/

// Hoisting
carname = "Valvo";
console.log(carname);
var carname;

/*
carName = "Volvo";    // You can NOT use carName here
const carName = "Volvo";
*/