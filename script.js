class User {
    //constructor function to create a new User object
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('kaddy@gmail.com','Kaddy');
var userTwo = new User('diyan@gmail.com','Diyan');

console.log(userOne); 

// the 'new' keyword 
// - creates a new empty object{}
// - sets the value of 'this' to be the new empty object
// - calls the constructor function or method