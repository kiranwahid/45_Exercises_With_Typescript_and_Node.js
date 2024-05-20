"use strict";
// ================ Question no 24 ================
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// ================ Answer no 24 ================
// declear variable....
let city = 'Karachi';
// • Tests for equality 
console.log(`Equality test with styring: ${city} is equal to Karachi`);
console.log(city === 'Karachi');
// • Tests for inequality
console.log(`Inequlity test with string: ${city} is not equal to Karachi`);
console.log(city !== 'Karachi');
// • Tests using the lower case function
let Country = 'PAKISTAN';
let lower_Case = Country.toLocaleLowerCase();
console.log("Lower Case Function", " PAKISTAN is eqal to pakistan", lower_Case === Country);
console.log("Lower Case Function", " PAKISTAN is not eqal to pakistan", lower_Case !== Country);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Numerical tests involving equality and inequality
let num1 = 10;
let num2 = 15;
console.log(`${num1}  is is  equl to 10 `);
console.log(num1 == 10);
console.log(`${num1} and ${num2} is  equl to `);
console.log(num1 == num2);
// greater than and less than
console.log(`${num1} is greater than ${num2}`);
console.log(num1 > num2);
console.log(`${num1} is less than ${num2}`);
console.log(num1 < num2);
//greater than or equal to, and less than or equal to
console.log(`${num1} is greater than and equal to ${num2}`);
console.log(num1 >= num2);
console.log(`${num1} is less than and equal to ${num2}`);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
console.log(`Tests with "and"(&) operators ${num1} is less than ${num2} and ${num2} is grater than ${num1}`);
console.log(num1 < num2 && num2 > num1);
console.log(`Test with And(&) operators ${num1} is greater than ${num2} and ${num2} is less than ${num1}`);
console.log(num1 > num2 && num2 < num1);
console.log(`Tests with "or" (||) operators`);
console.log(num1 > num2 || num1 < num2);
// • Test whether an item is in a array
// Array of city....
let City = ['Karachi', 'Islamabad', 'Lahore', 'Rawalpindi'];
console.log(` Lahore is  in the array`, City);
console.log(City.includes('Lahore'));
// • Test whether an item is not in a array
console.log(` Hydrabad in not in the array`, City);
console.log(City.includes('Hydrabad'));
