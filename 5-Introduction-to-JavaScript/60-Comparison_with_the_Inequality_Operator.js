/* For this module, I learned how to implement the inequality operator, !=, and
that it will convert data types to determine equality between two values. */

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testNotEqual(10));
console.log(testNotEqual(99));
console.log(testNotEqual("99"));
console.log(testNotEqual(12));
console.log(testNotEqual("12"));
console.log(testNotEqual("bob"));
