/* For this module, I learned a quick way to set up an object that contains
fields, and how to populate those fields with object literals using a simple
arrow function.*/

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return (name, age, gender) => ({name, age, gender});

  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
