// //if statement
// const isUserLoggedIn= true;
// if(2!=3) {
//     console.log("User is logged in");
// }

// const score = 85;
// if (score<100) {
//     const power ="flying";
//     console.log(`User power: ${power}`)
// }


const balance = 1000;
// if (balance > 500) console.log("You can withdraw money"),
//     console.log("You cannot withdraw money");

// if (balance < 500) {
//     console.log("Greter than 500");
// }
// else if(balance<1000){
//     console.log("Between 500 and 1000");
// }
// else{
//     console.log("Less than 500");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromBrowser = true;
const loggedInFromMobile = false;

if(userLoggedIn && debitCard && 2==2){
    console.log("You can make a purchase");
}

if(loggedInFromBrowser || loggedInFromMobile){
    console.log("You can make a purchase from browser or mobile");
}

