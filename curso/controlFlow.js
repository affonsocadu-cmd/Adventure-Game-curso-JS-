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