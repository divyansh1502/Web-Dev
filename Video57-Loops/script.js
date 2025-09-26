console.log("I am a tutorial of loops");
for(let i = 1; i <= 100; i++) {
    console.log(i);
}
let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}
for (const c of "Divyansh") {
    console.log(c);
}
let i =0;
while(i < 6) {
    console.log(i);
    i++;
}
let j = 15;
do {
    console.log(j);
} while (j<10);