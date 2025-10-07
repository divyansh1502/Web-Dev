let students = ["shubh", "abhay", "om", "ravi","sanjay", "david putra", "karan", "kr$ns", "ranvijay", "divyansh", "naitik", "diljit", "Yuvraj"]

let houses = []

for (const student of students) {
    if(student.length < 6) {
        houses.push("Green House")
    }
    else if(student.length < 9) {
        houses.push("Blue House")
    }
    else {
        houses.push("Red House")
    }
}
console.log(houses)