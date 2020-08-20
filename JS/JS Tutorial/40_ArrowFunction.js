
// Arrow function
// Arrow functions allow us to write shorter function syntax:
let hello;

// before
hello = function(){
    return "Hello world!";
}

console.log(hello());

// with Arrow function
hello = () =>{
    return "Hello india!";
}
console.log(hello());

// arrow function return value by default
hello = () => "Hello newzaland";
console.log(hello());
// Note: This works only if the function has only one statement.

// Arrow function with parameters
hello = (val) => "Hello jarmani " + val;
console.log(hello("universe!"));