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
let myArray = ["a", "b", "c", "d", "e"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// The above loop prints out
// a
// b
// c
// d
// e
```

## while loops:

## do...while loops:

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
