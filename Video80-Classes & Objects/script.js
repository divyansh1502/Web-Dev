// let obj = {
//     a:1,
//     b:"Divyansh"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

class animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eat(){
        console.log("Kha rha huu")
    }
    sleep(){
        console.log("soo rha huu")
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("Object is created and he is lion")
    }
}

let a = new animal("Brunooo");
console.log(a)

let l = new lion("Shera")
console.log(l)