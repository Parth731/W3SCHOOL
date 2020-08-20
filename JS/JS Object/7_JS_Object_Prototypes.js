

// object constructor
function person(fname,lname,age,color){
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.eyecolor = color;
    //this.nationality = "hindi";
}

let mymother = new person("sally", "rally", 48, "green");
let myfather = new person("john","Doe", 50, "blue");
console.log(myfather);
console.log(mymother);

// person.nationality = "hindi";

person.prototype.nationality = "hindi";

console.log(mymother.nationality);

person.prototype.name = function(){
    return this.firstname + " " + this.lastname;
}

console.log(myfather.name());
console.log(mymother.name());