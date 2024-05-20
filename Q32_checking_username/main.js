"use strict";
// =============== Question no 32 =================
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// =============== Answer no 32 =================
//  array of current_user...
let current_users = ['RaHeel', 'AzLan', 'TaHa', 'ZaIn', 'ShaMeer'];
// array of new_user...
let new_users = ['Sarim', 'ShaMeer', 'Sufyan', 'Azlan', 'Haris'];
new_users.forEach(newUser => {
    let lowercase = newUser.toLocaleLowerCase();
    if (current_users.map(c_user => c_user.toLocaleLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUser} is not available. Please enter a different username.`);
    }
    else {
        console.log(`The username ${newUser} is available`);
    }
});
