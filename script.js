class User {
    //constructor function to create a new User object
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this; //return this to allow method chaining
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this; //return this to allow method chaining
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'updated score to', this.score);
        return this; //return this to allow method chaining
    }
}

var userOne = new User('kaddy@gmail.com','Kaddy');
var userTwo = new User('diyan@gmail.com','Diyan');


//userOne.login().logout(); //Error because return this is required then we can use method Chaining
//userOne.logout();
//userTwo.logout();
// This is call method chaining
userOne.login().updateScore().updateScore().logout();