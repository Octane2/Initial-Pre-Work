/* For this module, I learned that a local variable and a global variable can
be assigned with the same name.  This is BAD programming practice that can lead
to trouble, and is to be avoided. */

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
