// unary operators   jis main 1 number add hu raha hu ya phir kam hu raha hu usko unary operator bole ge
// post increment next step pr results show kre ga jabke pre increment usi step pr increment ker k results show kr de ga.
var a = 5;
var b = 6;
++a; // pre increment
--b; // pre decrement
var c = 5;
var d = 6;
c++; // post increment
d--; // post decrement
var e = 5;
var f = 2;
var g = ++e + e++ + --f + f-- + e + f++ + f;
//  6+6+7  1+1+0+1
console.log(g);
var h = 4;
var i = 7;
var j = ++h + --h + ++i + --h + ++h + ++i + i + ++h + h + --i + h + --h + i++;
// 5+4+3+4+5+5+5+4   8+9+9+8+8  = 77
console.log(j);
