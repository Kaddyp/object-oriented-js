function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'just logged in');       
    }
    this.logout = function(){
        console.log(this.email, 'just logged out');       
    }
}


var userOne = new User('kaddy@gmail.com','Kaddy');
var userTwo = new User('diyan@gmail.com','Diyan');

console.log(userOne);
userTwo.login();