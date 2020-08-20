
// setFullYear()
let d = new Date();
d.setFullYear(2020);
console.log(d);

// SetFullYear() Method can optionally set month and day
d.setFullYear(2020, 11, 3);
console.log(d);

// SetMonth()
// d = new Date();
d.setMonth(6);
console.log(d);

// SetDate()
d.setDate(31);
console.log(d);

// setDate() method can also be used to add days to a date
// d.setDate(d.getDate()+50);
// console.log(d);

// SetHours() Method
d.setHours(13);
console.log(d);

// setMinutes
d.setMinutes(30);
console.log(d);

// setSeconds
d.setSeconds(40);
console.log(d);

// comspare dates
let today, someday, text;

today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if(today < someday){
    text = "Today is before january 14, 2100";
}
else
{
    text = "Today is after january 14, 2100";
}
console.log(d);






