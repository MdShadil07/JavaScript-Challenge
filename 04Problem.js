//*___________________________________
//* Triangle Name finder
//*___________________________________

//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangel. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// console.log(checkTriangleType(3, 3, 3)); //Equilateral

// console.log(checkTriangleType(3, 4, 5)); // isosceles

// console.log(checkTriangleType(5, 8, 6)); // scalene

//todo The function shoudl adhere to this following rules:

//? If all three sides are of equal length, return "equilateral"

//? If only two sides are of equal length, return "isosceles".

//? If all three sides have different lengths, return "Scalene".

const checkTriangleType = (side1, side2, side3) => {
  if (side1 === side2 && side2 === side3) return "equilateral";
  else if (side1 === side2 || side2 === side3 || side1 === side3)
    return "isosceles";
  else return "Scalene";
};

console.log(checkTriangleType(3, 8, 0));

console.log(checkTriangleType(3, 4, 4));

console.log(checkTriangleType(8, 8, 8));
