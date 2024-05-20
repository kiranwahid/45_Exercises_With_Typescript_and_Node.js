"use strict";
// ================ Question no 31 =================
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// ================ Answer no 31 =================
// list of userName..
let userName = ['admin', 'Rizwan', 'Babar Azam', 'Hussan', 'Haris rauf'];
// conditional statment...
if (userName.length === 0) {
    console.log(`We need to find some users!`);
}
else {
    userName = [];
    console.log(`All user names have been removed: ${userName.length}`);
}
