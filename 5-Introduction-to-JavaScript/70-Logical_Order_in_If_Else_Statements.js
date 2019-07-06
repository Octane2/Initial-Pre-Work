/* For this module, I learned about order of evaluation in else if statements,
and how the order can significantly change the output. Logical errors are the
most difficult to track down, because they do not prevent the code from
compiling. */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
console.log(orderMyLogic(7));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));
console.log(orderMyLogic(4));
