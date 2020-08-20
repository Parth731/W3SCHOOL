
// Array.forEach()
let txt = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myforeach);

function myforeach(value, index, array) {
  txt = txt + value + " ";
}

console.log(txt);

//Array.map()
let num1 = [45, 4, 9, 16, 25];
let num2 = num1.map(myFunction);

function myFunction(value,index,array){
    return value*2;

}

console.log(num2);

// Array.Filter()
num1 = [45, 4, 9, 16, 25];
num2 = num1.filter(myfilter);

function myfilter(value, array, index){
    return value > 18;
}

console.log(num2);


// Array.reduce
// reduce() method works from left-to-right in the array
num1 = [45, 4, 9, 16, 25];
let sum = num1.reduce(myreduce);
let sum1 = num1.reduce(myreduce,100);
function myreduce(total,value,index,array){
    return total + value;
}

console.log(sum);   //99
console.log(sum1);  //199

// Array.reduceRight()
num1 = [45, 4, 9, 16, 25];
sum = num1.reduce(myreduceright);

function myreduceright(total,value,index,array){
    return total + value;
}

console.log(sum);

// Array.every()
let allover18 = num1.every(myevery);

function myevery(value,index,array){
    return value > 18;
}

console.log(allover18);         //false

// Array.some()
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(someOver18);        //true

// Array.indexOf()
let fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple"));

// Array.lastIndexOf()
fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.lastIndexOf("Apple") + 1);

// Array.find()
num1 = [4, 9, 16, 25, 29];
first = num1.find(myfind);

function myfind(value,index,array){
    return value > 18;
}
console.log(first);

// Array.findIndex(myfind)
num1 = [4, 9, 16, 25, 29];
first = num1.findIndex(myfind);

function myfind(value,index,array){
    return value > 18;
}
console.log(first);