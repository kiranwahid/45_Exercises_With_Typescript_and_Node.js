"use strict";
// =============== Question no 45 ==================
Object.defineProperty(exports, "__esModule", { value: true });
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
// =============== Answer no 45 ==================
// function that stores information about a car in a Object.
function store_car_info(manufacturer, modelName, ...extraOption) {
    let carInformation = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInformation;
}
;
let result = store_car_info('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(result);
