/* For this module, I learned how to test to see if an object has properties
associated with it.  This is done using the .hasOwnProperty() function, and the
function returns boolean values (true or false). */

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if ( myObj.hasOwnProperty(checkProp) == true ) {      return myObj[checkProp];

  } else {

    return "Not Found";

  }
}

// Test your code by modifying these values
checkObj("gift");
