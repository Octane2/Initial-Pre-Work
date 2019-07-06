/* For this module, I was left a bit confused, the details were severely
lacking.  I had to do some extra research to figure out the point behind
this module.  It turns out that it is to improve efficiency of the code.
*/ 

// Setup
function abTest(a, b) {
  // Only change code below this line

  if ( a < 0 || b < 0) {

  return undefined;

  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(2,2));
console.log(abTest(-2,2));
console.log(abTest(-2,2));
console.log(abTest(2,8));
console.log(abTest(3,3));
