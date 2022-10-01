var number1 = 25;
var number2 = 15.5;
console.log(number1 + number2);

var number1 = 20;
var number2 = '15.5';
console.log(number1 + number2);

var number1 = 20;
var number2 = '15.5';
number2 = parseFloat(number2);
console.log(number1 + number2);

var number1 = '20.5';
var number2 = 15;
number1 = parseInt(number1);
console.log(number1 + number2);

var number1 = 30;
var number2 = '20.5';
number2 = +number2;
console.log(number1 + number2);

var number1 = 30;
var number2 = 20.5;
number2 = '' + number2;
console.log(number1 + number2);

var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
console.log(total.toFixed(4));
