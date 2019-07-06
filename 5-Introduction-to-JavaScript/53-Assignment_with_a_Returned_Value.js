/* For this module, I learned how to assign the output of a function to a
variable.  This is done with the following code variableName = function(args).*/

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
