/* For this module, I learned that arrays that are assigned to a const variable
are still mutable.  However, another array cannot be assigned to the same
variable.*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
 s[0] = 2;
 s[1] = 5;
 s[2] = 7;
  // change code above this line
}
editInPlace();

console.log(s)
