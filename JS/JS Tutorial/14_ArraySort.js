
// Sorting an Array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

// reversing Array
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits.reverse());

// Numberic Sort (aesceding order)
let points = [40,100,1,5,25,10];
points.sort(function(a,b){return a-b;});
console.log(points);

// numberically descending order
points.sort(function(a,b){return b-a});
console.log(points);

// alphabetically and numberically sort
points = [40,100,1,5,25,10];
console.log(points.sort());     //alphabetically
console.log(points.sort(function(a,b){return a - b}));       //numberically

// find the Highest and lowest  Array Value (aesceding order)
points = [40,100,1,5,25,10];          //1 5 10 25 40 100  
points.sort(function(a,b){return a - b });
console.log(points);
console.log(points[points.length-1]);   //100
console.log(points[0]);                 //1  

// find the Highest and lowest  Array Value (desceding order)
points = [40,100,1,5,25,10];           //100 40 25 10 5 1 
points.sort(function(a,b){return b - a });
console.log(points);
console.log(points[points.length-1]);       //1
console.log(points[0]);                     //100

// Using Math.max() on an Array
points = [40,100,1,5,25,10];
console.log(Math.max.apply(null, points));

// using Math.min() on an Array
console.log(Math.min.apply(null,points));

// my min/max Javascrpit method

//find max
points = [40,100,1,5,25,10];
let len = points.length;
let max = -Infinity;
while(len--){
    if(points[len] > max){
        max = points[len];
    }
}

console.log("Maximum value : " +max);

//find min
points = [40,100,1,5,25,10];
let min = Infinity;
len = points.length;
while(len--){
        if(points[len] < min){
        min = points[len];
    }
}
console.log("minimum value : " + min);

// sorting object Arrays
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
console.log(cars.sort(function(a,b){return a.year - b.year}));
console.log(cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}));