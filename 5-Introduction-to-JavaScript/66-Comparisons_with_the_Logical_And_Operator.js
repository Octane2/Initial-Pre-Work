/* For this module, I learned how to use the AND (&&) operator in JavaScript.
Using two separate if-statements to test two values is inefficient, and it makes
more sense to use &&. */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";

  }

  // Only change code above this line
  return "No";
}

// Change this value to test
console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));
