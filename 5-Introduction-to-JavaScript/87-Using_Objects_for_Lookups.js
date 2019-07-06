/* For this module, I learned how to use JavaScript objects for looking up
data.  This is ideal for situations where the input values are limited to a
specific range of values. JavaScript objects in this form can be used in place
of switch statements and if-else chains. */

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {

  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
  };

  result = lookup[val];
  // Only change code above this line
  return result;
}


// Change this value to test
console.log(phoneticLookup("charlie"));

 
