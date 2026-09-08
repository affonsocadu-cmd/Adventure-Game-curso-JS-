// basic conditional statements

 // condition: is the user logged in ?
let userLoggedIn = true;
let numberOfItens = 9;

if (!userLoggedIn) {
    // Se NÃO estiver logado
    console.log("Please log in to proceed to checkout.");
} else if (numberOfItens === 0) {
    // Se estiver logado, mas o carrinho estiver VAZIO (0 itens)
    console.log("Your cart is empty! Please add some items to your cart before checking out.");
} else {
    // Se estiver logado E tiver itens no carrinho
    console.log("Welcome back! Proceeding to checkout with " + numberOfItens + " items.");
}

console.log("====================================================================================")

let menuSelection = 2; 

// menu selection example:
switch (menuSelection) {
    case 1:
        console.log("Selected: View Profile");
        break;
    case 2:
        console.log("Selected: Account Settings");
        break;
    case 3:
        console.log("Selected: Logout");
        break;
    default:
        console.log("Invalid selection. Please choose a valid option.");
        break;
}

console.log("====================================================================================")

// basic "for" loop structure
/*
for (initialization; condition; increment){
    //code to be executed for each iteration
}
*/
for (let i = 1; i <= 5; i++) {
    console.log('count: ' + i)
}

console.log("====================================================================================")
// basic while loop structure
/*
initialization;
whie(condition) {
    //code to be executed for each iteration increment
}
*/
console.log("starting tasks with the while loop")

let taskNumber = 1;
while (taskNumber <= 5) {
    console.log("Task " + taskNumber + ' completed');
    taskNumber++; //dont forget to include this or we will have an infinite loop
}
console.log("All tasks Completed!")