

// class defination

class Cars {

    // constructor
    constructor(brand){
        this.carname = brand;
    }

    // function
    presentc(){
        return "I have a " +this.carname;
    }

    present(x){
        return x + ", I have a " + this.carname; 
    }


    // static method
    static Hello(){
        return "Hello !!";
    }
}; 

// constructor
let mycar = new Cars("valvo");
console.log(mycar);

// methods
console.log(mycar.presentc());
console.log(mycar.present("hello"));

// static method
console.log(Cars.Hello());
console.log(Cars.Hello(mycar));

//////////////////////////////////////////////


// inheritance
class carclass {

    constructor(brand){
        this.carname = brand;
    }
    present(){
        return "I have a " + this.carname;
    }
}

class Model extends carclass{

    constructor(brand,mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}
// The super() method refers to the parent class.
mycar = new Model("valvo",2013);
console.log(mycar.show());



// getter and setter
class Car{
    constructor(brand){
        this._carname = brand;
    }
    get cname(){
        return this._carname;
    }
    set cname(x){
        this._carname =  x;
    }
};
mycar = new Car("valvo");
console.log(mycar.cname);

mycar.carname = "BMW";
console.log(mycar.carname);

// error
// mycar.cname("BWM"); 
// console.log(mycar.cname);


// hoisting
// class declarations are not hoisted.

// "use strict"
// In "strict mode" you will get an error if you use a variable without declaring it