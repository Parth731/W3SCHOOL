

// comparison operator
// equal to
let x= 5
console.log(x == 8);    //false
console.log(x == 5);    //true
console.log(x == "5");  //true

// equal value and equal type
console.log(x === 5);   //true
console.log(x === "5"); //false

// not equal 
console.log(x != 8);    //true

// not equal value or not equal type
console.log(x !== 5);   //false
console.log(x !== "5"); //true
console.log(x !== 8);   //true    

// greater than
console.log(x > 8); //false

// less than
console.log(x < 8); //true

// greater than or equal to
console.log(x >= 8);    //false

// less than or equal to
console.log(x <= 8);    //true


// logical operator
x =6;
y =3;
console.log((x < 10 && y > 1));     //true
console.log((x == 5 || y == 5));    //false    
console.log(!(x==y))  //true

// compliment operator
x = 10;
console.log(~x);    //-11
x = -10;
console.log(~x);     //9


// comparing different types
console.log(2<12);      //true
console.log(2<"12");    //true
console.log(2<"john");  //false
console.log(2>"john");  //flase
console.log(2=="john");  //flase
console.log("2"<"12");    //false
console.log("2">"12");    //true
console.log("2"=="12");    //false


