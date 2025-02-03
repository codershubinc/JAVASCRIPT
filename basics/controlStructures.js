// Control Structures (if-else, switch, loops)

// if-else
let a = 10;

if (a > 10) {
    console.log("a is greater than 10");
} else if (a < 10) {
    console.log("a is less than 10");
} else {
    console.log("a is equal to 10");
}

// switch
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// while loop

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop

let j = 0;

do {
    console.log(j);
    j++;
}
while (j < 5);

// for loop

for (let k = 0; k < 5; k++) {
    console.log(k);
}

// for-in loop

const person = {
    name: "Alice",
    age: 25
}; // Object   

for (let key in person) {
    console.log(key, person[key]);
}