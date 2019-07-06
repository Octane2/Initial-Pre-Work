/* For this module, I learned about an equality operator that I have never seen
before, the strict equality operator, which is defined as ===.  I also learned
that strict equality does not perform type conversions. */

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict(10));
console.log(testStrict(7));
console.log(testStrict("7"));
