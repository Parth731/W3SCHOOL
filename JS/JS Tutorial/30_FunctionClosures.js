
// global variables
// Global variables can be used (and changed) by all scripts in the page (and in the window).
// A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

let a = 4;
function myfunction() {
    // a  = 4;              //local variable
    return a * a;
}

console.log(a);             //4
console.log(myfunction());  //16

// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

// A Counter Dilemma
/*
let counter = 0;
function add(){
    counter += 1;
}

add();
add();
add();
console.log(counter);   //3
*/

/*
let counter = 0;

function add(){
    let counter = 0;
    counter += 1;
}

add();
add();
add();
console.log(counter);   //0
*/


/*
function add(){
    let counter = 0;
    counter += 1;
    return counter;
}
add();
add();
console.log(add());     //1
*/

/*
var add = (function(){
    let counter = 0
    return function() {counter += 1;
        return counter;
    } 
})();

add();
add();
add();
console.log(add());
*/

function add() {
    let counter = 0;
    function plus() {
        counter += 1;
    }
    plus();
    return counter;

}

add();
add();
console.log(add());