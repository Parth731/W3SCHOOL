
// Function Parameter and Argument
// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.

// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// parameter Defaults
function myfunction(a,b){
    if(b===undefined){
        b=0;
    }
}
console.log(myfunction(4));

// The Arguments object
// find the maximum value
let x = findMax(1, 123, 500, 44, 88);

function findMax(){
    let x;
    let max = -Infinity;

    for(x = 0;x<arguments.length;x++){
        if(arguments[x] > max){
            max = arguments[x];
        }
    }
    return max;
}

console.log(x);

// find the minimum value
x = findMin(1, 123, 500, 44, 88);

function findMin(){
    let x;
    let min = Infinity;

    for(x=0;x<arguments.length;x++){
        if(arguments[x] < min){
            min = arguments[x];
        }
    }

    return min
}

console.log(x);

// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

// Argument are passed by value
// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value.
// Changes to arguments are not visible (reflected) outside the function.

// Objects are Passed by Reference
// In JavaScript, object references are values.
// Because of this, objects will behave like they are passed by reference:
// If a function changes an object property, it changes the original value.
// Changes to object properties are visible (reflected) outside the function.




