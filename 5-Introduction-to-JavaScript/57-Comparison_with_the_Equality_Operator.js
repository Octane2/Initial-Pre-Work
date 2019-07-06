/* For this module, I learned how to use the equality operator to test for
equality. In addition, I learned that The equality operator is defined by ==
and not = in JavaScript.  The equality operator is structured around boolean
values. */

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
console.log(testEqual(12));
