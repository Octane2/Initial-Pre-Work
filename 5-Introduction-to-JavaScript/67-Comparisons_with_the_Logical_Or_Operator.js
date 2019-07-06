/* For this module, I learned how to use the OR (||) operator in JavaScript.
As in the case with the logical AND operator, using two if-statements to test
two values is very inefficient. */

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";

  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(20));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));
