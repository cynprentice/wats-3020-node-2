/*
Description: a program that counts from 1 to a given integer, printing out fizz if the number is divisble by 3, buzz if it is divisible by 5, and fizzbuzz if it is divisible by both 3 and 5.
Input: an integer
Output: numbers along with fizz, buzz, or fizz buzz
Usage: "Please run this program with a number to find all the integers divisible by 3 or 5 counting up to the entered number
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

// test that input is a number and exit with error

if (isNaN(input)) {

  console.log("Please run this program with a positive number to find all the integers divisible by 3 or 5 counting up to the entered number")
}
else {
  // iterate from 1 to the value of input

  for (i = 1; i <= input; i++) {

    // test if divisible by 3,5, and 15 to create desired output
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log(`${i} fizzbuzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`);
    }

  }
}


