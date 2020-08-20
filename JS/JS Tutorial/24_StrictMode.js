
// use strict

/*
// Declaring strict Mode
"use strict"
x = 3.14; //This will cause an error because x is not declared
*/


/*
"use strict"
myFunction()

function myFunction(){
     
    y= 3.14 //This will also cause an error because y is not declare
}
*/

/*
x = 3.14;       // This will not cause an error.
myFunction();   //error

function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error
}
*/

/*
"use strict";
x = 3.14;                // This will cause an error
*/

/*
"use strict";
x = {p1:10, p2:20};      // This will cause an error
*/


/*
"use strict";
var x = 3.14;
delete x;                // This will cause an error
*/

/*
"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 
*/

/*
"use strict";
function x(p1, p1) {};   // This will cause an error
*/

/*
"use strict";
var x = 010;             // This will cause an error
*/


/*
"use strict";
var x = "\010";            // This will cause an error
*/


/*
"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error
*/


/*
"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error
*/


/*
"use strict";
delete Object.prototype; // This will cause an error
*/

/*
"use strict";
var eval = 3.14;         // This will cause an error
*/


/*
"use strict";
var arguments = 3.14;    // This will cause an error
*/

/*
"use strict";
with (Math){x = cos(2)}; // This will cause an error
*/


/*
"use strict";
eval ("var x = 2");
alert (x);             // This will cause an error
*/

/*
"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

*/

/*

Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

implements
interface
let
package
private
protected
public
static
yield
*/
"use strict";
var public = 1500;      // This will cause an error


