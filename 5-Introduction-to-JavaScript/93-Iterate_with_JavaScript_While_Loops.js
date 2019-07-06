/* For this module, I learned how to implement a while loop in JavaScript. It
is important to always initialize the index variable to 0 to remove any values
that may reside in the memory space that is allocated to the variable.  i++ is
necessary to advance the index until the condition is no longer true. */

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while ( i < 5 ) {
    myArray.push(i);
    i++;

}
console.log(myArray);
