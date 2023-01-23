"use strict";

const numberZero = {} ; //new Number(0);

if(0) {
  console.log(number)
}

const number = new Number(10);
console.log(number);
console.log(number.toExponential());

console.log((12345.12345).toPrecision(7));
console.log((12345.12345).toFixed(7));

const num = 789.789456;
console.log(num);
new Number(num);
console.log(num.toPrecision(7));
console.log(num.toFixed(2));


const numberTest = new Number (30.43143434);
console.log(numberTest.toFixed(2))
console.log("toString",numberTest.toString())