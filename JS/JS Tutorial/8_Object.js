

//JS Object
let car = "Flat";
console.log(car);

car = {type:"Fiat", model:"500", color:"white"};
console.log(car);


// object defination
let person = {
    firstname:"Parth",
    lastname:"Patel",
    age:25,
    eyecolor:"blue"
};

console.log(person.firstname + " is " + person.age + " year old.")

// Accessing Object Properties
console.log(person.firstname);
console.log(person["firstname"]);

//object method
person = {
    firstname:"john",
    lastname :"Doe",
    id: 5566,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
};

console.log(person.fullname);

//declare string, Number, and boolean as object!

var x = new String();
var y = new Number();
var z = new Boolean();






