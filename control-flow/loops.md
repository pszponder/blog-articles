# Control Flow in JavaScript: Loops

This article is part of my Control Flow in JavaScript Series.

In this article, we will be discussing loops.

# Why do we need loops?

Very often in code, you will find yourself in the situation where you need to perform a particular task or tasks repeatedly.

Let's say that you want to print to the console the numbers 1 though 10. One way to do that would be the following:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
```

Ok, that's only 10 lines of code, that's not that bad you may say. What if instead of printing the numbers 1 through 10, you were asked to print the number 1 through 1000! Do you really want to type out 1000 `console.log()` statements? Instead of writing 1000 lines, we can implement the following loop for example:

```js
// Print out the numbers 1 through 1000 to the console
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
```

Loops enable a program to repeat a piece of code for a specified (or unspecified) amount of time.

# Loop Basics

All 3 of the standard loops (for, while, and do-while) need 3 things to run correctly:

1. An iterator / initial condition.
2. A condition to evaluate to true or false to determine whether or not the loop should run. Typically, this condition is associated with the iterator / initial condition.
3. A way to increment the iterator / initial condition.

## for loops:

The `for` loop is the most often used loop out of all 3 of the standard loops.

Here is the syntax:

```
for (iterator; condition; incrementIterator) {
  // Code in for block goes here
  // This code will only execute if the condition
  // evaluates to true
}
```

Let's look at an example of a for loop and step though what is happening:

```js
// Initialize an array
let myArray = ["a", "b", "c", "d", "e"];

// Loop through the array and print each element
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// The above loop prints out
// a
// b
// c
// d
// e

// This console.log() will run after the for loop has
// completed printing out all of the elements in the
// array
console.log("For loop ended");
```

1. When the for loop is run for the 1st time, the iterator is set to 0.
2. The condition is then checked and since 0 is less than myArray.length (5), the condition evaluates to `true`.
3. Since the condition evaluated to tru, then the code inside the for loop is run once and the first element in the array is printed to the console.
4. After the code inside the loop has executed once, the iterator is incremented from 0 to 1 by `i++`.
5. After this, the condition is checked again, since 1 is less than the length of the array, the code inside the for loop is run once again and the 2nd value of the array is printed to the console.
6. After the code runs a second time, the iterator is again increased by 1 so now its value is 2.
7. The loop of checking the condition, running the code and incrementing the iterator is repeated until the iterator is incremented to the length of the array which is 5. At this point, the condition is no longer true since 5 < 5 is false. This results in the for loop terminating and moving to the next set of code which is "console.log("For loop ended");

## while loops:

Unlike for loops, while loops have their iterator initialized outside of the while loop declaration. Also different from the for loop, the incrementing of the iterator does not happen automatically, instead it needs to be specifically declared within the while loop code block, otherwise, the iterator will not increment and the while loop will keep looping forever. This is called an "infinite loop condition". This should be avoided as once you get into an infinite loop, you cannot break out of it from within the code, you will have to manually close or quit out of your program.

Here is the syntax for a while loop:

```js
let iterator = someValue;
while (condition) {
  // Code goes here

  // If we don't increment the iterator here, our
  // loop will probably keep going to infinity
  iterator++;
}
```

Now let's see an example where we loop through an array and print all it's values:

```js
// Initialize an array
let myArray = ["a", "b", "c", "d", "e"];

// Set an iterator with an initial value
// for the while loop
let i = 0;

// Loop through the array and print each element
while (i < myArray.length) {
  // Log the current element in the array to the console
  console.log(myArray[i]);

  // Increment the iterator
  i++;
}

// The above loop prints out
// a
// b
// c
// d
// e

// This console.log() will run after the loop has
// completed printing out all of the elements in the
// array
console.log("while loop ended");
```

1. In the example above, we initialize the iterator outside of the while loop and set it's value to 0.
2. The while loop checks the condition which is `i < myArray.length` and since i is currently 0, the loop will run and print the 1st element in the array as well as increment the iterator which is declared outside the loop.
3. This is then repeated with the condition of the while loop being checked before the code inside runs.
4. Once the iterator inside the while loop is incremented to a value 5 which is the same as the length of the array,the condition on the while loop will no longer be true and the while loop will exit and move to the next set of instructions which is to console.log`("while loop ended")`.

## do...while loops:

Do while loops are very similar to while loops except the checking of the condition happens after the contents inside the loop are executed. This ensures that even if the condition inside the while loop will evaluate to false, the contents inside the loop will run once.

Syntax of a do...while loop:

```js
// Initialize an iterator which will be used to control
// how many times the loop will run.
let iterator = someValue;

// Run the code inside the do code block
do {
  // Code goes here

  // If we don't increment the iterator here, our
  // loop will probably keep going to infinity
  iterator++;

  // check the condition evaluates to true
  // before going back and running the code again
  // inside the do loop
} while (condition);
```

Example of do...while loop:

```js
// Initialize an array
let myArray = ["a", "b", "c", "d", "e"];

// Set an iterator with an initial value
// for the do...while loop
let i = 0;

// Loop through the array and print each element
do {
  // Log the current element in the array to the console
  console.log(myArray[i]);

  // Increment the iterator
  i++;
} while (i < myArray.length);

// The above loop prints out
// a
// b
// c
// d
// e

// This console.log() will run after the loop has
// completed printing out all of the elements in the
// array
console.log("do...while loop ended");
```

1. Here, the iterator is also declare outside of the loop and initialized to a starting value of 0.
2. The code inside the do...while loop is run and the iterator is incremented by 1.
3. The condition in the while loop is then checked. Since 1 is less than the length of the array, the code in the do portion of the loop is run once again.
4. This cycle of checking the condition and running the code inside the do block is repeated until the condition inside of the while loop is no longer true. At this point, the do...while loop exits and the next section of code is run which is the `console.log("do...while loop ended")`.

# Skipping Iterations and Escaping Out of Loops:

## break:

## continue:

# Looping through Iterables and Objects in JS with for...in and for...of loops:

## for...in loops:

## for...of loops:

# References

- [MDN - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [MDN - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [MDN - do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [MDN - continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [MDN - break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
