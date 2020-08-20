
// JS Getter(get keyword)
let person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    }, 
    set lang(value){
        this.language = value;
    }
};

console.log(person.language);

// JS Setter (The Set Keyword)
person.lang= "kannada";
console.log(person.language);

// JS Function or Getter
person = {
    firstName: "John",
    lastName : "Doe",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());
console.log(person.fullName);

// data Quality
person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language.toUpperCase();
    },
    set lang(value){
        this.language = vlaue.toUpperCase();
    }
};
console.log(person.lang);
person.language = "Gujrati";
console.log(person.lang);



// object.defineProperty()
let obj = {counter:0};
Object.defineProperty(obj,"add",{
    set : function(value){
        this.counter +=  value;}
});
Object.defineProperty(obj,"subtract",{
    set : function(value){
        this.counter -=  value;}
});
Object.defineProperty(obj,"reset",{
    set : function(){
        this.counter = 0; }
});
Object.defineProperty(obj,"increment",{
    get : function(){
        this.counter++;}
})
Object.defineProperty(obj,"decrement",{
    get : function(){
        this.counter--;}
})
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter);



