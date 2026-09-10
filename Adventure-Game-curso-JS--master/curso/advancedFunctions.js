function createGreeting(title, firstName) {
        console.log("Welcome to our website, " + title + ". " + firstName + "!");
    }
    createGreeting("Ms", "Emily");
    createGreeting("Dr", "James");
    createGreeting("Prof", "Martinez");

console.log("==================================================================================")

function calculateTip(amount, tipPercent = 15) {
        let tip = Math.round(amount * (tipPercent / 100) * 100) / 100;
        let total = amount + tip;
        
        console.log("Bill Amount: $" + amount);
        console.log("Tip Percentage: " + tipPercent + "%");
        console.log("Tip Amount: $" + tip);
        console.log("Total: $" + total);
    }
    calculateTip(50);        // Uses default 15%
    calculateTip(50, 20);    // Uses 20%

console.log("==================================================================================")

function formatPrice(price, currencySymbol = "$", decimals = 2) {
        if (price < 0) {
            return "Price cannot be negative";
        }
        
        let formatted = price.toFixed(decimals);
        return currencySymbol + formatted;
    }
    console.log(formatPrice(29.95));        // "$29.95"
    console.log(formatPrice(29.95, "€"));   // "€29.95"
    console.log(formatPrice(29.95, "£", 0)); // "£30"

console.log("==================================================================================")

function calculateSubtotal(price, quantity) {
        if (price < 0 || quantity < 1) {
            return "Invalid price or quantity";
        }
        return price * quantity;
    }
    function calculateShipping(subtotal, international = false) {
        if (international) {
            return subtotal > 100 ? 15 : 25;
        }
        return subtotal > 50 ? 0 : 10;
    }
    function calculateTotal(price, quantity, international = false) {
        let subtotal = calculateSubtotal(price, quantity);
        let shipping = calculateShipping(subtotal, international);
        let total = subtotal + shipping;
        
        console.log("Subtotal: $" + subtotal);
        console.log("Shipping: $" + shipping);
        console.log("Total: $" + total);
    }
    // Test orders
    calculateTotal(25, 2);           // Domestic order
    calculateTotal(25, 2, true);     // International order
    
console.log("==================================================================================")

// --- Tip Calculator Functions ---
// Calculate tip amount based on price and percentage
function calculateTip(price, tipPercent) {
        return price * (tipPercent / 100);
    }
    // Calculate total including tip
    function calculateTotal(price, tipPercent) {
        return price + calculateTip(price, tipPercent);
    }
    // Display receipt with price, tip, and total
    function printReceipt(price, tipPercent) {
        let finalTip = calculateTip(price, tipPercent);
        let finalTotal = calculateTotal(price, tipPercent);
        
        console.log("=== Receipt ===");
        console.log("Price: $" + price);
        console.log("Tip: $" + finalTip);
        console.log("Total: $" + finalTotal);
        console.log("==============");
    }
    // Test the calculator
console.log(printReceipt(50, 20));
    
console.log("==================================================================================")

// --- Grade Variables ---
let subjectName = "Math";
let test1Score = 85;
let test2Score = 92;
let test3Score = 88;
// --- Grade Calculations ---
// Calculate average of three test scores
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
// Convert numeric score to letter grade
function getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
// Display formatted grade report
function printGradeReport(subject, score1, score2, score3) {
    let average = calculateAverage(score1, score2, score3);
    let letter = getLetterGrade(average);
    
    console.log("=== Grade Report ===");
    console.log("Subject: " + subject);
    console.log("Test 1: " + score1);
    console.log("Test 2: " + score2);
    console.log("Test 3: " + score3);
    console.log("Average: " + average);
    console.log("Grade: " + letter);
    console.log("===================");
}
// Test with sample grades
printGradeReport(subjectName, test1Score, test2Score, test3Score);
