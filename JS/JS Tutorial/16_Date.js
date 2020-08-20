
// Creating Date Object
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

// new Date()
let d = new Date();
console.log(d);
d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);
d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);
d = new Date(2018, 11, 24, 10, 33);
console.log(d);
d = new Date(2018, 11, 24, 10);
console.log(d);
d = new Date(2018, 11, 24);
console.log(d);
d = new Date(2018, 11);
console.log(d);
d = new Date(2018);
console.log(d);

// previous century
d = new Date(99, 11, 24);   //1999
console.log(d);
d = new Date(9, 11, 24);    //1909  
console.log(d);

// new Date(datestring)
d = new Date("july 31, 1995 12:00:00");
console.log(d);

// new Date(milliseconds)
d = new Date(0);
console.log(d);
d = new Date(100000000000);
console.log(d);
d = new Date(86400000);
console.log(d);

//Displaying dates
d = new Date();
console.log(d);

// toString()
console.log(d.toString());

// toUTCString() method converts a date to a UTC string (a date display standard).
console.log(d.toUTCString());

// The toDateString() method converts a date to a more readable format:
console.log(d.toDateString());

// The toISOString() method converts a date to a string, using the ISO standard format:
console.log(d.toISOString());







