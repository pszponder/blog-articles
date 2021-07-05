# Data Structures in JS: Arrays

# Data Structures:

This series of blogs will discuss various data structures in the context of JavaScript. Data structures are different ways to organize data to solve different types of problems.

# What is an Array?:

Officially, arrays are "list-like objects". An array is a data structure that stores an **ordered** collection of values.

## Properties of an Array:

- The array holds a collection of values
  - This allows us to organize multiple values and assign them to one variable
- The values stored in an array are ordered, meaning each of the items is associated with a specific index
  - Array indexes in JS start with 0
- The array can hold ANY type of value (number, string, boolean, NaN, undefined, other arrays, objects...)
- In JS, the array can hold ANY combination of data types at the same time
- The array data structure is stored in one contiguous block of memory
  - If an element in an array needs to be added, then the whole array may need to be moved to another location in memory to retain the continuous block of memory with the expanded array
- Arrays are mutable, which means that it's values can be accessed and changed at a later time (even if it is defined using a `const` keyword)

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

Example of the values of the array being accessed and changed after being declared with a `const` keyword. This demonstrates mutability:

```js
const myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

myArray[0] = 100;
console.log(myArray); // [ 100, 2, 3, 4, 5 ]
```

# How to Create an Array:

There are 2 common ways of creating an array, using bracket notation and by calling the `Array()` constructor function.

**NOTE:** Each item in the array is referred to as an "element".

## Creating an Array Literal Using Square Brackets:

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

## Creating an Array using the Array() Constructor Function:

To create an array using the `Array()` constructor, set a variable equal to `new Array()` with the list of values you want to store in the array inside the brackets of the `Array()` constructor.

Example of creating arrays using the `Array()` constructor method:

```js
let myArray = new Array(1, 2, 3, 4, 5);
```

# Obtaining the length of the array using the length property

In order to find out the length of an array, call the `length` property on the array using dot notation. This will return the length of the array which is the number of elements in the array.

```js
// Create an array
let myArray = ["a", "b", "c", "d"];

// Create a myArrayLength variable and assign it
// the value equal to the length of myArray
let myArrayLength = myArray.length;
console.log(myArrayLength); // 4
```

# How to Access Elements in an Array:

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

## Accessing multi-dimensional arrays

Multi-dimensional arrays are arrays that are nested inside other arrays. The most common multi-dimensional array is a 2D array which is an array which contains 1 or more arrays as elements. You can have as many nested arrays as you like (ex. 3D, 4D...).

To access a multi-dimensional array, use as many brackets as there are "dimensions" of the array.

```js
let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// log the 2nd sub-array in myArray
console.log(myArray[1]); // [4, 5, 6]

// take the 0th element in myArray ([1, 2, 3])
// and access the 0th element in that sub-array (1)
console.log(myArray[0][0]); // 1

// take the 3rd element in myArray ([7, 8, 9])
// and access the 3rd element in that sub-array (9)
console.log(myArray[2][2]); // 9
```

# How to Reassign Elements in an Array:

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

# Adding and Removing Elements at the End of an Array:

There are different strategies and methods (functions) that can be used to add or remove elements in an array depending on where they are located within the array.

**NOTE:** From a computational standpoint, it is easiest and least intensive to remove or add elements to the end of an array. It takes the most time to remove or add an element to the front of the array because the indexes of all the elements in the array then need to be changed to account for the removal or addition of a new element. In the case of adding and removing elements from the back of the array, none of the other elements in the array need to change their index.

## Using square brackets to append to the end of the array:

You can use the reassignment process to actually add to the end of the array.

**NOTE:** It is HIGHLY recommended to use the .push() method instead of this way to append elements to the end of the array.

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

## .push() to append an element to the end of an array:

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

## .pop() to remove an element from the end of an array:

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

# Adding and Removing Elements at the Beginning of an Array:

## .shift() to remove an item from the start of an array:

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

### .unshift() to add an item to the beginning of an array:

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

# Adding, Removing and Replacing Elements inside an Array using splice():

The `splice()` method can be used to add, remove and replace elements inside an array starting at a given index. For more information on the `splice()` method, review the [MDN documentation on splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

To help with explaining how to use `splice()`, review the syntax and explanation of the parameters below taken from the MDN web page:

```
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

- start: This is the index of the element in the array where you want to start either adding, removing or replacing elements in the array. Basically, it's your starting point.
- deleteCount: This is the number of elements you want to delete/remove to the right of the start index. If you do not want to remove any elements in the array, just add elements, set the value of deleteCount to `0`.
- item1, item2, ... itemN: This is the elements that will insert or replace into the array using the `splice()` method.

The `splice()` method returns an array containing all of the elements which were removed from the array which `splice()` operated on. If no elements were removed, an empty array will be returned.

## Adding Elements inside an Array using splice():

To add elements inside an array using the `splice()` method, you need to input the starting index, set the 2nd parameter (deleteCount) to 0, and then input as many elements as you wish to put inside the array using the splice method.

**NOTE:** If you want to add elements in between 2 existing elements in the array (say "a" and "b"), make sure your start index in the splice() method represents the current index of the element which will be to the right of the insertion ("b" in this example). This is because the way `splice()` works, it inserts at the start index. So whatever is currently at the start index gets pushed over to the right when performing element insertion.

```js
// Initialize an array
let myArray = ["a", "b", "c", "d"];
console.log(myArray); // ["a", "b", "c", "d"]

// add a number in between "c" and "d".
myArray.splice(3, 0, 1);
console.log(myArray); // ["a", "b", "c", 1, "d"]

// add 2 additional numbers in between 1 and "d"
myArray.splice(4, 0, 2, 3);
console.log(myArray); // ["a", "b", "c", 1, 2, 3, "d"]
```

## Removing Elements inside an Array using splice():

To remove elements inside an array using `splice()`, set the deleteCount parameter (2nd parameter) to 1 or more depending on how many elements you wish to remove. You still set the start index to where you wish to start your deletion from. Don't put in a third parameter if you only want to delete elements in an array using `splice()`.

```js
// Initialize an array
let myArray = ["a", "b", "c", "d"];
console.log(myArray); // ["a", "b", "c", "d"]

// Remove "b" from the array
myArray.splice(1, 1);
console.log(myArray); // ["a", "c", "d"]

// Remove "c" and "d" from the array
myArray.splice(1, 2);
console.log(myArray); // ["a"]
```

## Replacing Elements inside an Array using splice():

Replacing elements inside an array using the `splice()` method is essentially a combination of adding and removing elements in an array. Set the value of the start index to where you want to start your replacement, set the 2nd parameter (deleteCount) to how many elements you wish to remove from the current array. Then as a third+ parameter, add either one or more elements which you wish to insert into the array.

```js
// Initialize an array
let myArray = ["a", "b", "c", "d"];
console.log(myArray); // ["a", "b", "c", "d"]

// Replace "b" in the array with 1
myArray.splice(1, 1, 1);
console.log(myArray); // ["a", 1, "c", "d"]

// Replace "d" in the array with 2 and 3
myArray.splice(3, 1, 2, 3);
console.log(myArray); // ["a", 1, "c", 2, 3]
```

# How to Obtain the Index of an Element in an Array using .indexOf():

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

# How to Sort Arrays using the sort() method:

There is a built-in `sort()` method which can be used to sort the elements in an array.

By default, the `sort()` method iterates over every element in the array, converts the elements in the array to strings and then sorts them in ascending order. This may be fine if you are sorting strings but if you have numbers in the array for example, they will be converted to strings and sorted. The problem with this is that a number converted to a string is sorted by Unicode value, and not by the actual numerical value. So "100" will be sorted before "8" for example.

To properly sort an array of numbers using the `sort()` method, you need to provide it with a comparison function or condition. The comparison function accepts 2 arguments, representing the current element in the iteration as well as the next element in the iteration. Basically, the comparison function accepts 2 adjacent values (typically referred to as "a" and "b") or pairs of elements. If the comparison function returns a value that is greater than 0, then the 2nd element ("b") is sorted before the 1st element ("a"). If the comparison function returns a value <=0, then the current order of the 1st and 2nd element is preserved.

```js
// Define a comparison function that will be used
// to sort the array in ascending order
function compareAscending(a, b) {
  // if a > b, return 1
  // The sort() method will flip the order of a and b
  if (a > b) {
    return 1;
    // Do not flip the order of a and b otherwise
  } else {
    return -1;
  }
}

// Define a comparison function that will be used
// to sort the array in descending order
function compareDescending(a, b) {
  // if a < b, return 1
  // The sort() method will flip the order of a and b
  if (a < b) {
    return 1;
    // Do not flip the order of a and b otherwise
  } else {
    return -1;
  }
}

// Define an array with unsorted numbers
let unsorted = [5, 1, 7, 3, 10, 9, 2, 4, 6, 8];

// Test the sort() method without the use of comparison function
console.log("Using sort() method:");
console.log(unsorted.sort());

// Test the sort() method using the compareAscending function
console.log("Using sort() method with compareAscending:");
console.log(unsorted.sort((a, b) => compareAscending(a, b)));

// Test the sort() method using the compareDescending function
console.log("Using sort() method with compareDescending:");
console.log(unsorted.sort((a, b) => compareDescending(a, b)));
```

## sort() method shorthand for sorting arrays with numbers

There is a shorthand way to use arrow functions for the `sort()` method to help sort arrays with numbers. Instead of writing a comparison function with an if statement like we did in the above example, create a comparison function which accepts 2 inputs (a and b) and returns either the difference of `a - b` or `b-a`. Returning `a-b` will sort the array in ascending order while `b-a` will sort in descending order.

```js
// Define an array with unsorted numbers
let unsorted = [5, 1, 7, 3, 10, 9, 2, 4, 6, 8];

// Sort the unsorted array in ascending order
let sortedAscending = unsorted.sort((a, b) => a - b);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sortedAscending);

// Sort the unsorted array in descending order
let sortedDescending = unsorted.sort((a, b) => b - a);
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(sortedDescending);
```

# Reversing Arrays:

Use the `reverse()` method to reverse the order of the elements in an array.

```js
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]

// Reverse myArray
myArray.reverse();
console.log(myArray); // [ 5, 4, 3, 2, 1 ]

let myArray2 = ["Hi", "my", "name", "is", "joe"];
console.log(myArray2); // ["Hi", "my", "name", "is", "joe"]

// Reverse myArray2
myArray2.reverse();
console.log(myArray2); // [ 'joe', 'is', 'name', 'my', 'Hi' ]
```

# Looping through Arrays:

Several methods exist for looping through the elements in an array. This is a common practice used to access and perform operations on elements in an array.

## for loops:

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

## for...of loop:

The `for...of` loop works very similar to the standard `for` loop implementation. Instead of using an iterator that then needs to be used to access the element of the array using brackets, each iteration of the `for...of` extracts a consecutive element in the array as the value for that iteration.

The drawback to using `for...of` loops is that you cannot access the index of the element as you can with a standard `for` loop or the `forEach()` method (see below for more information on the `forEach()` method).

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

## forEach() method:

The `forEach()` calls a function for each element in the array starting from the 0th element and up to the last element in the array. The `forEach()` function optionally allows us to access the index of the current element being iterated.

The `forEach()` method does not modify in any way the current element, it returns `undefined`.

All you need to do to call the `forEach()` method on an array is to enter a name for the current element being iterated on (ex. "element") and use arrow-function notation to specify the function or block of code that you want to run for each iteration.

```js
// Initialize an array
let myArray = ["a", "b", "c", "d"];
console.log(myArray); // 4

// Use the forEach() method to log each
// element in the array to the console
myArray.forEach((element) => console.log(element));

// Initialize a new array
let myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2);

// Use the forEach() method to add 1 to each
// element in the array and log it to the console
// Notice that the original values of myArray2 are not changed by the forEach() loop
myArray2.forEach((element) => {
  element += 1;
  console.log(element);
});
console.log(myArray2);

// Use the forEach() method to add 1 to each
// element in the array and log it to the console
// This time, store element in a new array
// We can do this because the forEach() method allows us to optionally include the index of the current element

let newArray = [];

myArray2.forEach((element, i) => {
  element += 1;
  newArray[i] = element;
  console.log(element);
});
console.log(newArray);
```

**NOTE:** The function called by the forEach() method is referred to as a callback function because it is a function being called from within another function. If you want to find out more about callback functions, I recommend [this video made by Ania Kubow](https://www.youtube.com/watch?v=cNjIUSDnb9k) as it really helped me understand how callback functions work and how they are invoked.

# Creating a new array from modified elements of an existing array using .map():

The `map()` method is very similar to the `forEach()` method. The only difference between the 2 methods is that `map()` returns a new array while `forEach()` returns `undefined`. Neither method modifies the array they are called on by default.

The `map()` method takes a callback function that performs operations on each element in the array. `map()` then takes those modified values and stores them in a new array which is then returned by the `map` method.

```js
// Initialize a new array
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

// create a new array using the map method which holds the
//squared values of myArray
let square = myArray.map((element) => element ** 2);
console.log(square); // [ 1, 4, 9, 16, 25 ]

// create a new array using the map method which holds the
// cubed values of myArray
let cube = myArray.map((element) => {
  return element ** 3;
});
console.log(cube); // [ 1, 8, 27, 64, 125 ]
```

# How to remove unwanted elements in an array using .filter():

The `filter()` method uses a callback function or a code block to perform a conditional test on each element in the array. Any element that passes the conditional is then put in a new array by the `filter()` method. The `filter()` method returns the new array with the "filtered" elements. If none of the elements pass the conditional test, an empty array will be returned instead.

The code below shows you multiple different ways of implementing the `filter()` method:

```js
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create an array of even numbers
// from myArray
let even = myArray.filter((element) => element % 2 === 0);
console.log(even);

// Define the isOdd function
function isOdd(number) {
  if (number % 2 !== 0) {
    return number;
  }
}

// Use the filter method to create an array of odd elements
// from myArray by passing in the isOdd() callback function
let odd = myArray.filter((element) => isOdd(element));
console.log(odd);

// Use the filter method to create an array of multiples
// of 3 from myArray by passing in a code block
let multipleOf3 = myArray.filter((element) => {
  if (element % 3 === 0) {
    return element;
  }
});
console.log(multipleOf3);

// Use the filter method to create an array of multiples
// of 5 from myArray
let multipleOf5 = myArray.filter((element) => {
  return element % 5 === 0;
});
console.log(multipleOf5);
```

# How to find the first occurrence of a specific element using .find():

The `find()` method accepts a callback function which performs a test on each element and returns the value of the first element in the array which passes the test.

```js
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]

// Find the first element in the array which is greater than 3
let itemFound = myArray.find((element) => element > 3);
console.log(itemFound); // 4

// Set itemFound2 to the first element which is
// greater than 1 and less than 4 (should be 2)
let itemFound2 = myArray.find((element) => {
  if (element > 1 && element < 4) {
    return element;
  }
});
console.log(itemFound2); // 2
```

# Copying an array using .slice():

Use the `slice()` method to copy an array or a portion of the array.

- If called without any parameters, the `slice()` method will create a copy of the whole array.
- Enter a starting index as the first parameter of `slice()` if you want to make a copy of only a portion of the array, starting from the specified index.
- You can also control where you want stop `slice()` from copying by entering a 2nd parameter which is the stop index.`slice()` will copy everything up to **BUT NOT INCLUDING** the stop index.

```js
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]

// Create a copy of myArray
let myArrayCopy = myArray.slice();
console.log(myArrayCopy); // [1, 2, 3, 4, 5]

// Create a copy of the 2nd half of myArray
// starting from the 2nd index (# 3)
let myArray2ndHalf = myArray.slice(2);
console.log(myArray2ndHalf); // [3, 4, 5]

// Create a slice of myArray, only copying
// elements at index 2 through 4
let myArraySlice = myArray.slice(1, 4);
console.log(myArraySlice); // [2, 3, 4]
```

## How slice() works when copying objects inside an array:

When copying objects in an array using `slice()` a _reference_ to that object is copied. This means that if you change the value of that object in the original or the copied array, the change will be seen in both arrays since both of the arrays point to the same piece of data in memory due to how reference types work.

```js
let myArray = [["a"], { letter: "b" }, "c", "d", "e"];
let myArrayCopy = myArray.slice();

// [ [ 'a' ], { letter: 'b' }, 'c', 'd', 'e' ]
console.log("myArray:", myArray);

// [ [ 'a' ], { letter: 'b' }, 'c', 'd', 'e' ]
console.log("myArrayCopy:", myArrayCopy);

// Change values of the nested object and array in myArray
myArray[1].letter = "hello";
myArray[0][0] = 200;

// [ [ 200 ], { letter: 'hello' }, 'c', 'd', 'e' ]
console.log("myArray:", myArray);

// [ [ 200 ], { letter: 'hello' }, 'c', 'd', 'e' ]
console.log("myArrayCopy:", myArrayCopy);
```

In the example above, a copy of `myArray` is made using `splice()`. `myArray` contains a nested array at index 0 and a nested object at index 1. `splice()` creates a shallow copy of any non-primitive variable type (i.e. objects and arrays for example). A shallow copy means that the reference to the value in memory is copied, not the actual value. So both the nested array and nested object in `myArrayCopy` and `myArray` actually point to the same value in memory. This means that when one value is accessed and changed, that change is reflected in both copies.

# Converting list-like iterable objects using Array.from():

The `Array.from()` method will convert a list-like iterable object (a NodeList for example) and convert it to an array. This allows you to use all of the array methods on the converted array which can be helpful sometimes.

# Resources:

- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [MDN - Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
- [MDN - Literal](https://developer.mozilla.org/en-US/docs/Glossary/Literal)
- [MDN - Array Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [MDN - Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [MDN - Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN - Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [MDN - Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [MDN - Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [MDN - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN - Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN - Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [MDN - Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN - Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN - Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Javascript.Info - Arrays](https://javascript.info/array)
- [Working with Arrays in JavaScript](https://www.digitalocean.com/community/tutorial_series/working-with-arrays-in-javascript)
