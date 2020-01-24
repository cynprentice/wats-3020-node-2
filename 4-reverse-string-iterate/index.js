
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
    // STRETCH reverse the string but only iterates over half of the input string.
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

function reverseWithFullIterationForOf(str) {
    let result = [];
    if (typeof (str) === "string") {
        let strArr = str.split("");
        for (character of strArr) {
            result.unshift(character);
        }
    }
    return result.join("");
}


//test that it is a string
if (typeof (input) !== "string") {
    console.log("Enter a string to return the string reversed");
}
else {
    // use functions to reverse string
    console.time("Full Iteration");
    console.log("result with full iteration", reverseWithFullIteration(input));
    console.timeEnd("Full Iteration");
    console.time("Half Iteration");
    console.log("result with half iteration", reverseWithHalfIteration(input));
    console.timeEnd("Half Iteration");
    console.time("For Of Full Iteration");
    console.log("result with Full For Of iteration", reverseWithFullIterationForOf(input));
    console.timeEnd("For Of Full Iteration");
}




