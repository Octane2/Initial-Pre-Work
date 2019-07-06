/* For this module, I learned how the switch statement is implemented in
JavaScript.  The switch statement is faster than using else-if statements,
which improves the efficiency of the code.  The switch statement also has the
advantage of providing better readability.  Speaking of readability, I did some
formatting in terms of adding spacing in the code, and using indents.*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {

    case 1:
      answer = "alpha";
    break;

    case 2:
      answer = "beta";
    break;

    case 3:
      answer = "gamma";
    break;

    case 4:
      answer = "delta";
    break;

  }
  
  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(caseInSwitch(1));
