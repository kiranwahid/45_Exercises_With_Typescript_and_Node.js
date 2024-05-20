//   =========== Question no 18 ============
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//  =========== Answer no 18 ============
//  Seeing the World: Think of at least five places in the world you’d like to visit.
// Making array[] of five places.....
var favourit_places = ["Italy ", "Turky ", "Dobai ", "Paris ", "China "];
// • Print your array in its original order.
console.log("Original oder: ".concat(favourit_places));
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order: " + __spreadArray([], favourit_places, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("Original oder: ".concat(favourit_places));
// • Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order: " + __spreadArray([], favourit_places, true).sort().reverse());
// • array is still in its original order by printing it again.
console.log("Original oder: ".concat(favourit_places));
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order: " + favourit_places.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to original order: " + favourit_places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order has changed: " + favourit_places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order: " + favourit_places.sort().reverse());
