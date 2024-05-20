// ====== Question no 03 ======


// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// ====== Answer no 03 ======

let personName:string = "Kiran Wahid Hussain";

// print that person’s name in lowercase

let lowercase:string = personName.toLocaleLowerCase();
console.log(`LowerCase: ${lowercase}`);
// print that person’s name in  uppercase

let uppercase:string = personName.toUpperCase();

console.log(`UpperCase: ${uppercase}`);


// print that person’s name in  titlecase

let titleCaseName:string[] = personName.split(" ");
//console.log(titleCaseName));
let titleCase:string = " ";
for (let i = 0; i < titleCaseName.length; i++) {
titleCase += titleCaseName[i].charAt(0).toLocaleUpperCase() + titleCaseName[i].slice(1).toLocaleLowerCase() + " "
   
}

console.log(`TitleCase: ${titleCase}`);