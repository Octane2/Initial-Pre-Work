/* For this module, I learned how to iterate through the values stored in an
array using a for-loop, and how to put those values into a running total. */

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for ( var j = 0; j < myArr.length; j++ ) {
total += myArr[j];
}
console.log(total);
