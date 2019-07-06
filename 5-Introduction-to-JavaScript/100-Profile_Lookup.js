/* NOTE: There seems to be an issue with this module.  When I click Run the
Tests it passes the first three tests, and fails the last three.  However,
when I run the last three tests individually using the console.log command,
they PASS with the correct result. I've gone over the code several times, and I
don't see what the issue is. I can't click Submit to go onto the next module,
so I will have to go the curriculum page, and select the next module to move
forward. I learned how to use a for loop to look up data in an array of
objects.*/

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for( var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];

            } else {

                return "No Such Property.";
            }

        }

    }

   return "No Such Contact.";

}
// Only change code above this line

// Change these values to test your function
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
