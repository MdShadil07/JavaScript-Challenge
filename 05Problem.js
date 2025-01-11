//*___________________________
//* Sort an Array
//*___________________________

//? Write a funtion to sort an array of numbers in an ascending order.

// Example usages:
// Console.log(sortAscending([5,3,10,8])); //output : [3,5,8,10]

//todo Requirements:

//? The funtion should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order
//? The original array should remain unchanged.
//? You are not allowed to use the built-in-sort() method.

const sortAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortAscending([5, 3, 10, 8]));
