
// Js function definations

// Function declarations
function myfunction(a,b){
    return a * b;
}
console.log(myfunction(4,3));

// function Expression
let x = function(a,b){return a*b};
console.log(x(4,3));
// The function above is actually an anonymous function (a function without a name).

// function constructor
var myfunction = new Function("a" , "b" , "return a*b");
console.log(myfunction(4,3));

// function Hositing
console.log(myfunctionHositing(5));

function myfunctionHositing(y){
    return y*y;
}

// self - invoking function
(function(){
    console.log("Hello!");
})();
// The function above is actually an anonymous self-invoking function 

// function can be used as Values
function myfunctionmul(a,b){
    return a*b;
}
console.log(myfunctionmul(4,4));    //16
console.log(myfunctionmul(4,4)*2);  //32

// function are objects
function myfunctionarg(a,b){
    return arguments.length;
}
console.log(myfunctionarg(2,3));
console.log(myfunctionarg.toString());

/*
A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor.
*/

// Arrow function
// ES5
// x = function(x,y){
//     return x*y;
// }

x = (x,y) => x*y;
console.log(x(5,5));

// Using const is safer than using var, because a function expression is always constant value.

const y = (a,b) => {return a*b};
console.log(y(6,6));

// Arrow functions are not supported in IE11 or earlier.


