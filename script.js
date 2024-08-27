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

function Admin(...args) {
    //console.log(args);
    User.apply(this, args); //inherit properties form User
    this.role = 'Super admin';
}
//Inherit function
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
}

var userOne = new User('kaddy@gmail.com','Kaddy');
var userTwo = new User('diyan@gmail.com','Diyan');
var admin = new Admin('admin@gmail.com','Admin');
var users = [userOne, userTwo, admin];

//admin.login();
admin.deleteUser(users[1]);
console.log(users);