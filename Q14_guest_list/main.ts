
// ====== Question no 14 ======

// . Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


// ====== Answer no 14 ======

//  ============ Makin Guest List ===========

let guest_list: string[] = ["Babar Azam", "Shaheen Sha","Naseem Sha"];

// ========invite each guest=========

let invitation:string = "I am very pleasure to invite you on dinner" ;

guest_list.forEach(guset_name => {
    console.log(`Dear ${guset_name}, ${invitation}`);
    
});

