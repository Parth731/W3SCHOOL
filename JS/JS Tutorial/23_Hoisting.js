// JS Declaration are Hoisted
// x = 5;
// console.log(x);
// var x;      //declare x

// 
// var x;  //declare x
// x = 5;  //Assign 5 to x
// console.log(x);

// let and const keywords
// Variables and constants declared with let or const are not hoisted!

// JS Initialization are not Hoisted
// x = 5;  //Initization x
// y = 7;  //Initization y
// console.log(x + " " + y);

// var x = 5;
// console.log(x + " " + y); //5 and undefined
// var y = 7;

var x = 5;
var y;
console.log(x + " " + y);   //5 and undefined
y=7;

