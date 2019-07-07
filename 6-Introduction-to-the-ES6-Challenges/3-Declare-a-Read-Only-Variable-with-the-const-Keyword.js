/* For this module, I learned about the variable type const, which sets the
variable to read-only, and prevents accidental re-assignment.  I also learned
that const variable names are all in caps. */

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
