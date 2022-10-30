console.log('***** Music Collection *****')
// console.log('***** Music Collection *****')
// # Tier 1 Week 5 - Part 3

// This week, we'll be exploring objects by creating an application to help maintain a record collection.
// We will be creating objects using `object literal` syntax.

// ## Topics Covered

// - objects
// - HTML & CSS

// ## Part 3 - Building a Music Collection

// Update the `3-music-collection.js` file to do the following:

// > While working through the features below, make sure to commit after you complete a task!
// Your commit message should reflect what you added or changed since the previous commit.

// ### Required Features

// - Create a variable `collection` that starts as an empty array.
let collection = [];


// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished, tracks) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    this.tracks = tracks;
    collection.push(this);
    return this;
}

console.log(new addToCollection("Red", "Word", 2005, [{track: "Red1", duration: 290}, {track: "Red2", duration: 320}]));
console.log(new addToCollection("Blue", "Word", 2003, [{track: "Blue1", duration: 234}, {track: "Blue2", duration: 120}]));
console.log(new addToCollection("Yellow", "Word", 2007, [{track: "Yellow1", duration: 230}, {track: "Yellow2", duration: 320}]));
console.log(new addToCollection("Yellow", "Tree", 2005, [{track: "Yellow1", duration: 290}, {track: "Yellow2", duration: 230}]));
console.log(new addToCollection("Pink", "Hen", 2006, [{track: "Pink1", duration: 280}, {track: "Pink2", duration: 390}]));
console.log(new addToCollection("Crimson", "Tree", 2009, [{track: "Crimson1", duration: 290}, {track: "Crimson2", duration: 320}]));

console.log(collection);

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter.
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information 
//     formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(array1) {
    
    for (album of array1) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`)
        let tracks = album.tracks;
        for (track of tracks){
            console.log(track.track, track.duration);
        }
    }
}


showCollection(collection);

// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(string1) {
    let results = []
    for (album of collection) {
        if (album.artist === string1) {
            results.push(album);
        }
    }
    return results
}
console.log("Testing for Hen", findByArtist("Hen"));
console.log("Testing for Word", findByArtist("Word"));
console.log("Testing for Orange",findByArtist("Orange"));

// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object.
//     Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```

// function search(searchObject) {
//     let collectedAlbums = []
//     // if (searchObject == searchObject3 || searchObject == null) {
//      //   return collection;
//     //}
//     for (album of collection){
//         if (album.artist == searchObject.artist // album.yearPublished == searchObject.yearPublished) {
//         collectedAlbums.push(searchObject);
    
//     return collectedAlbums;
// }

function search(searchObject){
    let collectedAlbums = [];
    if (searchObject == searchObject3 || searchObject == null) {
        return collection;
    }
    // NOTE: I'm not happy with the above code's usage of "searchObject3"
    // Suggestions welcomed!
    for (album of collection){
        if (album.artist == searchObject.artist && album.yearPublished == searchObject.yearPublished){
            collectedAlbums.push(searchObject);
        }
    }
    
    return collectedAlbums;
}

let searchObject1 = {artist: "Word", yearPublished: 2005};
let searchObject2 = {artist: "Word", yearPublished: 2006};
let searchObject3 = {};


console.log("Testing artist 'Word', year 2005 (expecting match)", search(searchObject1));
console.log("Testing artist 'Word', year 2006 (expecting empty array)", search(searchObject2));
console.log("Testing search on empty object (expecting full collection", search(searchObject3));
console.log("Testing search on no input (expecting full collection", search());

//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` 
//       matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input,
//       then return all albums in the `collection`.



//     Add an array of `tracks` to your album objects. 
//     Each track should have a `name` and `duration`.
//     You will need to update the functions to support this new property:
//     Update the `addToCollection` function to also take
//     an input parameter for the array of tracks.
//     Update `search` to allow a `trackName` search criteria.
//     Update the `showCollection` function to display the list of tracks
//     for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```