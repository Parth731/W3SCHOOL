
// Numbers
let x = 3.14;       //a number with decimals
let y =3;           // a number without decimals

// exponent
 x = 123e5;    // 12300000
 y = 123e-5;   // 0.00123

// preceision
x = 999999999999999;
console.log(x);
y = 9999999999999999;
console.log(y);

x = 0.2 + 0.1;
console.log(x);

x = (0.2*10 + 0.1*10) / 10;
console.log(x);

// Adding Number and Strings
x = 10;
y = 20;
let z = x + y;
console.log(z);

x = "10";
y = "20";
z = x + y 
console.log(z);     //1020

x = "10";
y = 20;
z = x + y 
console.log(z);     //1020

x = 10;
y = 20;
z = "30";
let result = x + y + z;
console.log(result);     //3030

// Numberic strings
x = "100";
y = "10";
z = x / y;
console.log(z);     //10 

x = "100";
y = "10";
z = x * y;
console.log(z);     //1000

x = "100";
y = "10";
z = x - y;
console.log(z);     //90

x = "100";
y = "10";
z = x + y;
console.log(z);     //10010 (conceating) 

// NAN mot a number
x = 100/"Apple";
console.log(x);     //NaN

x = 100/"10";
console.log(x);     //10

x = 100/"Apple";
console.log(isNaN(x));     //true

x = NaN;
y = 5;
z = x + y;         
console.log(z)      // z will be NaN

x = NaN;
y = "5";
z = x + y;         
console.log(z)      // z will be NaN5
console.log(typeof NaN);


// Indinity
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}

console.log(myNumber);

x = 2/0;
console.log(x);     //Infinity

x = -2/0;
console.log(x);     //-Infinity

console.log(typeof Infinity);   //Number


// Hexademial
x = 0xFF;
console.log(x);

myNumber = 32;
console.log(myNumber.toString(10))      //32
console.log(myNumber.toString(32))      //10
console.log(myNumber.toString(16))      //20
console.log(myNumber.toString(8))       //40 
console.log(myNumber.toString(2))       //100000

// number can be object
x = 123;
y = new Number(123);
console.log(typeof x)   //Number
console.log(typeof y)   //Object  
console.log((x==y))   //true  
console.log((x===y))   //False
console.log((x!=y))   //False
console.log((x!==y))   //False

// 
x = new Number(123);
y = new Number(123);
console.log((x==y))   //Falseq
console.log((x===y))   //False
console.log((x!=y))   //true
console.log((x!==y))   //true







