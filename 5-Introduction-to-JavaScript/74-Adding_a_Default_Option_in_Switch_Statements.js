/* For this module, I learned how to add a default statement to a switch
statement.  The default statement acts as a catchall for values in which
there is no specific case for in the switch statement. */

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch ( val ) {

    case 'a':
      answer = "apple";
    break;

    case 'b':
      answer = "bird";
    break;

    case 'c':
      answer = "cat";
    break;

    default:
      answer = "stuff";
    break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(switchOfStuff(1));
console.log(switchOfStuff('a'));
console.log(switchOfStuff('b'));
console.log(switchOfStuff('c'));

 
