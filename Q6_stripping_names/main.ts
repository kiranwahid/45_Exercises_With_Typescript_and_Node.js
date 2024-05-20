// ====== Question no 06 ======

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// ====== Answer no 06 ======

//person name with whitespace.....
let person_name:string = "\t \n Allama Iqbal \t \n";
console.log(`person name whitespace ${person_name}`);

//striping the white spaces.
let personName:string = person_name.trim();
console.log(`Stripped Name  ${personName}`);
