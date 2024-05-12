const user = {
    username: 'Addon',
    loginCount: 8,
    signedIn: true,
    getUserDetail: function () {
        console.log(`Username ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());

function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new user('Addon', 12, true);
const userTwo = new user('Zee', 10, false);
console.log(userOne);