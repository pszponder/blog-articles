# Data Structures in JS: Arrays

## Data Structures

This series of blogs will discuss various data structures in the context of JavaScript. Data structures are different ways to organize data to solve different types of problems.

## What is an Array?

Officially, arrays are "list-like objects". An array is a data structure that stores an **ordered** collection of values.

### Properties of an Array:

- The array holds a collection of values
  - This allows us to organize multiple values and assign them to one variable
- The values stored in an array are ordered, meaning each of the items is associated with a specific index
  - Array indexes in JS start with 0
- The array can hold ANY type of value (number, string, boolean, NaN, undefined, other arrays, objects...)
- In JS, the array can hold ANY combination of data types at the same time
- The array data structure is stored in one contiguous block of memory
  - If an element in an array needs to be added, then the whole array may need to be moved to another location in memory to retain the continuous block of memory with the expanded array

Example of an array containing multiple data types:

```js
let myArray = [
  1,
  2,
  "water",
  true,
  NaN,
  { name: "Bob" },
  0,
  undefined,
  [100, 200, 300],
];
```

## How to Create an Array

There are 2 common ways of creating an array, using bracket notation and by calling the `Array()` constructor function.

**NOTE:** Each item in the array is referred to as an "element".

### Creating an Array Literal Using Square Brackets

This is the most common way of creating an array. To create an array using square brackets, define a variable and on the right hand side of the assignment operator, add all of the values you wish to hold in the array in between square brackets, separated by commas.

Example of creating an array using square brackets:

```js
let myArray = [1, 2, 3, 4, 5];
let myArray2 = ["Hi", "my", "name", "is", "Bob"];
let myArray3 = [1, false, "word"];

let favoriteNum = 9;
let myArray4 = [1, 2, 3, favoriteNum];
```

**NOTE:** If the word "array literal" caught you off guard, take a look at the MDN resources I referenced in the resources section on literals and array literals. Just know that from a practical and functional standpoint, array literals and arrays are the same thing.

### Creating an Array using the Array() Constructor Function

To create an array using the `Array()` constructor, set a variable equal to `new Array()` with the list of values you want to store in the array inside the brackets of the `Array()` constructor.

Example of creating arrays using the `Array()` constructor method:

```js
let myArray = new Array(1, 2, 3, 4, 5);
```

## How to Access Elements in an Array

In order to access an element in an array, we add a set of square brackets to the end of the array name and inside the brackets, add the index value of the array element we want to access. Remember that array indexes start at 0 in JS so the first element in the array will be at the 0th index.

Example of how accessing array elements in JS works:

```js
// Define an array literal using bracket notation
let myArray = ["A", "B", "C"];

// access the individual elements in the array and log them
// to the console
console.log(myArray[0]); // "A"
console.log(myArray[1]); // "B"
console.log(myArray[2]); // "C"

// undefined (there isn't a 4th element in the array)
console.log(myArray[3]);
```

## How to Reassign Elements in an Array

In order to reassign or modify elements in an array, we access the current value of the desired element in the array and use the assignment operator to change its value.

In order to change a value of an element in an array, you need to first know what its index is.

```js
// Define an array literal using bracket notation
let myArray = ["A", "B", "C"];
console.log(myArray); // ["A", "B", "C"]

// Access the 1st element of the array
// and reassign it to a new value
myArray[0] = 1;
console.log(myArray); // [1, "B", "C"]

// Access the 2nd element of the array
// and reassign it to a new value
myArray[1] = 2;
console.log(myArray); // [1, 2, "C"]

// Access the 3rd element of the array
// and reassign it to a new value
myArray[2] = 3;
console.log(myArray); // [1, 2, 3]
```

## Adding and Removing Elements at the End of an Array

There are different strategies and methods (functions) that can be used to add or remove elements in an array depending on where they are located within the array.

**NOTE:** From a computational standpoint, it is easiest and least intensive to remove or add elements to the end of an array. It takes the most time to remove or add an element to the front of the array because the indexes of all the elements in the array then need to be changed to account for the removal or addition of a new element. In the case of adding and removing elements from the back of the array, none of the other elements in the array need to change their index.

### Using square brackets to append to the end of the array

You can use the reassignment process to actually add to the end of the array.

**NOTE:** It is HIGHLY recommended to use the .push() method instead of this way to append elements to the end of the array. Appending values to the end of the array by reassignment at a non-existing current index can lead to some weird results.

```js
// Define an array literal using bracket notation
let myArray = ["A", "B", "C"];
console.log(myArray); // ["A", "B", "C"]

myArray[3] = "D";
console.log(myArray); // ["A", "B", "C", "D"]

myArray[5] = "E";
console.log(myArray);
// [ 'A', 'B', 'C', 'D', <1 empty item>, 'E' ] (from node)
// ["A", "B", "C", empty × 2, "E"] (from web console)
```

### .push() to append an element to the end of an array

Use the `push()` method to append 1 or more elements to the end of an array.

The `push()` method will also return the new length of the array.

```js
// Define an array literal using bracket notation
let myArray = ["A", "B", "C"];
console.log(myArray); // ["A", "B", "C"]

// Append the "D" string to the end of the array
myArray.push("D");
console.log(myArray); // ["A", "B", "C", "D"]

// Append the "E" string to the end of the array
myArray.push("E");
console.log(myArray); // ["A", "B", "C", "D", "E"]

// Append multiple values to the end of the array
myArray.push("X", "Y", "Z");
// ['A', 'B', 'C','D', 'E', 'X','Y', 'Z']
console.log(myArray);

// console.log the return value of the push() method
// (the length of the new array)
console.log(myArray.push(1)); // 9
console.log(myArray.push(2)); // 10
console.log(myArray.push(3)); // 11
console.log(myArray.push(4, 5, 6)); // 14
```

### .pop() to remove an element from the end of an array

The `pop()` method removes the **LAST** element in the array and returns the value of the element which was removed.

Unlike the `push()` method which allows you to ADD multiple elements to the end of the array, you can only remove ONE element (the last one) using the `push()` method.

```js
// Define an array literal using bracket notation
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]

// Remove the last element in the array
myArray.pop();
console.log(myArray); // [1, 2, 3, 4]

// Remove the last element in the array
myArray.pop();
console.log(myArray); // [1, 2, 3]

// Remove the last element in the array and print out its value
console.log(myArray.pop()); // 3
console.log(myArray); // [1, 2]
```

## Adding and Removing Elements at the Beginning of an Array

### .shift() to remove an item from the start of an array

The `shift()` method removes the first element in an array and returns the value of the returned element.

```js
let myArray = ["A", "B", "C"];
console.log(myArray); // ["A", "B", "C"]

// Remove the 1st element in the array
myArray.shift();
console.log(myArray); // ["B", "C"]

// Remove the 1st element in the array and log its value
console.log(myArray.shift()); // B
console.log(myArray); // ["C"]
```

### .unshift() to add an item to the beginning of an array

The `unshift()` method adds one (or more) elements to the beginning of the array and returns the new length of the array.

```js
let myArray = ["A", "B", "C"];
console.log(myArray); // ["A", "B", "C"]

// Add an element to the beginning of the array
myArray.unshift("Z");
console.log(myArray); // ["Z", "A", "B", "C"]

// Add multiple elements to the beginning of the array
myArray.unshift(1, 2, 3);
console.log(myArray); // [1, 2, 3, "Z", "A", "B", "C"]

// Review the new length of the array after use of the unshift method
console.log(myArray.unshift(99)); // 8
console.log(myArray); // [99, 1, 2, 3, "Z", "A", "B", "C"];
```

## Adding and Removing Elements inside an Array

## How to Obtain the Index of an Element in an Array

There will be occasions where you will want to search an array and identify the index of a specific element. You can do this using the `indexOf()` method. Note that if there are multiple instances of the same value in the array, the `indexOf()` method will only return the index of the 1st iteration. If `indexOf()` does not find the specified value in the array, it will return `-1`.

```js
// Initialize an array
let myArray = ["One", "Two", "Three", "Four"];

// Return the index of "Two" in the array
console.log(myArray.indexOf("Two")); // 1

// Return the index of "Four" in the array
console.log(myArray.indexOf("Four")); // 3

// Return the index of "Five" in the array
// Note that "Five" is not in the array
console.log(myArray.indexOf("Five")); // -1
```

The `indexOf()` method optionally accepts a 2nd parameter which specifies the starting index for the search. The below example taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) shows how to use this optional parameter to create an array which contains the indicies of all of the instances of the variable "a" in a given array.

```js
// Initialize an empty array indicies which will
// hold all of the indicies of the values of "a"
// found in the "array" variable
var indices = [];

// Create an array with multiple instances of "a"
var array = ["a", "b", "a", "c", "a", "d"];

// Initialize the element in the array variable which
// will be searched for using the indexOf() method
var element = "a";

// Initialize the idx variable which holds the index
// of the 1st occurance of "element" in "array"
var idx = array.indexOf(element);

// Run this loop while idx is not -1
while (idx != -1) {
  // push the current value stored in idx to the indicies
  // array
  indices.push(idx);

  // Update the value of idx with a new value
  // based on the indexOf() method but starting from the
  // next index up of the previous "element" in "array"
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

## How to Sort Arrays

## Reversing Arrays

## Looping through Arrays

Several methods exist for looping through the elements in an array. This is a common practice used to access and perform operations on elements in an array.

### for loops

Use the iterator in the for loop to access all (or some) of the elements in an array. In order for this to call the `length` method on the array to obtain the length of the array and use it as the end condition in the for loop.

Typically, we will use the for loop to access each element in the array from start to finish. However, we can also use the flexibility of the for loop to iterate over only specific values in the array (ex. iterate every other value or iterate from the end of the loop to the start of the loop)

```js
// Initialize an array
let myArray = ["One", "Two", "Three", "Four"];

// Iterate over every value in the array
// from start to finish and print it to the console
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
/*
One
Two
Three
Four
*/

// Iterate over every odd value in the array
// and print it to the console
for (let i = 0; i < myArray.length; i += 2) {
  console.log(myArray[i]);
}
/*
One
Three
*/

// Iterate over every even value in the array
// and print it to the console
for (let i = 1; i < myArray.length; i += 2) {
  console.log(myArray[i]);
}
/*
Two
Four
*/

// Iterate over every value in the array
// starting with the last value and ending in the first
// value, print the result to the console
for (let i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}
/*
Four
Three
Two
One
*/
```

### for...of loop

The `for...of` loop works very similar to the standard `for` loop implementation. Instead of using an iterator that then needs to be used to access the element of the array using brackets, each iteration of the `for...of` extracts a consecutive element in the array as the value for that iteration.

```js
// Initialize an array
let myArray = ["One", "Two", "Three", "Four"];

// In the for...of condition, during each iteration,
// number, which is the iterator, takes on the value
// of the next element in the specified array
// (myArray in this case)
// So number will take on the value of "One" in the 1st iteration
// Then in the second iteration, it will become "Two",
// followed by "Three", and "Four"
for (let number of myArray) {
  console.log(number);
}
/*
One
Two
Three
Four
*/
```

**NOTE:** While we will not discuss this here, the `for...of` loop can be used to iterate over any JS type which is considered iterable. Other examples of iterable types in JS (other than arrays) include strings, Map, and Set.

### forEach() method

## Common Array Methods

### .length()

### .map()

### .filter()

### .find()

### .slice()

### .splice()

### .indexOf()

### .sort()

## Resources

- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [MDN - Literal](https://developer.mozilla.org/en-US/docs/Glossary/Literal)
- [MDN - Array Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [MDN - Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN - Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [MDN - Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [MDN - Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [MDN - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN - Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN - Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Javascript.Info - Arrays](https://javascript.info/array)
- [Working with Arrays in JavaScript](https://www.digitalocean.com/community/tutorial_series/working-with-arrays-in-javascript)

```

```
