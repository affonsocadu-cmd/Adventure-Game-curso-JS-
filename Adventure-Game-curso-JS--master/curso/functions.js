console.log("Create a function that calculate the rectangle area");
function calculateAreaRectangle(height, width){
    return height * width;
}

console.log("Area of room 1 (10 x 15):", calculateAreaRectangle(10, 15) + "m²",);

console.log("================================================================================")

// Create a function that squares a number
console.log("Create a function that squares a number");
function squareNumber(num) {
    console.log(num * num);
    }
    squareNumber(4);
    squareNumber(5);
    squareNumber(10);

console.log("================================================================================")

// Convert Fahrenheit to Celsius
console.log("Convert Fahrenheit to Celsius");
function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + "°F equals " + celsius + "°C");
    }

    convertToCelsius(32);  // Freezing point
    convertToCelsius(212); // Boiling point
   
console.log("================================================================================")

// Using toFixed() to format to 2 decimal places
console.log("Using toFixed() to format to 2 decimal places");
let price = 10.567;
console.log(price.toFixed(2));  // "10.57" (rounds to 2 decimal places as a string)

console.log("================================================================================")

// Math.round() method for whole numbers
console.log("Math.round() method for whole numbers");
// rouds a number to the nearest integer, with .5 rounding up
console.log(Math.round(10.2));  // 10
console.log(Math.round(10.8));  // 11

console.log("================================================================================")


// Math.round() trick for specific decimal places
console.log("Math.round() trick for specific decimal places");
// To round to 2 decimal places: multiply by 100, round, then divide by 100
let tipAmount = 7.567;
let roundedTip = Math.round(tipAmount * 100) / 100;
console.log(roundedTip);  // 7.57
// To round to 3 decimal places: multiply by 1000, round, then divide by 1000
let seconds = 3.14159;
let roundedSeconds = Math.round(seconds * 1000) / 1000;
console.log(roundedSeconds); //3.142

console.log("================================================================================")

console.log("Common money formatting techniques");
//For currency values, typically use 2 decimal places and add the currency symbol as a prefix.
// Format as currency with toFixed()
let amount = 49.9999;
let formatted = "$" + amount.toFixed(2);
console.log(formatted);  // "$50.00"

console.log("================================================================================")

console.log("Handling Different Currencies");
//The same technique works for any currency symbol - just change the symbol at the beginning of the string.
// Handling different currencies
let euroAmount = 29.95;
let euroFormatted = "€" + euroAmount.toFixed(2);
console.log(euroFormatted);  // "€29.95"