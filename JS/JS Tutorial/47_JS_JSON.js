
/*

what is json?

- JSON stands for java script object notation.
- JSON is lightweight data interchange format
- JSON is language independent.
- JSON is "self - describing" and easy to understand

JSON Syntax Rules

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

*/

/*
// json example
{
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}
*/

/*
json data - a name and a value
"firstname" : "jhon"

json objects
{"firstname" : "john", "lastname" : "Doe"};

JSON Arrays
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]



*/

// JSON Example
var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
