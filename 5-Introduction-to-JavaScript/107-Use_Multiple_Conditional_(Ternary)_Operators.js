/* For this module, I learned that multiple conditions can be evaluated using
ternary operators that are chained together. */

function checkSign(num) {

  return ( num === 0 ) ? "zero" : ( num < 0 ) ? "negative" : "positive";

}

console.log(checkSign(10))
;
