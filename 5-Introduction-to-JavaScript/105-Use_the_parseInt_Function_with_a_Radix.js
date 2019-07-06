/* For this module, I learned how to change the base of a number that is
presented as a string using the parseInt() function.  To change the base of the
number, the parseInt function must take two arguments, with the second argument
being the radix. */

function convertToInteger(str) {

return parseInt(str, 2);

}

console.log(convertToInteger("10011"));
console.log(convertToInteger("111001"));
console.log(convertToInteger("JamesBond"));
