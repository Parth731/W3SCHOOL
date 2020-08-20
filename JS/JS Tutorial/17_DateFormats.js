
// Date Input
// ISO Date	"2015-03-25" (International Organization for Standardization)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

// date output
let d = new Date();
console.log(d);

// ISO Date
d = new Date("2015-03-25");
console.log(d);

// ISO Dates (Year and Month)
d = new Date("2015-03");
console.log(d);

// ISO Dates(only year)
d = new Date("2015");
console.log(d);

// ISO Dates (Date Time)
// Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.
d = new Date("2015-03-25T12:00:00Z");
console.log(d);

// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

// JS Short Dates
d = new Date("03/25/2015");
console.log(d);

// warnings
d = new Date("2015-3-25");
console.log(d);
// d = new Date("2015/03/25");
// console.log(d);
d = new Date("25-03-2015");
console.log(d);

// Long Date
d = new Date("mar 25 2015");
console.log(d);
d = new Date("25 Mar 2015");
console.log(d);
d = new Date("January 25 2015");
console.log(d);
d = new Date("Jan 25 2015");
console.log(d);
d = new Date("JANUARY, 25, 2015");
console.log(d);

// Date Input - Parsing Date
let msec = Date.parse("March 21, 2012");
console.log(msec);
d = new Date(msec);
console.log(d);


