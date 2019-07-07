/* For this module, I had to do some extra research.  I learned that the
parseInt() function will turn a decimal number into its corresponding integer.
To ensure that the number being read in is an integer, its remainder is 0 when
divided with itself.  I also learned how to use the map() function to map the
integer values to a new array. */

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter( ( number ) => number > 0 && number %
  parseInt(number) === 0 ).map( (number) => Math.pow(number, 2) );

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
