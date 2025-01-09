//*_________________________________________
//* Programming Question: Has tag Generator
//*__________________________________________

//? You are required to implement a funtion generatehash that generates a hash tag from a given input string the hash tag shoudl be constructed as follows:

//? The input string shoudl be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? if the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the funtion shoudl return false.

//? Otherwise , the funtion should return the generataed hash tag prefixed with #.

function hashGenerate(str) {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  } else {
    arr = str.trim().split(" ");

    const capitalized = arr.map((word) =>
      // word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      word.replace(word[0], word[0].toUpperCase())
    );
    arrRes = capitalized.join("");
    return `#${arrRes}`;
  }
}

console.log(hashGenerate("    this is hastag generator  "));
