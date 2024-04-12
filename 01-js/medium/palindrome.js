/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// returns true for strings with punctuation marks

function isPalindrome(str) {
  let cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
