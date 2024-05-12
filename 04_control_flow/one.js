//if statment

const isUserLoggedIn = true;

const temperature = 41;

// if (temperature === 41) {
//     console.log("Less than 50")
// }else{
//     console.log("Temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, !=, ==, ===, !==

// const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000;

// if (balance>500) console.log("test 1"), console.log("test 2");

// if (balance < 500) {
//     console.log("Balance is less than 500");
// } else if(balance < 750){
//     console.log("Balance is less than 750");
// } else if(balance < 900){
//     console.log("Balance is less than 900");
// } else {
//     console.log("Balance is less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy a course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}