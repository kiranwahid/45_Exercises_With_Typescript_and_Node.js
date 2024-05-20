// ================== Question no 37 ===================

// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

// ================== Answer no 37 ===================

function make_shirt(size:string = "Large",message:string = "I love TypeScript") {
    console.log(`You selected ${size} size shirt with the message ${message}`);
 
}

make_shirt()
make_shirt("Medium","I love TypeScript")
make_shirt("Small","I love C#")

