"use strict";
// ================ Question no 36 =================
// T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
// ================ Answer no 36 =================
function make_shirt(size, message) {
    console.log(`You selected ${size} size shirt with ${message} print  on shirt`);
}
make_shirt("large", '"Think outside the box"');
make_shirt("small", '"Good vibes only"');
make_shirt("medium", '"Art is freedom"');
