
// Data types and typeof operator
document.body.innerHTML = 
  typeof "john" + "<br>" +
  typeof 3.14 + "<br>" +
  typeof NaN + "<br>" +
  typeof false + "<br>" +
  typeof [1,2,3,4] + "<br>" +
  typeof {name:'john', age:34} + "<br>" +
  typeof new Date() + "<br>" +
  typeof function () {} + "<br>" +
  typeof myCar + "<br>" +
  typeof null;

// JS Constructor property
document.body.innerHTML = 
  "john".constructor + "<br>" +
  (3.14).constructor + "<br>" +
  false.constructor + "<br>" +
  [1,2,3,4].constructor + "<br>" +
  {name:'john', age:34}.constructor + "<br>" +
  new Date().constructor + "<br>" +
  function () {}.constructor;

// converting number to strings
let x =123;
console.log(String(x));
console.log(String(123));
console.log(String(100 + 23));

// using tostring() method
console.log(x.toString());
console.log((123).toString());
console.log((100+23).toString());

//false to other type
x = false; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//true to  other type
x = true; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//0 to  other type
x = 0; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//1 to  other type
x = 1; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//"0" to  other type
x = "0"; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//"000" to  other type
x = "000"; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//"1" to  other type
x = "1"; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//"NaN" to  other type
x = NaN; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//Infinity to  other type
x = Infinity; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//-Infinity to  other type
x = -Infinity; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//"" to  other type
x = ""; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//"20" to  other type
x = "20"; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//"twenty" to  other type
x = "twenty"; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//[] to  other type
x = []; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//Array to  other type
x = ["twenty"]; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//Array to  other type
x = ["ten","twenty"]; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//function to  other type
x = function(){}; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//object to  other type
x = {}; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//null to  other type
x = null;
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));

//undefined to  other type
x = undefined; 
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));
















