/* For this module, I learned how to chain else-if statements in JavaScript
to evaluate a value against more than one test condition. */

function testSize(num) {
  // Only change code below this line
  if ( num < 5 ) {
    return "Tiny";

  } else if ( num < 10 ) {
    return "Small";

  } else if ( num < 15 ) {
    return "Medium";

  } else if ( num < 20 ) {
    return "Large";

  } else {
    return "Huge";
  }

  // Only change code above this line
}

// Change this value to test
console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));
