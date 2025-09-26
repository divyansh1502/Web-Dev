// Create a  business name generator by combining list of adjectives and shop name and another word

// Adjectives:
// Crazy 
// Amazing
// Fire

// Shop Name:
// Engine 
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub
let a1 = "Crazy";
let a2 = "Amazing";
let a3 = "Fire";
let first = random(a1, a2, a3);

let b1 = "Engine";
let b2 = "Foods";
let b3 = "Garments";
let second  = random(b1, b2, b3);

let c1 = "Bros";
let c2 = "Limited";
let c3 = "Hub";
let third = random(c1, c2, c3);

function random(x, y, z) {
    let randomChoice;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum == 1) {
       return randomChoice = x;
    }
    else if(randomNum == 2) {
       return randomChoice = y;
    }
    else {
       return randomChoice = z;
    }
}

console.log("Generated Business Name is : " + first + " " + second + " " + third);