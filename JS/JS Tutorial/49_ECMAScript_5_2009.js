

// "use strict" Directive

// string.trim()
let str = "     hello world !    ";
console.log(str.trim());

// Array.isArray()
myfruits();

function myfruits(){
    let fruits = ["Banana", "Oranage", "Apple", "Mango"];
    console.log(Array.isArray(fruits));
}

// Array.forEach()
let txt = "";
let number = [45, 4, 9, 16, 25];
number.forEach(myforeach);

function myforeach(value){

    txt += value + " ";
}
console.log(txt);


// Array.map()
let number1 = [45, 4, 9, 16, 25];
let number2 = number1.map(mymap);

function mymap(value){
    return value * 2;
}
console.log(number2);


// Array.filter()
number = [45, 4, 9, 16, 25];
let over18 = number.filter(myfilter);

function myfilter(value){
    return value > 18

}
console.log(over18);


// Array.reduse()
number = [45, 4, 9, 16, 25];
let sum = number.reduce(myreduse);

function myreduse(total,value){
    return total + value; 
}
console.log(sum);


// Array.reduceRight()
number = [45, 4, 9, 16, 25];
sum = number.reduceRight(myreduseRight);

function myreduseRight(total, value){
    return total + value;
}
console.log(sum);

// Array.every()
number = [45, 4, 9, 16, 25];
over18 = number.every(myevery);

function myevery(value){
    return value > 18
}
console.log(over18);

// Array.some()
number = [45, 4, 9, 16, 25];
let allover18 = number.some(mysome);

function mysome(value){
    return value > 18
}
console.log(allover18);


// Array.indexOf()
let fruits = ["Banana", "Oranage", "Apple", "Mango"];
let a = fruits.indexOf("Apple");
console.log(a);     //2

// Array.lastindexof()
fruits = ["Banana", "Oranage", "Apple", "Mango"];
a = fruits.lastIndexOf("Apple");
console.log(a);     //2


// json parse()
txt = '{"name" : "john", "age" : 30, "city" : "New York"}';
let obj  = JSON.parse(txt);
console.log(obj.name + " " + obj.age);

// JSON Stringfy()
obj = {name:"john", age:30, city:"New York"};
let myobj = JSON.stringify(obj);
console.log(myobj);


// Date.Now()
let d = new Date();
console.log(d.getTime());


// property getter and setter
let person = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
    return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName);

person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value.toUpperCase();
    }
};

person.lang = "en";

console.log(person.lang);


// new object property method
person = {
    firstName : "john",
    lastName : "Doe",
    language : "NO",
};

Object.defineProperty(person, "language",{
    value:"EN",
    writable : true,
    enumerable : true,
    // enumerable : false,
    configurable : true
});

txt = "";

for(let x in person){
    txt += person[x] + " ";
}
console.log(txt);

person = {
    firstName : "john",
    lastName : "Doe",
    language : "NO",
};

Object.defineProperty(person,"language",{
    get : function() {return language},
    set : function(value) {language =  value.toUpperCase()}
});
person.language = "en";

console.log(person.language);


/*

ES5 object methods

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

// property Access on settings
str = "HELLO WORLD";
console.log(str.charAt(3));
console.log(str[2]);

// trailing commas
person = {
    firstName : "john",
    lastname : " Doe",
    age : 44,
}

point = [
    1,
    5,
    10,
    25,
    40,
    100,
]

// json object
// Allowed:
person = '{"firstName":"John", "lastName":"Doe", "age":46}'
JSON.parse(person)

// Not allowed:
person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
// JSON.parse(person)       //error


// json array
// Allowed:
points = [40, 100, 1, 5, 25, 10]

// Not allowed:
points = [40, 100, 1, 5, 25, 10,]


// string over multiple lines
console.log("hello \
india");
console.log("hello" +
"india");


// reverse words as property names
obj = {name: "John", new: "yes"};
console.log(obj.new);
