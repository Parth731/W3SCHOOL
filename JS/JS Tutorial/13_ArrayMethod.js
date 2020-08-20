// converting Array to String
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits.join("*"));

// popping and pushing
// The pop() method returns the value that was "popped out"
// The push() method returns the new array length
console.log(fruits.pop());
fruits.push("Kiwi");
console.log(fruits);

//shifting Elements
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the string that was "shifted out"
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);

// unshifting Element
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
// The unshift() method returns the new array length.
fruits.unshift("Lemon")
console.log(fruits);

// Array length
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

// changing Element
fruits[0] = "kiwi";
console.log(fruits);

// provides an easy way to append a new element to an array
fruits[fruits.length] = "Lemon";
console.log(fruits);

// deleting Element
// Using delete may leave undefined holes in the array. Use pop() or shift() instead.
delete fruits[0];
console.log(fruits);

// Splicing an Array
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,3,"Lemon", "Kiwi");
console.log(fruits);

// using splice() to remove Elements
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,1);
console.log(fruits);

// Merging Arrays
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// merging Three Arrays
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
myChildren = arr1.concat(arr2,arr3);
console.log(myChildren);

// slicing an Array
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(3);
console.log(fruits);
console.log(citrus);
citrus = fruits.slice(1,3);
console.log(fruits);
console.log(citrus);

// Atomatic toString();
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits);

