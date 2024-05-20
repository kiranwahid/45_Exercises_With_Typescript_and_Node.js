"use strict";
//  ============= Question no 16 ==============
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
//  ============= Answer no 16 ==============
//  ========== Guset List ===========
let guest_list = ["Babar Azam", "Naseem Sha", "Shaeen Sha"];
//  name of the guest who can’t make the dinner.....
let absent_guest = "Naseem Sha";
let new_guest = "Waseem junior";
// name of the new person you are inviting...
// using push method...
guest_list[1] = new_guest;
//print message...
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, I am very pleasure to invite you on dinner. \n\n Thank You! \n\n`);
}
console.log(`\n  So sad Mr ${absent_guest} Could not join us on dinner!!! \n \n Thank You! \n`);
//fount big table....
console.log(`\n Great News! we just found a bigger dinner table \n`);
//  Add one new guest to the beginning of your array.
// unshift add an element in the beginning of array.....
guest_list.unshift("Sarfaraz");
//  Add one new guest to the middle of your array.
// splice add an element in the middle of array.....
guest_list.splice(2, 0, "Muhammad Rizwan");
//  add one new guest to the end of your list.
// push add an element in the end of array.....
guest_list.push("Abdullah Shafique");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, I am very pleasure to invite you on dinner. \n\n Thank You! \n\n`);
}
