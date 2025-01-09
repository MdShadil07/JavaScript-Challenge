//*_________________________________

//* Programming Question: Longest word in a string

//*_________________________________

//? Q: Write a funtion to find the longest word that takes a string as input and return the longest word in a string. if there are multiple longest words, return the first one encountered.

//* Constraints:

//? the input string may contain alphabetic characters, digits, spaces and puntuation.

//? The input string is non-empty
//?The input string may contain multiple words separated by spaces.

//* Note:

//? if the input string is empty or contains only whitespace, the funtion should retun an false
//? The funtion should ignore leading and trailing whitespaces when determining the longest word

const findlongestword = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  strArr = str.split(" ");

  strArr.sort(); //sorting based on the unicode

  //another way
  // strArr.sort((a, b) => b.length - a.length);
  // return strArr[0];

  return strArr.reduce(
    (accu, Longesword) => (Longesword.length > accu.length ? Longesword : accu),
    ""
  );
};

console.log(findlongestword("This is simple code khkguftfycheck"));
