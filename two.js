const prompt = require('prompt-sync')();

let ages = prompt("Enter digits (e.g. 1234): ");
let con  = prompt("Sum or Avg?: ");
let sum = 0;
let size = ages.length;

// Sum digits as numbers
for(let i = 0; i < size; i++) {
    sum += Number(ages[i]);
}

let avg = sum / size;

if (con.toLowerCase() === "sum") {
    console.log("Sum:", sum.toFixed(2));
} else if (con.toLowerCase() === "avg") {
    console.log("Average:", avg.toFixed(3));
} else {
    console.log("Please enter 'Sum' or 'Avg'");
}
