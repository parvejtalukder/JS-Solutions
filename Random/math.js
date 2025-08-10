const prompt = require("prompt-sync")();
let sizeOf = parseInt(prompt("Enter the size of array:"));
let arr = [];
for (let i = 0; i < sizeOf; i++) {
    arr[i] = parseFloat(prompt("Enter No " + (i + 1) + ":"));
}
let minimum = Math.min(...arr);
console.log("The Smallest No. is: " + minimum);
