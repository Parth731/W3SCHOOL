

/*

ES5 New object methods

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)


*/

// changing property value

// syntax

//Object.defineProperty(object, property, {value : value})
let person = {
    firstname: "john",
    lastname: "doe",
    language: "NO"
};

Object.defineProperty(person, "language", {value : "EN"});

console.log(person.language);

// changing meta data
Object.defineProperty(person, "language", {
    value : "hindi",
    writable : true,
    enumerable : true,
    configurable : true
});
let txt  = "";
for(let x in person){
    txt += person[x] + " ";
}

console.log(txt);

Object.defineProperty(person, "language", {
    value : "marathi",
    writable : false,
    enumerable : false,
    configurable : false,
});
txt  = "";
for(let x in person){
    txt += person[x] + " ";
}

console.log(txt);


// getter and setter
// Object.defineProperty(person,"language",{
//     get : function(){return language},
//     set :  function(value){language = value}
// });

// language read-only
Object.defineProperty(person,"language",{writable : false});

// language not enumeriable
Object.defineProperty(person,"language",{enumerable : false});


// listing All property
Object.defineProperty(person,"language",{enumerable : false});
console.log(Object.getOwnPropertyNames(person));

// listing enumerable property
console.log(Object.keys(person));

// Add property
Object.defineProperty(person,"year",{value:2008});
console.log(person);

// Add getter and setters
Object.defineProperty(person,"fullname",{
    get : function() {return this.firstname + " " + this.lastname},
    set : function(fname,lname) {
        this.firstname = fname;
        this.lastname = lname;
     }
})
console.log(person.fullname);

// counter example
// Define object
let obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj);