// ================ Question no 43 ===================
// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// ================ Answer no 43 ===================
// define a array of magician’s names...
var magicians_name = ['Harry Houdini', 'Criss angel', 'Derren Brown', 'Herry Ptter', 'Ricky Jay', 'Magus'];
var copymagicianArray = magicians_name.slice();
// define a function to print each magician's name....
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
function show_magicians(magicians) {
    magicians.forEach(function (name) {
        console.log(name);
    });
}
var copyArray = make_great(copymagicianArray);
console.log('\n This is original array');
show_magicians(magicians_name);
console.log('\n This is modified copy of the array');
show_magicians(copyArray);
