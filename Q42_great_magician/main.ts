// =============== Question no 42 ===============

// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


// =============== Answer no 42 ===============

// define a array of magician’s names...
let magicians_name:string[] = ['Harry Houdini','Criss angel','Derren Brown','Herry Ptter','Ricky Jay','Magus']


// define a function to print each magician's name....
function show_magicians(magicians:string[]){
    for (let name of magicians) {
        console.log(name);
      
    }
}

function make_great(magicians:string[]){
    return magicians.map(name => `The great ${name}`)
}

let great_magician = make_great(magicians_name)
show_magicians(great_magician)