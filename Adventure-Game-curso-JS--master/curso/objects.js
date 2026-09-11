/// create user object with methods
let user ={
    userName: "Ouyeah",
    email: "ouyeah@example.com",
    password: "damn123",
    lastLogin: new Date("2026-09-11"),


    //method to update the email
    updateEmail: function (newEmail){
        if (newEmail.includes('@') && newEmail.includes('.')){
            this.email = newEmail;
            console.log(`Email updated to: ${this.email}`);
            return true;
            
        } else{
            console.log("Invalid email format.");
            return false;
        }
    }
}

console.log("Initial email ", user.email);
user.updateEmail("oouyeahh@exammple.com");
console.log("After update:", user.email)

console.log("==============================================")

// Create a user profile object
let userProfile = {
        name: "Sarah Johnson",
        age: 25,
        email: "sarah.j@email.com",
        isStudent: true
    };
    console.log("Name: " + userProfile.name);
    console.log("Age: " + userProfile.age);
    console.log("Email: " + userProfile.email);
    console.log("Student Status: " + userProfile.isStudent);
    console.log(userProfile.name + " is " + userProfile.age + " years old.");
    
console.log("==============================================")

// Create a product object
let product = {
        name: "Laptop",
        price: 799.99,
        inStock: true
    };
    product.name = "Gaming Laptop";
    product.model = "XPS-15";
    product.inStock = false;
    product.color = "Silver";
    product.warranty = "2 years";
    console.log("Product Details:");
    console.log("Name: " + product.name);
    console.log("Model: " + product.model);
    console.log("Price: $" + product.price);
    console.log("In Stock: " + product.inStock);
    console.log("Color: " + product.color);
    console.log("Warranty: " + product.warranty);
    
console.log("==============================================")

let book = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        isAvailable: true,
        pages: 180,
        genre: "Fiction",
        rating: 4.5
    };
    console.log("=== Book Information ===");
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Year: " + book.year);
    console.log("Genre: " + book.genre);
    console.log("Pages: " + book.pages);
    console.log("Rating: " + book.rating + "/5");
    console.log("Available: " + book.isAvailable);
    
console.log("==============================================")

let library = [
        {title: "1984", author: "George Orwell", isCheckedOut: false},
        {title: "The Hobbit", author: "J.R.R. Tolkien", isCheckedOut: true},
        {title: "Dune", author: "Frank Herbert", isCheckedOut: false}
    ];
    function displayAllBooks() {
        console.log("=== Library Catalog ===");
        for (let i = 0; i < library.length; i++) {
            console.log((i + 1) + ". " + library[i].title + " by " + library[i].author);
            console.log("   Status: " + (library[i].isCheckedOut ? "Checked Out" : "Available"));
        }
    }
    function findBooksByAuthor(authorName) {
        console.log("Books by " + authorName + ":");
        for (let i = 0; i < library.length; i++) {
            if (library[i].author === authorName) {
                console.log("- " + library[i].title);
            }
        }
    }
    function listAvailableBooks() {
        console.log("Available Books:");
        for (let i = 0; i < library.length; i++) {
            if (!library[i].isCheckedOut) {
                console.log("- " + library[i].title + " by " + library[i].author);
            }
        }
    }
    displayAllBooks();
    findBooksByAuthor("George Orwell");
    listAvailableBooks();
    