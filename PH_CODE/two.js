/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;

if (money > 0 && money <= 1000000000) {
    if (money >= 25000) {
        console.log("Laptop");
    } else if (money >= 10000 && money < 25000) {
        console.log("Cycle");
    } else {
        console.log("Chocolate");
    }
}