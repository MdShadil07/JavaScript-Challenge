// Write a funtion to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization.

// console.log(isPalindrome("A man, a plan, a canal, panama"));

// console.log(isPalindrome("racecar")); //true
// console.log(isPalindrome("hello")); //false

//* ---------------------
//* Constraints:
//* ---------------------

// The input string may contain letters, digits, spaces, punctuation, and special characters.
// The funtion shoudl be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.

// Ignore spaces, punctuation, and special characters when determinging if a string is a plindrome.
// The function should return true if the input string is a palindrome and false otherwise.

const isPalindrome = (str) => {
  str = str.trim().replace(/\W/g, "").split(" ");
  str = str.join("").toLowerCase();
  const revStr = str.split("").reverse().join("");

  if (str === revStr) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false
console.log(isPalindrome("Madam, in Eden, I’m Adam")); // true
console.log(isPalindrome("Eva, can I see bees in a cave?")); // true
console.log(isPalindrome("Not a palindrome")); // false
console.log(isPalindrome('!@#$% ^&*()_+{}|:"<>?`~')); // false
