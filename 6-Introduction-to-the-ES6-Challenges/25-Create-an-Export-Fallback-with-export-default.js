/* For this module, I learned how to export a function in which only one value
needs to be exported from a file.*/


// Following the example, this is what I have.  It does not pass.
"use strict";
export default function subtract(x,y) {
    return x - y;
}

//This passes though.
"use strict";
export default function subtract(x,y) {return x - y;}
