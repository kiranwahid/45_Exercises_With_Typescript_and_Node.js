// ================ Question no 26 ================
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.


// ================ Answer no 26 ================

// define varaiable here..
let alienColor:string = 'green';

// conditional statment...

if (alienColor === 'green') {
    console.log(`Alien color is green: the player just earned 5 points for shooting the alien`);
    
}else{
    console.log(' the player just earned 10 points');
    
}

alienColor = 'blue'

if (alienColor === 'green') {
    console.log(`Alien color is green: the player just earned 5 points for shooting the alien`);
    
}else{
    console.log(`Alien color isn't green the player just earned 10 points`);
    
}