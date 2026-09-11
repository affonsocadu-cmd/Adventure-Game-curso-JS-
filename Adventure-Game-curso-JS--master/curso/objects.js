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