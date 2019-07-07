/* For this function, I learned how to use the spread operator to unpack the
contents of an existing array into a new array.*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";

//My solution for Part 11.

  arr2 = [...arr1]; // change this line

//-----------------------

})();
console.log(arr2);
