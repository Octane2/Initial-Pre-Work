/* For this module, I learned how to implement else-if statements in JavaScript.
Else-if statements improve efficiency, and help improve readability by
simplifying the code. */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";

//My added else if and else statements. 

  } else if (val < 5) {

    return "Smaller than 5";

  } else {

    return "Between 5 and 10";

  }

}


// Change this value to test
console.log(testElseIf(0));
console.log(testElseIf(5));
console.log(testElseIf(7));
console.log(testElseIf(10));
console.log(testElseIf(12));
