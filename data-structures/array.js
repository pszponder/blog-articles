// Initialize an array
let myArray = ["a", "b", "c", "d"];
console.log(myArray); // ["a", "b", "c", "d"]

// Replace "b" in the array with 1
myArray.splice(1, 1, 1);
console.log(myArray); // ["a", 1, "c", "d"]

// Replace "d" in the array with 2 and 3
myArray.splice(3, 1, 2, 3);
console.log(myArray); // ["a", 1, "c", 2, 3]
