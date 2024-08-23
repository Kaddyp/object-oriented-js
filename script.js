var user = {
    email: 'diyan@gmail.com',
    name: 'Diyan',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

user.login();
user.logout();

var prop = 'name'

// user.email = 'kalyani@gmail.com';
// user['email'] = 'kalyani@gmail.com';
// user[prop] = 'Kaddy';

// console.log(user);

user.age = 25;
user.logInfo = function(){
    console.log(this.name, this.age, this.email);
};

user.logInfo();
user.login();
user.logout();