

// for Loop
// syntax
/*
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
*/
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let index;
let element = "";
for (index = 0; index < cars.length; index++) {
    element += cars[index] + "  ";
}
console.log(element);

element = "";
for (index = 0; index < cars.length; index++) {
    element += index + " ";
    console.log(index);

}
console.log("final :" + element);

// for/in loop
let person = {fname:"john", lname:"Doe", age:"25"};

let text = "";
let x;
for(x in person){
    text += person[x] + " ";
    console.log(x);
}
console.log(text);


// for/of loop
cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
x = 0;
// text = "";
for(x of cars){
    console.log(x);
}

// Looping over a String
x= 0;
let txt = "JavaScript";
for(x of txt){
    console.log(x);
}

