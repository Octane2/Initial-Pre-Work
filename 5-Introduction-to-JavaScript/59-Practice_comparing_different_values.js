/* For this module, in addition to the review of equality operators, I learned
that the type of variable or value can be returned using typeof operator. */

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10"));
console.log(compareEquality("20",20));
