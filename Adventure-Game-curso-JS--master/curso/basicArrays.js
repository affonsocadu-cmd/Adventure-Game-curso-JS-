// Basic Arrays

// Basic array creation
console.log("Array Basics: ");

// empty array
let emptyArray = [];
console.log("Empty array: ", emptyArray);

// array with items
let fruitsArray = ['apple', 'banana', 'oragne'];
console.log("Fruits array: ", fruitsArray)

// array with mixed data types
let mixedArray = [42, 'hello', true, null];
console.log("Mixed data types array: ", mixedArray);

// array length
console.log("Fruits array length: ", fruitsArray.length) ;

// using toString() method
console.log("Fruits as string: ", fruitsArray.toString());

// arrays are zero-indexed
console.log("First fruit: ",fruitsArray[0]);

console.log("================================================================")

// Create a shopping list array
let shoppingList = ["milk", "bread", "eggs", "apples"];
// Show entire list
console.log("My Shopping List:");
console.log(shoppingList);
// Show first item
console.log("First item to buy: " + shoppingList[0]);
// Show last item
console.log("Last item to buy: " + shoppingList[3]);
// Show how many items are in the list
console.log("Number of items: " + shoppingList.length);

console.log("================================================================")

// Create a todo list array
let todoList = ["Study JavaScript", "Go shopping", "Call mom"];
// Add a new task using push
todoList.push("Clean room");
// Change an existing task
todoList[1] = "Buy groceries";
// Show the updated list
console.log("My Todo List:");
console.log(todoList);

console.log("================================================================")

// Arrays have numbered positions starting at 0
let colors = ["red", "green", "blue", "yellow", "purple"];
// First position is always 0
console.log("First color:", colors[0]);  // red

// Last position is length - 
console.log("Last color:", colors[colors.length - 1]);  // purple

// Finding the middle position requires division and rounding down
let middlePosition = Math.floor(colors.length / 2);
console.log("Middle position:", middlePosition);  // 2
console.log("Middle color:", colors[middlePosition]);  // blue

console.log("================================================================")

// Math.floor() rounds down to the nearest integer
console.log(Math.floor(3.7));  // 3
console.log(Math.floor(5.1));  // 5

// Math.ceil() rounds up to the nearest integer
console.log(Math.ceil(3.2));   // 4
console.log(Math.ceil(5.9));   // 6

// Math.round() rounds to the nearest integer
console.log(Math.round(3.2));  // 3
console.log(Math.round(3.8));  // 4

// Format a number to show exactly 2 decimal places
let price = 10.9876;
console.log(price.toFixed(2));  // "10.99" (as a string)

console.log("================================================================")

console.log("My Shopping List:");
console.log(shoppingList);
console.log("Second item: " + shoppingList[1]);
console.log("Third item: " + shoppingList[2]);
console.log("Number of items: " + shoppingList.length);

console.log("================================================================")

let todooList = ["Study JavaScript", "Go shopping", "Call mom"];
todooList.push("Clean room");
todooList.push("Do laundry");
todooList[2] = "Call mom tomorrow";
console.log("Updated Todo List:");
console.log(todooList);
let removedTask = todoList.pop();
console.log("Removed task: " + removedTask);
console.log("Final list:", todooList);

console.log("================================================================")

let testScores = [85, 92, 78, 95, 88];
console.log("Number of scores: " + testScores.length);
console.log("First score: " + testScores[0]);
console.log("Last score: " + testScores[testScores.length - 1]);
testScores.push(90);
console.log("Score Summary:");
console.log("All scores:", testScores);
console.log("Number of scores:", testScores.length);
console.log("Middle score:", testScores[Math.floor(testScores.length / 2)]);

console.log("================================================================")

let prices = [10.99, 5.99, 3.99, 8.99];
let total = 0;
let affordableCount = 0;
console.log("All Prices:");
for (let i = 0; i < prices.length; i++) {
    console.log("Item " + (i + 1) + ": $" + prices[i]);
    total += prices[i];
    
    if (prices[i] < 7.00) {
        affordableCount++;
    }
}
console.log("\nSummary:");
console.log("Total: $" + total.toFixed(2));
console.log("Affordable items (under $7.00):", affordableCount);