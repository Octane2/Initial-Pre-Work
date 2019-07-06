/* For this module, I learned how to replace a series of chained if else {
  statements with a switch structure.  Using a switch statement simplifies the
  code, and makes it less likely to forget any cases.  Switch statements also
  improve code readability. */

  function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch ( val ) {

    case "bob":
      answer = "Marley";
    break;

    case 42:
      answer = "The Answer";
    break;

    case 1:
      answer = "There is no #1";
    break;

    case 99:
      answer = "Missed me by this much!";
    break;

    case 7:
      answer = "Ate Nine";
    break;

  }
  
  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
