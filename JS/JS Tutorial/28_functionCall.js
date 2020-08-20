
// function are method
let person = {
    firstname : "Parth",
    lastname : "Patel",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    } 
}

console.log(person.fullname());

// js call() method
//  call(), an object can use a method belonging to another object.
let fperson = {
    fullname : function() {
        return this.firstname + " " + this.lastname;
    } 
}

let person1 = {
    firstname : "Parth",
    lastname : "Patel"
}

let person2 = {
    firstname : "Nayana",
    lastname : "Patel"
}

console.log(fperson.fullname.call(person1));
console.log(fperson.fullname.call(person2));


// call() method with argument
let cperson = {
    fullname : function(city, country){
        return this.firstname + " " + this.lastname + "," + 
        city + "," + country; 
    }
}

person1 = {
    firstname : "stive",
    lastname : "jobes"
}

console.log(cperson.fullname.call(person1, " NewYork", " America"));
