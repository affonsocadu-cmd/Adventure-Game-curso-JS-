//anotações "inline" começam com duas barras (//)

/* anotações "blocks" começam e terminam 
com barra + asterísco (/*)
e pode ser anotados 
em mais de uma linha */

/* 
Adventure Game
This game willl be a text-based adventure game where the player will be able 
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the 
story will change based on their decisions
*/

const readline = require("readline-sync");


// display the game title
console.log("Welcome to the Adventure Game!");

// add a welcome message for the players
console.log("Prepare yourself for an epic journey!");

// Creating basic profile information
let playerName = "";
// get player name using readline-sync
playerName = readline.question("What is your name, adventurer? ");
// create variable for player stats
let playerHealth = 100;
let currentLocation = "Village";
let playerGold = 20; //Starting gold
let gameRunning = true;
let inventory = [];
let weaponDamage = 0

// display welcome message and starting stats
console.log(`Welcome, ${playerName}!`);
console.log(`Health: ${playerHealth}`);
console.log(`Location: ${currentLocation}`);
console.log('Your initial Weapon Damage is: ' + weaponDamage);
console.log('========= hint =========')
console.log("When you buy your sword, weapon damage will increase to 10!")
console.log()

console.log("============================================================")
console.log("                     The Dragon's Quest                     ")
console.log("============================================================")
console.log("Your quest: Defeat the dragon in the mountains!");

playerName = readline.question("What is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerHealth + " health and " + playerGold + " gold.");
//setup a simple moster defense value
let monsterDefense = 5;
console.log("Monsters can withsand some damage in combat!")