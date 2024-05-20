"use strict";
// ================ Question no 44 =================
// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
// ================ Answer no 44 =================
function sandwich(Sandwiches_name) {
    console.log(" \n Makig sandwich with followin items");
    for (const sandWich_items of Sandwiches_name) {
        console.log(sandWich_items);
    }
    console.log('Enjoy your sandwich');
}
//Call the function three times, using a different number of arguments each time.
sandwich(['Bread', 'Egg', 'Mayo']);
sandwich(['Chicken', 'butter', 'Mayo', 'cheese']);
sandwich(['Beef', 'Tomato', 'Cheese', 'Mayo', 'Cheese']);
