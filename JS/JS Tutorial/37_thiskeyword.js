

// this keyword

let person = {
    firstname: "Parth",
    lastname: "Patel",
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
};
console.log(person.fullname());

// this alone
"use strict";
let x = this;
console.log(x); //[object Window]

// this in a function(default and strict)
"use strict"
console.log(myfunction());

function myfunction() {
    return this;
}

// Object Method Binding
person = {
    firstname: "Parth",
    lastname: "Patel",
    myfunction: function () {
        return this;
    }
};
console.log(person.myfunction());   //[object Object]

person = {
    firstname: "Dangroshiya",
    lastname: "Patel",
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
};
console.log(person.fullname());
// In other words: this.firstName means the firstName property of this (person) object.

// Explicit Function Binding
let person1 = {
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
};

let person2 = {
    firstname : "Parth",
    lastname : "Patel"
}

x = person1.fullname.call(person2);
console.log(x);




