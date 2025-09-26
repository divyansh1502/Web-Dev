// Create a faulty calculator using JS

// This faulty calculator does following:
// 1. It takes two numbers as input from the User
// 2. It performs wrong operations as follows:
// + ----> -
// * ----> +
// - ----> /
// / ----> **

// It perform wrong operation 10% of the items
const prompt = require("prompt-sync")();

let a = Number(prompt("Input your 1st number : "));
let b = Number(prompt("Input your 2nd number : "));

console.log("press 1 for addition(+)");
console.log("press 2 for subtraction(-)");
console.log("press 3 for multiplication(*)");
console.log("press 4 for division(/)");

let r = Math.random();
if (r > 0.1) {

let s = Number(prompt("Input the operator : "));

if (s === 1) {
    console.log(a + b);
}
else if (s === 2) {
    console.log(a - b);
}
else if (s === 3) {
    console.log(a * b);
}
else if (s === 4) {
    console.log(a / b);
}
else {
    console.log("Invalid Number Pressed")
}
}
else {
    let s = Number(prompt("Input the operator : "));

if (s === 1) {
    console.log(a - b);
}
else if (s === 2) {
    console.log(a / b);
}
else if (s === 3) {
    console.log(a + b);
}
else if (s === 4) {
    console.log(a ** b);
}
else {
    console.log("Invalid Number Pressed")
}
}