/* For this module, I learned how to use the Math.floor() operator to convert
a random decimal number to a whole random number.  A multiplier needs to be
added to ensure a range from 0 inclusive to the multiplier non-inclusive, in
this case, 10. */

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

var randomNumberBetween0and9 = Math.floor(Math.random() * 10 );

  return randomNumberBetween0and9;
}

console.log(randomWholeNum());
