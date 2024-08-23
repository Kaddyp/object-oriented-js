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