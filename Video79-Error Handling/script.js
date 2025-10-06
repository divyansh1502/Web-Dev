let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

console.log(sum)

try {
    console.log("The sum is : " + sum*x) 
} catch (error) {
    console.log("Error occured")
}
finally{
    console.log("Files are being closed and db connection is being closed")
}