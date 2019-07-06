/* For this module, I learned how to use the less than operator in JavaScript.
I also learned that like the greater than operator, the less than operator
also performs data type conversions when comparing two numbers. */

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
console.log(testLessThan(0));
console.log(testLessThan(24));
console.log(testLessThan(25));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log(testLessThan(99));
