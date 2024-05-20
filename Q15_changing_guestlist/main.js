"use strict";
//  ========== Question no 15 ===========
Object.defineProperty(exports, "__esModule", { value: true });
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
//  ========== Answer no 15 ===========
// =========== Making Guest List ===========
let guest_list = ["Babar Azam", "Shaheen Sha", "Naseem Sha"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, I am very pleasure to invite you on dinner`);
}
//  name of the guest who can’t make the dinner.....
let absent_guest = guest_list.splice(1, 1)[0];
console.log(`\n  So sad Mr ${absent_guest} Could not join us on dinner!!! \n`);
// name of the new person you are inviting...
// using push method...
guest_list.push("Waseem junior");
//print message...
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, I am very pleasure to invite you on dinner`);
}
