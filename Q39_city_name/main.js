"use strict";
// =============== Question no 39 ===============
// City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
// =============== QAnswer no 39 ===============
let city_country = (city, country) => {
    let result = `${city} , ${country}`;
    return result;
};
console.log(city_country('"Lahore"', '"Pakistan"'));
console.log(city_country('"Istanbul"', '"Turkey"'));
console.log(city_country('"Cairo"', '"Egypt"'));
