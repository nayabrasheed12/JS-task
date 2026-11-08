var purchaseAmount = 6000;
var discount;
var finalAmount;

if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 20 / 100;
} else {
    discount = purchaseAmount * 5 / 100;
}

finalAmount = purchaseAmount - discount;

console.log("Purchase Amount: " + purchaseAmount);
console.log("Discount: " + discount);
console.log("Final Amount: " + finalAmount);