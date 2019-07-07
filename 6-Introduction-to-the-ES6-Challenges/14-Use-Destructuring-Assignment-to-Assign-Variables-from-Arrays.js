/* For this module, I learned how to use the Destructuring Assignment to swap
values between two variables.  I made the mistake of using const as in the
example, and the tests wouldn't pass.  That is because the values were being
prevented from being changed. I removed const, and the code passed. */

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
