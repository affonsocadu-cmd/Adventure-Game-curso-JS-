// Basic Calculations

//addition
let sum =  5 + 3;
console.log("Sum: " + sum);

// substraction
let difference = 10 - 4;
console.log("Difference: " + difference);

// multiplication
let product = 6 * 7;
console.log("Product: " + product);

// division
let quotient = 20 / 5;
console.log("Quotient: " + quotient);

// remainder
let remainder = 20 % 5;
console.log("Remainder: " + remainder);
console.log()

//SHOPING CART TOTAL
//item prices
let coffePrice = 15.99;
let sandwichPrice = 25.50;
let cookiePrice = 9.99;

//item quantities
let coffeQuantity = 2;
let sandwichQuantity = 1;
let cookieQuantity = 3;

//calculate subtotals
let coffeTotal = coffePrice * coffeQuantity;
let sandwichTotal = sandwichPrice * sandwichQuantity;
let cookieTotal = cookiePrice * cookieQuantity;

//calculate final cost
let finalCost = coffeTotal + sandwichTotal + cookieTotal;
console.log("==== Shoping Cart Total ====");
console.log("Coffe Total: " + coffeTotal + "$");
console.log("Sandwich Total: " + sandwichTotal + "$");
console.log("Cookie Total: " + cookieTotal + "$");
console.log("Final Cost: " + finalCost + "$");
console.log()

//DISCOUNT CALCULATOR
let shirtPrice = 100;
let discountPercentage = 20;

// calculate the discount amount and final price below 
let discountAmount = (shirtPrice * discountPercentage) / 100;
let finalPrice = shirtPrice - discountAmount;
console.log("==== Discount Calculation ====");
console.log("Original Price: " + shirtPrice + "$");
console.log("Discount Amount: " + discountAmount + "$");
console.log("Final Price: " + finalPrice + "$");
console.log()

// PRICE FORMAT CALCULATOR

let productName = "Wireless Mouse";
let productPrice = 49.99;
let quantity = 2;

// calculate the subtotal
let subtotal = productPrice * quantity;
//format and display the receipt
console.log("==== Receipt ====");
console.log("Product: " + productName);
console.log("Price: " + productPrice + "$");
console.log("Quantity: " + quantity);
console.log("Subtotal: " + subtotal + "$");
console.log();

// <MULT-STEP CALCULATOR
// order information
let basePrice = 200.99;
let quantityOrdered = 3;
let discountPercent = 15;
let taxRate = 8;

// calculate the subtotal
let subtotalOrder = basePrice * quantityOrdered;
// calculate discount
let discountAmountOrder = (subtotalOrder * discountPercent) / 100;
// calculate tax on the discounted amount
let taxAmount = (subtotalOrder - discountAmountOrder) * (taxRate / 100);
// calculate final total
let finalTotal = subtotalOrder - discountAmountOrder + taxAmount;
console.log("==== Multi-Step Calculation ====");
console.log("Base Price: " + basePrice + "$");
console.log("Quantity Ordered: " + quantityOrdered);
console.log("Subtotal: " + subtotalOrder + "$");
console.log("Discount Amount: " + discountAmountOrder + "$");
console.log("Tax Amount: " + taxAmount + "$");
console.log("Final Total: " + finalTotal + "$");
console.log();