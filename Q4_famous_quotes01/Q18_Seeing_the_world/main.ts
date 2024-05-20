//   =========== Question no 18 ============


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

 let favourit_places:string[] = ["Italy ","Turky ","Dobai ","Paris ","China "];


// • Print your array in its original order.

console.log(`Original oder: ${favourit_places}`);
    
// • Print your array in alphabetical order without modifying the actual list.

console.log("Alphabetical order: "  + [...favourit_places].sort());


// • Show that your array is still in its original order by printing it.

console.log(`Original oder: ${favourit_places}`);

// • Print array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse alphabetical order: "  + [...favourit_places].sort().reverse() );


// • array is still in its original order by printing it again.

console.log(`Original oder: ${favourit_places}`);

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log("Reverse the order: "  + favourit_places.reverse());


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to original order: "  + favourit_places.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order has changed: "  + favourit_places.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Reverse alphabetical order: "  + favourit_places.sort().reverse());