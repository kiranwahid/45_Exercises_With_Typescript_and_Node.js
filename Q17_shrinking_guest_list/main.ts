
//  =========== Question no 17 ============

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.




//  =========== Answer no 17 ============


let guest_list:string[] = ["Babar Azam", "Naseem Sha", "Shaeen Sha"];

 //  name of the guest who can’t make the dinner.....

let absent_guest:string = "Naseem Sha";
let new_guest:string = "Waseem junior"
// name of the new person you are inviting...

// using push method...

guest_list[1] = new_guest



//print message...

// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Dear ${guest_list[i]}, I am very pleasure to invite you on dinner. \n\n Thank You! \n\n`)
// }


console.log(`\n  So sad Mr ${absent_guest} Could not join us on dinner!!! \n \n Thank You! \n`)

 // Print new message to inform found big table....

 console.log(`\n Great News! we just found a bigger dinner table \n`)

//  Add one new guest to the beginning of your array.

// unshift add an element in the beginning of array.....

guest_list.unshift("Sarfaraz");



//  Add one new guest to the middle of your array.

// splice add an element in the middle of array.....

 guest_list.splice(2,0, "Muhammad Rizwan");

//  add one new guest to the end of your list.
 
// push add an element in the end of array.....

guest_list.push("Abdullah Shafique");



for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, I am very pleasure to invite you on dinner. \n\n Thank You! \n\n`)

}
// print messagr.......

console.log(`\n Sorry new dinner table won’t arrive in time for the dinner so only two people are invited on dinner \n`);

//Remove guests from your list............

while(guest_list.length > 2){
let remove_guest:string | undefined= guest_list.pop();
   
console.log(`So sorry Mr ${remove_guest}, you are'nt invited on dinner,`);
}

//inform two people still invited.........

for (let i = 0; i < guest_list.length; i++) {
    console.log(`\n Mr ${guest_list[i]}, you are still invited for the dinner \n \n Thank You! \n \n `);
    
    
}

// Remove the last two names from your list, so you have an empty list........

guest_list.splice(0,2);

console.log(guest_list);
