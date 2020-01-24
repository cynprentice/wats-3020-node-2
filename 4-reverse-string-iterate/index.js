
/*
Description:a program that takes a string as input and reverses it by iterating through the string, character by character.
Input: string   
Output: string reversed
Usage: Enter a string to return the string reversed
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

function reverseWithFullIteration(str) {
    let result = '';
    // TODO loop from end of str (str.length-1) to beginning
    for (i = str.length - 1; i >= 0; i--) {
        //console.log("result is " + result + " i is " + i);
        result = result + str[i];

    }
    return result;
}

function reverseWithHalfIteration(str) {
    let halfString = "";
    let result = "";
    j = 0;
    // STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
    for (i = str.length - 1; i >= j; i--) {

        result = result + str[i];
        //console.log("result is " + result + " i is " + i)
        if (i != j) {
            halfString = str[j] + halfString;
           // console.log("halfString is " + halfString + " j is " + j)
        }
        j++
    }
    return result + halfString;
}


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (typeof (input) !== "string") {
    console.log("Enter a string to return the string reversed");
}
else {
    // use functions to reverse string
    console.log("result with full iteration", reverseWithFullIteration(input));
    console.log("result with half iteration", reverseWithHalfIteration(input));
    

}




