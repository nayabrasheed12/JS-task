let units = 150;
let bill;

if (units >= 300) {
    bill = units * 50;
} else if (units >= 100) {
    bill = units * 30;
} else {
    bill = units * 15;
}

console.log("Electricity Units:", units);
console.log("Total Bill:", bill);