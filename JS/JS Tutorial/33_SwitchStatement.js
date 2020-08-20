

// switch statement
/*
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
*/


// The default case does not have to be the last case in a switch block:
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    default:
        day = "Looking forward to the weekend";
}
console.log("Today is " + day);

let text;
switch(new Date().getDay()){
        case 4:
        case 5:
            text = "Soon it is Weekend";
            break;
        case 0:
        case 6:
            text = "It is Weekend";
            break;
        default:
            text = "Looking forword to the weekend";
}       
console.log(text);

let x = "0";
switch(x){
    case 0:
        text = "OFF";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(text);
