# JavaScript: Declaring and Initializing Variables, How Data is Stored and Accessed in JavaScript

Declaring and initializing variables in JavaScript are two different concepts. In order to better understand these concepts as well as what a variable actually is, let's start with discussing how memory is used to store and access data.

# What is a Variable and How does it Work?

A variable, also known as a "binding" connects (or binds) a piece of data in memory to a name which can later be used to retrieve the value from memory. In computer science, every location in memory has a memory address.

A few things happen when a variable is declared:

1. A location in memory is set aside to store the future value (piece of data) assigned to the variable name.
2. A memory address which "points" to that location in memory is created. This allows us to access the value stored in memory at a later point.
3. The variable name is associated with the memory address.

For example, let's say that you create a variable `x` using the `let` keyword and set it's value equal to the string "Hello". You then use the `console.log()` function to log the value of x to the console. What is actually happening under the hood?

```js
let x = "Hello";
console.log(x);
```

To make this a little easier to explain and understand, we can break down the 1st line into 2 lines of code, a variable declaration and a value assignment.

```js
// Lines 1 and 2 are equivalent to stating:
// let x = "Hello";
let x; // Line 1
x = "Hello"; // Line 2
console.log(x); // Line 3
```

Line 1: `let x;`

- A variable is declared with a name of "x".
- A location in memory is reserved for the value of the variable "x".
- A memory address which points to the location in memory is associated with the variable name "x".

Line 2: `x = "Hello";`

- JavaScript looks up the variable named `x` and uses the associated memory address to access the location in memory which was reserved for the variable "x".
  - Basically, the variable "points" to the memory location where the value is (or is going to be) stored.
- The value of "Hello" is stored at the specified memory location.

Line 3: `console.log(x)`

- The `console.log()` function calls the variable `x` and uses the memory address associated with `x` to search for the value stored in memory which happens to be "Hello".
- The value at the specific memory address is returned by `console.log()`.

As a quick summary, when you try to print out the value of the variable x using `console.log(x)`, what is actually happening is that the variable x contains the memory address where the the value "Hello" is stored. JavaScript uses that memory address to go to the specific location in memory which the memory address points to and retrieves the value, which is "Hello".

So **variables "point" to values stored in memory.**

# Declaring Variables in JavaScript

To declare (create) a variable, we need to use the `var`, `let`, or `const` keyword, followed by the name we want to provide to the variable. The `var`, `let`, and `const` keywords tell JavaScript to set aside a portion of memory so that we may store a specific piece of data to it later.

The name provided to the variable can be later used to access the location in memory assigned to the variable and retrieve the data which is stored in it. To assign a value to the variable (initialize the variable with a value), use the assignment operator `=` to set the variable name equal to a piece of data (number, boolean, string, array, object, function, etc.)

```js
// Declare a variable named "x" using the var keyword
var x;

// Declare a variable named "y" using the let keyword
let y;

// Declare a variable named "z" using the const keyword
// Assign a value of 2 to the variable "z" using the assignment operator (=)
// Also called initializing "z" with a value of 2 (see section below on initialization)
const z = 2;
```

# Initialization

Initializing is the term used to describe the process of assignment of a value to a variable (i.e. storing the value (piece of data) in the location in memory which the variable "points" to).

```js
// Initialize the variable x to a value of 1
var x = 1;

// Initialize the variable y to a value of 2
let y = 2;

// Initialize the variable z to a value of 3
// Note that variables with the const keywords
// have to be initialized as soon as they are
// declared otherwise, you will get an error.
const z = 3;
```

# Resources

- [MDN - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN - block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [MDN - window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [MDN - Variable Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope)
- [MDN - Block Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement)
- [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN - Variable Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
- [Var, Let, and Const - What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [W3 Schools - JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)
- [Eloquent JavaScript, A Modern Introduction to Programming](https://eloquentjavascript.net/)
- [JavaScript Variable Declaration and Initialization](https://owlcation.com/stem/JavaScript-Variable-Declaration-and-Initialization)
- [What is the Temporal Dead Zone?](https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/)
- [Wes Bos - Variables and Statements](https://wesbos.com/javascript/01-the-basics/variables-and-statements/#differences-between-var-let--const)
- [CS50 2020 - Lecture 4 - Memory](https://www.youtube.com/watch?v=NKTfNv2T0FE)
