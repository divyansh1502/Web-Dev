console.log("Hello I am conditional statement");
let age = 18;
let grace = 2;

if(age>18) {
    console.log("You can drive");
} 
else if(age==18) {
    console.log("You can apply for DL")
}
else {
    console.log("You cannot drive")
}
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);
let a = "3";
let b = 3;
console.log(a==b);// only valoue is compared
console.log(a===b);// value and typeof both are compare

let c = 4;
let d = 5;
if (c==10 || d==5) {
    console.log("True")
}
if (c==4 && d==5) {
    console.log("True")
}
let e = c>d ?(c-d):(d-c);
console.log(e);