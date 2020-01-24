
/*
Description: a program that takes a string as input and reverses it using JavaScript string methods.
Input: string
Output: string reversed
Usage: Enter a string to return the string reversed
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit

if (typeof(input) !== "string") {
    console.log ("Enter a string to return the string reversed")
}
else {
    // uses string methods to reverse the string
    console.log(input.split('').reverse().join(''));
}




