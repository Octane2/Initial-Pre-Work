/* For this module, I learned about the concept of setters and getters, and
how to use them to manipulate a newly formed class that hides the inner
workings from the user. */

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
  }

  get temperature () {
    return ( 5 / 9 ) * ( this._fahrenheit - 32 )
  }

  set temperature (celsius) {
    this._fahrenheit = celsius * 9.0 / 5 + 32;
  /* Alter code above this line */
  }
}

  return Thermostat;

}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
