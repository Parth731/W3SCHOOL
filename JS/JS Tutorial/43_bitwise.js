
// bitwise operator

// bitwise AND(&)
console.log(5 & 1);   //1

// bitwise OR(|)
console.log(5 | 1);   //5

// bitwise XOR(^)
console.log(5 ^ 1);   //4

// bitwise NOT(~)
console.log(~5);    //-6

// bitwise left shift(<<)
console.log(5 << 1);  //10

// bitwise right(>>)
console.log(-5 >> 1);  //-3

// right shift(zero fill)(>>>)
console.log(5 >>> 1);

///////////////////////////////////////////////////

// decimal to binary
console.log(dec2bin(-5));

function dec2bin(dec) {
    return (dec >>> 0).toString(2); //11111111111111111111111111111011
}


// decimal to hexa
console.log(dec2hex(255));

function dec2hex(dec) {
    return Number(dec).toString(16);    //ff
}

// decimal to octal
console.log(dec2oct(15));

function dec2oct(dec) {
    // return Number(dec).toString(8); //17
    return parseInt(dec,10).toString(8);    //17
}

/////////////////////////////////////////////

// binary to decimal 
console.log(bin2dec(1101));

function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);   //13
}

// binary to octal
console.log(bin2oct(1101));

function bin2oct(bin){
    return parseInt(bin,2).toString(8);     //15
}

// binary to hexa
console.log(bin2hex(1101));

function bin2hex(bin){
    return parseInt(bin,2).toString(16);    //d
}

/////////////////////////////////////////

// octal to decimal
console.log(oct2dec(255));

function oct2dec(oct){
    return parseInt(oct,8).toString(10);    //173
}

// octal to binary
console.log(oct2bin(255));

function oct2bin(oct){
    return parseInt(oct,8).toString(2); //10101101
}

// octal to hexa
console.log(oct2hex(255));

function oct2hex(oct){
    return parseInt(oct,8).toString(16);    //ad
}

// hexa to binary
// console.log(hex2bin(50ff));

// function hex2bin(hex){
//     return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
// }



 

