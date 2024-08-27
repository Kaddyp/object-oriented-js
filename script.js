function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'just logged in');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'just logged out'); 
}

var userOne = new User('kaddy@gmail.com','Kaddy');
var userTwo = new User('diyan@gmail.com','Diyan');

console.log(userOne);
userTwo.login();