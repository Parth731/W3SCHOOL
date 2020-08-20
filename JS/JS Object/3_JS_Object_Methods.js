
let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};


// Accessing method
// objectName.methodName()

let name = person.fullName();
console.log(name);
name = person.fullName;
console.log(name);

// adding method an objct
person.name = function(){
    return this.firstName + " " + this.lastName;
};
console.log(person);
