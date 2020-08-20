
// js Apply method
let person = {
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}

let person1 = {
    firstname : "Parth",
    lastname : "Patel"
}

console.log(person.fullname.apply(person1));


// different between call() and apply()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// apply() method with arguments
let aperson = {
    fullname: function(city,country){
        return this.firstname + " " + this.lastname + "," + city + "," + country;
    }
}

let aperson1 = {
    firstname : "John",
    lastname : "Doe"
}

console.log(aperson.fullname.apply(aperson1,[" oslo"," Norway"]));

// call method
let cperson = {
    fullname: function(city,country){
        return this.firstname + " " + this.lastname + "," + city + "," + country;
    }
}

let cperson1 = {
    firstname : "John",
    lastname : "Doe"
}

console.log(cperson.fullname.call(cperson1, " oslo", " Norway"));

// simulate a Max Method on Arrays
console.log(Math.max(1,2,3));

console.log(Math.max.apply(null,[1,2,3]));

console.log(Math.max.apply(Math,[1,2,3]));

console.log(Math.max.apply(" ",[1,2,3]));

console.log(Math.max.apply(" ",[1,2,3]));

console.log(Math.max.apply(0,[1,2,3]));
