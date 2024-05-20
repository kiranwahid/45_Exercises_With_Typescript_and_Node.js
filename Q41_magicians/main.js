"use strict";
// ================= Question no 41 ====================
// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// ================= Answer no 41 ====================
// define a array of magician’s names...
let magicians = ['Harry Houdini', 'Criss angel', 'Derren Brown', 'Ricky Jay', 'Magus'];
// define a function to print each magician's name....
function show_magicians(magicians_name) {
    for (let name of magicians_name) {
        console.log(name);
    }
}
show_magicians(magicians);
