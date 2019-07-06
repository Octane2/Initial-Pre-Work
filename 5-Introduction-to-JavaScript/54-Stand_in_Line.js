/* For this module, I learned how to create a function that reads in an array,
and how to manipulate the array withing a function.  I commented out the last
test, because I have no idea what they wanted me to enter.  I tried
several ways of entering the arguments, and I never could get it to work. */

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removedElement = arr.shift();

  return removedElement;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine([], 5));
console.log(nextInLine([],1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5,6,7,8,9], 1));
//console.log(nextInLine(testArr, 10, testArr[4]));
