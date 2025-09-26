function nice(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your T_shirt is good ");
}
nice("Rohan");

console.log("Hey Divyansh You are nice!");
console.log("Hey Divyansh You are good!");
console.log("Hey Divyansh Your T-Shirt is good!");
console.log("Hey Divyansh You are Shoes is good!");

nice("Shivam");

function sum(a, b) {
    console.log(a + b);
}
sum(3, 5);

function sum1(c, d) {
    return c + d;
}
result = sum1(3, 5);

console.log("The sum of these number is : ", result);

const fun1 = (x)=>{
    console.log("I am an arrow function", x);
}

fun1(34);
fun1(48);
fun1(78);