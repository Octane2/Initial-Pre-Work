/* For this module,  I learned a shortcut for comparing two values instead of
needing to use an if-else statement. */

function checkEqual(a, b) {

  return a == b ? "true" : "false";
}

console.log(checkEqual(1, 2));
console.log(checkEqual(1,1));
console.log(checkEqual(1,-1));
