/* For this module, I learned how to apply the decrement operator to a for-
loop. I also used j for my added code, using i again is not good programming
practice. */

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for ( var j = 9; j > 0; j -= 2 ) {
  myArray.push(j);
}

console.log(myArray);
