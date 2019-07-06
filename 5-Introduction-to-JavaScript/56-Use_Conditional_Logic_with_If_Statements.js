/* For this module, I learned how to develope if statements in JavaScript, and
how they are structured around boolean values to determine which return
value of the if-statement is to be returned. */

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
