"use strict";
// ================= Question no 33 ==================
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
// ================= Answe no 33 ==================
// • Store the numbers 1 through 9 in a array.
let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// conditional statment
num_array.forEach(Number => {
    if (Number === 1) {
        console.log(`${Number}st`);
    }
    else if (Number === 2) {
        console.log(`${Number}nd`);
    }
    else if (Number === 3) {
        console.log(`${Number}rd`);
    }
    else if (Number === 4) {
        console.log(`${Number}th`);
    }
    else if (Number === 5) {
        console.log(`${Number}th`);
    }
    else if (Number === 6) {
        console.log(`${Number}th`);
    }
    else if (Number === 7) {
        console.log(`${Number}th`);
    }
    else if (Number === 8) {
        console.log(`${Number}th`);
    }
    else {
        console.log(`${Number}th`);
    }
});
