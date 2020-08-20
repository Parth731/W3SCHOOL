
// JS tostring()

let x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

// toExponential() Method
x = 9.656;
console.log(x.toExponential(2));    //9.66e+0
console.log(x.toExponential(4));    //9.6560e+0 
console.log(x.toExponential(6));    //9.656000e+0

// toFixed() Method
x = 9.656;
console.log(x.toFixed(0));      //10
console.log(x.toFixed(2));      //9.66    
console.log(x.toFixed(4));      //0.6560
console.log(x.toFixed(6));      //0.656000

// toPrecision() method (specified length)
x = 9.656;
console.log(x.toPrecision())    //9.656
console.log(x.toPrecision(2))   //9.7
console.log(x.toPrecision(4))   //9.656
console.log(x.toPrecision(6))   //9.65600

// Number() Method
console.log(Number(true));      //1
console.log(Number(false));     //0
console.log(Number("10"));      //10
console.log(Number("  10"));    //10 
console.log(Number("10  "));    //10
console.log(Number(" 10  "));   //10
console.log(Number("10.33"));   //10.33
console.log(Number("10,33"));   //NaN 
console.log(Number("10 33"));   //NaN
console.log(Number("John"));    //NaN

// parseInt() Method
console.log(parseInt("10"));        //10
console.log(parseInt("10.33"));     //10
console.log(parseInt("10 20 30"));  //10
console.log(parseInt("10 years"));  //10
console.log(parseInt("year 10"));   //NaN


// Number Property
// Maximum value
x = Number.MAX_VALUE;
console.log(x);     //1.7976931348623157e+308

// Minimum value
x = Number.MIN_VALUE;
console.log(x);     //5e-324

// Positive infinity
x = Number.POSITIVE_INFINITY;
console.log(x);         //Infinity
console.log(2/0);


//negative infinity
x = Number.NEGATIVE_INFINITY;
console.log(x);         //-Infinity
console.log(-2/0);


// NaN  Not a Number
x = Number.NaN;
console.log(x);
console.log(100/"Apple");
console.log(x.MAX_VALUE);