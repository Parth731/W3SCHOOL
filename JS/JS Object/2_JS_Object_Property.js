

// Accessing JS Property
/*
objectName.property         // person.age

objectName["property"]      // person["age"]

objectName[expression]      // x = "age"; person[x]
*/

let person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
console.log(person.firstname + " " + person.age);  
console.log(person["firstname"] + " " + person["age"]);  

let txt = "";

for(let x in person){
    txt += person[x] + " "; 
}
console.log(txt);

// adding new property
person.nationality = "English";
console.log(person);

// deleting property
delete person["age"];
console.log(person);


