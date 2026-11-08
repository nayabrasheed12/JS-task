let balance = 5000;
let withdrawAmount = 3000;

if (balance >= withdrawAmount) {
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance - withdrawAmount);
} else {
    console.log("Insufficient Balance");
}