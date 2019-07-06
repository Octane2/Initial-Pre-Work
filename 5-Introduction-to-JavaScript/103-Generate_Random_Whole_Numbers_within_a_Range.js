/* For this module, I learned how to generate random numbers within a specified
range of numbners. */

// Example
function ourRandomRange(ourMin, ourMax) {

 return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

 return Math.floor( Math.random() * ( myMax - myMin + 1 ) ) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
console.log(myRandom);
