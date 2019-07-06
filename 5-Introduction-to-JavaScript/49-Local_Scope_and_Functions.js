/* For this module, I learned about a variable with local scope (aka a private
variable), which is a variable that is defined within a function, and is only
visible to that function. I also learned that if you call a function with a
private variable as an output, an error will be returned. */

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Test";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
