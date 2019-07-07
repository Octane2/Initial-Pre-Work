/* For this module, I learned how to use the let keyword in a function to
ensure that a variable stays within the correct scope, meaning that if a
variable of the same name is declared globally, it will also impact the
function using the same variable name.  This can alter the output of the
function. Ideally, it is considered good programming practice to not re-use
variable names. */

function checkScope() {
"use strict";

  // First part of the solution for Part 2.
  let i = "function scope";
  if (true) {

    //Second part of the solution for Part 2.
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
