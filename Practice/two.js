const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(input) {
  const n = parseInt(input);

  if (n % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

  rl.close();
});
