
// how to display JS Object?
let person = { name: "John", age: 30, city: "New York" };
console.log(person);

// display object property
console.log(person.name + "," + person.age + "," + person.city);

// display object in a loop
// person = { name: "John", age: 30, city: "New York" };
let txt = "";
for(let x in person){
    txt += person[x] + " ";
}
console.log(txt);

// using object.value()
console.log(Object.values(person));


// using JSON.stringify()
console.log(JSON.stringify(person));


//stringify Dates
person = { name: "John", age: 30, city: "New York", today:new Date() };
console.log(JSON.stringify(person));

// stringify function
person = { name: "John", city: "New York", today:new Date(), age: function(){return 30;}};
person.age = person.age.toString();
console.log(JSON.stringify(person));

// stringify arrays
let arr = ["jhom", "peter", "sally", "Jane"];
console.log(JSON.stringify(arr));
