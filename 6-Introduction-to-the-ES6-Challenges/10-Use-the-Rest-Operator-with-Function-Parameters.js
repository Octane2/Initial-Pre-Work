/* For this module, I had to do some extra research to determine what the rest
 and reduce() functions do in JavaScript.  The .reduce() function returns a sum
 of the values that are read into the array.*/

 const sum = (function() {
  "use strict";

//My solution for Part 10.

  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);

//-----------------------

  };
})();
console.log(sum(1, 2, 3)); // 6
