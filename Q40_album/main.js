"use strict";
// =============== Question no 40 ==================
// Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
// =============== Answer no 40 ==================
function make_album(artist_name, title, tracks) {
    let music_album = {
        artist_name: artist_name,
        title: title,
    };
    if (tracks !== undefined) {
        music_album.tracks = tracks;
    }
    return music_album;
}
console.log(make_album('Artis 01: Travis Poter', 'Album-title 01: Bring It Back'));
console.log(make_album('Artist 02: Fergie', 'Album-title 02: Feel Alive '));
console.log(make_album('Artist 03: Timbaland', 'Album-title 03: Hands In The Air', 9));
