let arr = [1, 2, 4, 5, 7];
let arr2 = ["Mango", "Grapes", "Ajay"];
console.log(arr);
console.log(arr.length)
arr[0] = 55;
console.log(arr, typeof arr);
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

console.log(arr.toString());
console.log(arr.join(" and "));

arr.pop();
console.log(arr);
arr.push(100);
arr.push("Thakur Sahab");
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("Divyansh");
console.log(arr);
delete arr[5];
console.log(arr);
let a = arr.concat(arr2);
console.log(a);
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.splice(1,3);
console.log(numbers);
numbers.splice(1,3, 222, 266);
console.log(numbers);
