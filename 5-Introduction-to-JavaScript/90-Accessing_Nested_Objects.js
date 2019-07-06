/* For this module, I learned how to access nested objects.  In order to access
nested objects, I learned to use the dot and/or bracket notation to string the
sub-properties together. */

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
