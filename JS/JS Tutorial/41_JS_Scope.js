
// local js variable
myFunction();
function myFunction(){
    let carname = "valvo";
    console.log(carname);
}
console.log(typeof carname);

// global js variable
carname = "valvo";
myfunction();

function myfunction(){

    console.log(carname);
}
console.log(carname);