// ====== Question no 13 ======
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// ====== Answer no 13 ======
// Array of favorit transportation....
var favorite_transport = ["Car", "Motorcycle", "Van", "Aeroplane"];
// for of loop...
for (var _i = 0, favorite_transport_1 = favorite_transport; _i < favorite_transport_1.length; _i++) {
    var transportation = favorite_transport_1[_i];
    // Statment....
    console.log("\u201CI would like to own a ".concat(transportation, "\u201D"));
}
