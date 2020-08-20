
/*
note: string count to 0 index and string length count to 1
*/



// string length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);

// finding a string in a string
var str = "Please locate where 'locate' occurs!";

var pos = str.indexOf("locate");
console.log(pos);   //7

var lastpos = str.lastIndexOf("locate");
console.log(lastpos);   //21

var pos = str.indexOf("John");
console.log(pos);           //7

var pos = str.indexOf("locate",15);
console.log(pos);       //21

var pos = str.lastIndexOf("locate",15);
console.log(pos); 

// searching for string in a string
var pos = str.search("locate");
console.log(pos); 

//different between indexof() and search()
/*
The search() method cannot take a second start position 
argument.

The indexOf() method cannot take powerful search values (regular expressions).
*/

//Extracting string parts
// slice(start,end);
// substring(start,end);
// substr(start,end);

var str = "Apple, Banana, Kiwi"
console.log(str.length);

var res = str.slice(7,13);
console.log(res);           //Banana

var res = str.slice(-12,-6);
console.log(res);           //Banana

var res = str.slice(7);
console.log(res);           //Banana

var res = str.slice(-12);
console.log(res);           //Banana

// substring() cannot accept negative indexes.
var res = str.substring(7,13);
console.log(res);       //Banana

// substr() second parameter specifies the length of the extracted part.
var res = str.substr(7,6);
console.log(res);           //Banana

var res = str.substr(7);
console.log(res);           //Banana, kiwi

var res = str.substr(-4);
console.log(res);           //kiwi

// repalce string contect
// replace() method replaces only the first match
str = "Please visit Microsoft and Microsoft!";

var n = str.replace("Microsoft", "W3Schools");
console.log(n);

var n = str.replace("/Microsoft/i", "W3Schools");
console.log(n);

var n = str.replace("/Microsoft/g","W3Schools");
console.log(n);

//converting upper case to lower case
var text1 = "Hello world!";
var text2 = text1.toUpperCase();
console.log(text2);

var text2 = text1.toLowerCase();
console.log(text2);

// concat() Method
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);

// String.trim()
var str = "       Hello World!        ";
alert(str.trim());

var str = "       Hello World!        ";
alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// Extracting String Characters
// charAt(position)
// charCodeAt(position)
// Property access [ ]

var str = "HELLO WORLD";
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str[0]);

//converting a string to an Array
// txt.split(",");          // Split on commas
// txt.split(" ");          // Split on spaces
// txt.split("|");          // Split on pipe

var txt = "a,b,c,d,e";
var arr = txt.split(',');
console.log(arr[0])

var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for(i =0;i<str.length;i++){
    text += arr[i] + " ";
}
console.log(text);