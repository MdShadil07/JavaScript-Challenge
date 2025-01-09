//*___________________________________________
//* Count Occurrence of character
//*___________________________________________

//! Task

//? Write a funtion called countChar that takes two parameters: a string and a character to count. The funtion should return the number of times specified character appears in the string.

//todo Constraints:

//? The funtion should be case-Sensitive.

//? The funtion should handle both lowercase and uppercase characters.

//? The characters parameters can be printable ASCII character (the funtion should accept any character that is part of the ASCII character set and is printable).

// function countChar(str, char) {
//   str = str.split(" ").join("");
//   SameSen = str.toLowerCase();
//   char = char.toLowerCase();
//   let count = 0;
//   for (i = 0; i < SameSen.length; i++) {
//     if (SameSen[i] === char.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countChar("mYYy name is shdilpppppppppp", "P"));

//Todo:   Another way:

const countChar = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();

  totalCount = str.split("").reduce((acc, curChar) => {
    if (curChar === char) {
      acc++;
    }
    return acc;
  }, 0);

  return totalCount;
};

console.log(countChar("mjjYYy najjjme is shdilppppjpppppp", "J"));
