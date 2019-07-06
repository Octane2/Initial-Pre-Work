/* For this module, I learned how to implement an else statement in JavaScript.
Efficiency is the name of the game, and using two separate if-statements to
evaluate two values is not efficient. Using an else statement eliminates the
additional if-statement and simplfies the code. */

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }


 //My added else statement.

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));
