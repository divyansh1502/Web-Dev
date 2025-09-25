console.log("Hey this is Video no. 55")
let a = 5;
let b = 6;
console.log(a)
{
    let a = 66; // specified in a block so scope is only in the block
    console.log(a)
}
console.log(a+b)
console.log(a)
let c = "Divyansh";
let _a = "Rohan";
console.log(typeof a, typeof b, typeof c)

const a1 = 6;
//a1 = a1 + 1; // Not allowed bcz a1 is constant

 // globally scoped variable
var d = 5;
{
    var d = 66;
    console.log(d)
}
console.log(d)

let x = "Divyansh singh"
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof  z, typeof p, typeof q, typeof r)

let o = {
    "name" : "Divyansh",
    "job role" : "engineer"
}
console.log(o)
o.salary = "100Crore"
console.log(o)