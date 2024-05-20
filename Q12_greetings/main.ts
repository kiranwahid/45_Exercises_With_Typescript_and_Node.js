// ====== Question no 12 ======

import { log } from "console";

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.

// ====== Answer no 12 ======

// store person name in array......
let personName:string[] = ["Hafsa", "Shahrbano","Dua","Noorbano","Kinza","Muskan"];

//simple message...
let message:string = "hope you are doing well."
 
// for each loop...
personName.forEach(greeting => {
    console.log(`Hi, ${greeting}! ${message} `)
});
