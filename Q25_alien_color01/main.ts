// ============= Question no 25 ===============
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)


// ============= Answer no 25 ===============

// Define variable..
//variable called alien_color and assign it a value of 'green'

let alien_color:string = 'green'
let point:string = ' the player just earned 5 points!'

// conditional statment....
// if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

if (alien_color === 'green' ) {
    console.log(`Hey! the alien_color is 'green' ${point}  `)
}
// fails. (The version that fails will have no output.)
else if(alien_color === 'yellow'){
    console.log(`So sad! You got fail.`);
    
}else{
    console.log(`beeter luck for next time`);
    
}


