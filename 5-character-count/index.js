/*
Description: a program that takes a string as input and counts how many of each character are in that string.
Input: string
Output: character counts of the string  
Usage: Enter a string to get a count of each character in the string
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

//test that it is a string
if (typeof (input) !== "string") {
  console.log("Enter a string to get a count of each character in the string")
}
else {

  let charCount = {};
  let characters = input.split("");
  //console.log("characters initialized as " + characters);


  for (let character of characters) {
    if (charCount[character]) {
      charCount[character]++;

    } else {
      charCount[character] = 1;
    }
    //console.log("charCount of " + character + " is " + charCount[character]);
  }
 // console.log("charCount is ")
 // console.log(charCount)

  let charArr = [];

  for (let character in charCount) {
    //  console.log("Looping through charCount character: " + character);
    let newElem = { char: character, count: charCount[character] };

    charArr.push(newElem);

  }
  //console.log("charArr is ")
  //console.log(charArr);
  
  
  //Sort alphabetically by character 
  
// console.log("charArr  after character alphabetization is ")
  charArr.sort(function(a, b){
    var x = a.char.toLowerCase();
    var y = b.char.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  
  charArr.sort(function (a, b) {
    return a.count - b.count
  })
  //console.log("charArr  after count sort is ")
 // console.log(charArr);

  for (let i = 0; i < charArr.length; i ++) {
    console.log(`${charArr[i].char}: ${charArr[i].count}`)

  }
  

}

