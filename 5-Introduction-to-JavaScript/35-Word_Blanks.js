/* For this module, I learned how to call variables that were passed
into a function, and concatenate them into a complete sentence.*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myNoun + " with a " + myAdjective + " raw-hide bone " + myVerb + " into the yard, and " + myAdverb + " buried it.";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
