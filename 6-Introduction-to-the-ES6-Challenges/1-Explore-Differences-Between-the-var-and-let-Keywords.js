/* For this module, I learned about the keyword, let, which prevents accidental
overwrite of a variable.  I also learned about Strict Mode, which is there to
catch programming mistakes and unsafe programming actions. */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
