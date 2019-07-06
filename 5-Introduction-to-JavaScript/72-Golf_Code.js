/* For this module, I learned how to use chained if else statements to
evaluate a value against multiple test conditions.  I also learned how to
implement simple equations into the chained if else statements, as well as
addressing an array of values for the return statements.*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey",
"Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if ( strokes == 1) {
    return names[0];

  } else if ( strokes <= ( par - 2) ) {
    return names[1];

  } else if ( strokes == ( par - 1 ) ) {
    return names[2];

  } else if ( strokes == par ) {
    return names[3];

  } else if ( strokes == ( par + 1 ) ) {
    return names[4];

  } else if ( strokes == ( par + 2 ) ) {
    return names[5];

  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(4, 2));
console.log(golfScore(4, 3));
