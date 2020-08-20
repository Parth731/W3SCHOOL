
// Invoking a JS Function
function myfunction(a,b){
    return a*b;
}
console.log(myfunction(4,5)); 
console.log(window.myfunction(4,5));

// global object
let y = myfunctionobject();

function myfunctionobject(){
    return this;
}

console.log(y);

// Invoking a function as a global function, causes the value of this to be the global object.
// Using the window object as a variable can easily crash your program.

// invoking a function as Method
let myobject = {
    firstname : "John",
    lastname : "Doe",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}

console.log(myobject.fullname());//// Will return [object Object] (the owner object)

// Invoking a function as an object method, causes the value of this to be the object itself.

// invoking function with a function constructor
function myfuncon(a1,a2){
    this.firstname = a1;
    this.lastname = a2;
}

let h = new myfuncon("Parth", "Patel");
console.log(h);
console.log(h.firstname);
console.log(h.lastname);


