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

class Admin extends User {
    deleteUser(user){
        users = users.filter(u =>{
            return u.email!== user.email;
        });
    }
}

var userOne = new User('kaddy@gmail.com','Kaddy');
var userTwo = new User('diyan@gmail.com','Diyan');
var admin = new Admin('admin@gmail.com', 'admin');


var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
console.log(users);
//userOne.deleteUser(); //Error only admin have right to delete user