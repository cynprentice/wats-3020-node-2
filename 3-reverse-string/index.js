
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
if (typeof (input) !== "string") {
    console.log("Enter a string to return the string reversed")
}
else {
    // uses string methods to reverse the string
    console.time("String Function Reverse");
    console.log(input.split('').reverse().join(''));
    console.timeEnd("String Function Reverse");
}




