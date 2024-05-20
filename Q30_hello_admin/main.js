"use strict";
// ================ Question no 30 ===============
Object.defineProperty(exports, "__esModule", { value: true });
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// ================ Answer no 30 ===============
// array of username...
let usernames = ['Admin', 'Rizwan', 'Baber Azam', 'Hussan', 'Haris rauf'];
// foreach loop....
usernames.forEach(greeting_user => {
    if (greeting_user === 'Admin') {
        console.log(`Hello ${greeting_user}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${greeting_user}, thank you for logging in again.`);
    }
});
