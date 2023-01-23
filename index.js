"use strict";

const numberZero = {}; //new Number(0);

if (0) {
    console.log(number);
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

const numberTest = new Number(30.43143434);
console.log(numberTest.toFixed(2));
console.log("toString", numberTest.toString());

const str1 = "fdf";
const strObj = new String("fdffdsf");

if (str1) {
    console.log(str1[1]);
}

if (strObj) {
    console.log(strObj[2]);
}

if (strObj) {
    console.log(strObj);
}

// toUpperCase
const userName = "   tom   ";

// console.log(userName.toUpperCase());
const userNameUpper = userName.trim().toUpperCase().repeat(3);

const arr = [1, 2, 3, 4, 5];
const strArr = arr.join("-");
console.log(strArr);

const p =
    "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

if (p.includes(".")) {
    const posDote = p.indexOf(".");
    const pArr = p.substring(0,posDote).split(" ");
    console.log(pArr);
}
