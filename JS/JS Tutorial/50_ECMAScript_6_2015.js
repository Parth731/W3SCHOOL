

// js let
var x = 10;
{
    let x = 2;
    console.log(x);     //2
}
console.log(x);         //10

// js const
x = 10;
{
    const x = 2;
    console.log(x);     //2

}
console.log(x);         //10

// Arrow functions
// x = (x,y) => x*y;
x = (x, y) => { return x * y };
console.log(x(3, 4))     //12

// classes
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}
let mycar = new Car("vlavo");
console.log(mycar);

// default parameter values
function myfunction(x, y = 10) {
    return x * y
}
console.log(myfunction(4));


// Array.find()
let numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myfunctionarray);       //25
let first = numbers.findIndex(myfunctionarray);     //3

function myfunctionarray(value, index, array) {
    return value > 18;
}
console.log(first);


// New Number Property
x = Number.EPSILON;
console.log(x);

x = Number.MIN_SAFE_INTEGER;
console.log(x);

x = Number.MAX_SAFE_INTEGER;
console.log(x);


// new number method
console.log(Number.isInteger(10));      //true
console.log(Number.isInteger(10.5));    //false


// The Number.isSafeInteger() Method
console.log(Number.isSafeInteger(10));      //true
console.log(Number.isSafeInteger(12345678901234567890));      //false


// The isFinite() Method
// The global isFinite() method returns false if the argument is Infinity or NaN.
console.log(isFinite(10/0));        //false
console.log(isFinite(10/1));        //true

// The isNaN() Method
// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false
console.log(isNaN("hello"));        //true


// Exponentiation Operator
x = 5;
console.log(x ** 2);    //25
console.log(Math.pow(x,2));    //25
