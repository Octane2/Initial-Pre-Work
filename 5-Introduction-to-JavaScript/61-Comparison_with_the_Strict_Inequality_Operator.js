/* For this module, I learned that similar to the equality operator, the
inequality operator, !=, has a "strict" version.  The strict inequality does
not perform type conversion. */

// Setup
function testStrictNotEqual(val) {
// Only Change Code Below this Line

if (val !== 17) {

// Only Change Code Above this Line

  return "Not Equal";
}
return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual("17"));
console.log(testStrictNotEqual(12));
console.log(testStrictNotEqual("bob"));
