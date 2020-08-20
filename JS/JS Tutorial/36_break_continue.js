

// break statement
let i=0;
txt = "";
for(i=0;i<10;i++){

    if(i===3){
        break;
    }
    txt += i + " ";
}
console.log(txt);


// continue statement
i = 0;
text = " ";
for(i=0;i<10;i++){
    if(i===3){continue;}
    text += i + " ";
}
console.log(text);

// js labels
// break // labelname
// continue // labelname

// break used in list
let cars = ["BMW", "valvo", "Saab", "Ford"];
text ="";
list:{
    text += cars[0] + " ";
    text += cars[1] + " ";
    break list;
    text += cars[2] + " ";
    text += cars[3] + " ";
}
console.log(text);
