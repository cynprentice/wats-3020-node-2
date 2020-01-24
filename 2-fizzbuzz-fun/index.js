/*
Description:an adaptation of the FizzBuzz algorithm but with a function.
Input: a postive number
Output: numbers along with fizz, buzz, or fizz buzz
Usage: "Please run this program with a number to find all the integers divisible by 3 or 5 counting up to the entered number
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(n) {
  // TODO provide for tests for divisible for 3,5, and 15 to return desired output
  if ((n % 3 == 0) && (n % 5 == 0)) {
    //console.log(`${n} fizzbuzz`);
    return "fizzbuzz";
  } else if (n % 3 == 0) {
    return "fizz";

  } else if (n % 5 == 0) {
    return "buzz";
  } else {
    return "";
    console.log(`${n}`);
  }
}

// TODO check if input is not an integer
if (isNaN(input)) {

  console.log("Please run this program with a positive number to find all the integers divisible by 3 or 5 counting up to the entered number")
}
else {
  // TODO provide info to for loop to iterate from 1 to value of input
  for (i = 1; i <= input; i++) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}


