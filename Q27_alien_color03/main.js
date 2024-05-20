// =============== Question no 27 =================
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// =============== Question no 27 =================
// Declear variable....
var AlienColor = 'green';
// conditional statment....
// version 01...
if (AlienColor === 'green') {
    console.log("Alien Color is green: The player earned 5 points ");
}
else if (AlienColor === 'yellow') {
    console.log("Alien Color is yellow: The player earned 10 points ");
}
else if (AlienColor === 'red') {
    console.log("Alien Color is red: The player earned 15 points ");
}
else {
    console.log("Invalid color");
}
// version 02...
AlienColor = 'yellow';
if (AlienColor === 'green') {
    console.log("Alien Color is green: The player earned 5 points ");
}
else if (AlienColor === 'yellow') {
    console.log("Alien Color is yellow: The player earned 10 points ");
}
else if (AlienColor === 'red') {
    console.log("Alien Color is red: The player earned 15 points ");
}
else {
    console.log("Invalid color");
}
// version 03...
AlienColor = 'red';
if (AlienColor === 'green') {
    console.log("Alien Color is green: The player earned 5 points ");
}
else if (AlienColor === 'yellow') {
    console.log("Alien Color is yellow: The player earned 10 points ");
}
else if (AlienColor === 'red') {
    console.log("Alien Color is red: The player earned 15 points ");
}
else {
    console.log("Invalid color");
}
AlienColor = 'red';
if (AlienColor === 'green') {
    console.log("Alien Color is green: The player earned 5 points ");
}
else if (AlienColor === 'yellow') {
    console.log("Alien Color is yellow: The player earned 10 points ");
}
else if (AlienColor !== 'red') {
    console.log("Alien Color is red: The player earned 15 points ");
}
else {
    console.log("Invalid color");
}
