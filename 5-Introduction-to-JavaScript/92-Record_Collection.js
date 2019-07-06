/* For this module, I learned how to work with objects in a more complex
situation.  I also learned how to break down a more complex problem into a
series of smaller problems which are easier to address. */

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  //Check to see if arguments for the function have values.
  if ( prop === "tracks" && value !== "" ) {

    //If prop exists, append the new value.
    if (collection[id][prop]) {
      collection[id][prop].push(value);

    //If prop does not exist, define and initialize array.
    } else  {

      collection[id][prop] = [value];
      
    }

  //If value is empty ("")
  } else if (value === "" ) {

    delete collection[id][prop];

  //If value is not empty (!==)
  } else {

    collection[id][prop] = value;

  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
