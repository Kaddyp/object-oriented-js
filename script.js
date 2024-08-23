class User {
    //constructor function to create a new User object
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('kaddy@gmail.com','Kaddy');
var userTwo = new User('diyan@gmail.com','Diyan');

//console.log(userOne); 
//console.log(userTwo); 

userOne.login();
userTwo.logout();