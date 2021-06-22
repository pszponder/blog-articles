# Scope in JavaScript

# What is Scope?

Scope is the area of code where a variable (or function) exists and is accessible. There are a few different types of scopes in JavaScript:

- Global Scope
- Function Scope
- Block Scope

## Global Scope

Variables declared outside of functions or blocks (curly braces `{ }`) are considered to have global scope meaning that they can be accessed anywhere in the JavaScript program

```js
// Define Variables in the JavaScript Global Scope
var vGlobal = "I was defined in the global scope using the var keyword";
let lGlobal = "I was defined in the global scope using the let keyword";
const cGlobal = "I was defined in the global scope using the const keyword";

// Access the variables defined in the global scope from the global scope
console.log("Accessing vGlobal from global scope: ", vGlobal);
console.log("Accessing lGlobal from global scope: ", lGlobal);
console.log("Accessing cGlobal from global scope: ", cGlobal);

// Define a function to access the global variables inside a function
function myFunc() {
  // Access global variables from within the function
  console.log("Accessing vGlobal from within function scope: ", vGlobal);
  console.log("Accessing lGlobal from within function scope: ", lGlobal);
  console.log("Accessing cGlobal from within function scope: ", cGlobal);
}

// Call the function
myFunc();

// Access the global variables from within block scope
{
  console.log("Accessing vGlobal from within block scope: ", vGlobal);
  console.log("Accessing lGlobal from within block scope: ", lGlobal);
  console.log("Accessing cGlobal from within block scope: ", cGlobal);
}
```

**NOTE:** When defining variables using the `var` keyword outside of a function (hence globally scoping it), the variable becomes attached to the `window` object. Variables defined with `let` or `const` do not get attached to the `window` object. This is because `var` was designed to be either function or global scoped. `let` and `const` are actually created to be block scoped

The `window` object represents the browser's window and contains all global functions, objects and variables.

So technically, when you declare a variable using `let` and `const` outside of a code block in a javascript program, they are only globally scoped to the javascript program, but they are not in the global scope of the `window` object.

## Function Scope

A variable declared within a function is considered to be part of the function's scope. This scope is referred to as `function scope`. You will sometimes see `function scope` also reffered to as `local scope`.

Variables declared inside a function scope can be accessed from within the function but not outside of it.

```js
function myFunc() {
  // Declare a variable inside myFunc's funciton scope
  var x = 1;
  console.log(x);

  if (true) {
    var y = 2;
    console.log(y);
  }
  console.log(y);
}

// Call the function
myFunc();

// Attempt to access x outside of the function scope is not possible
console.log(x); // Uncaught ReferenceError: x is not defined
```

**NOTE:** Variables declared with the `var` keyword have function (a.k.a. local) scope when defined inside a function. Variables declared with `let` and `const` technically have block scope (inside curly braces) when declared inside a function (i.e. the variable's scope is bound to the curly braces, and not to the function itself). Since the function uses curly braces to encapsulate the function body, the function scope and the block scope for the function body are essentially the same thing.

The below example demonstrates the differences between function scoping when using `var` and `let`

```js
function myFuncVar() {
  // Declare a variable using var inside myFunc's funciton scope
  var x = 1;
  console.log(x);

  if (true) {
    // Since var is function scoped and not block scoped,
    // we are actually overwriting the value of the x variable
    var x = 2;
    console.log(x);
  }
  // Will print out 2 since we overwrote the variable in the if statement
  console.log(x);
}

function myFuncLet() {
  // Declare a variable using var inside myFunc's funciton scope
  let x = 1;
  console.log(x);

  if (true) {
    // Creating a new variable x = 2 inside the block scope
    // (this is not accessible outside of the if statement's curly braces)
    let x = 2;
    console.log(x);
  }
  // 1 since console.log() cannot access x = 2 variable defined
  // in the if statement due to block scope
  console.log(x);
}

// Call the functions
myFuncVar();
myFuncLet();
```

## Block Scope

Block scope was introduced in ES2016 along with the `let` and `const` variable declaration keywords. Block scope only applies to variables created with either the `let` or `const` keywords.

Block scope is the scope defined within a set of curly brackets `{ }`. The curly brackets define a "block" of code, hence the name, "block scope".

A block scoped variable cannot be accessed outside of the block that it was defined in.

```js
// This is an example of block scope,
// typically, the curly brackets will be attached to something like an if, for, while loop
// and not by themselves as seen in this example
// but this makes it easier to illustrate hw block scope works

// Lets call this block scope A
{
  // Anything defined inside these braces is block scope
  let a = 1;
  console.log(a); // 1
}
//"ReferenceError: a is not defined"
// Can't access a outside of it's block scope
console.log(a);

// Lets call this block scope B
{
  let b = 2;
  console.log(b); // 2

  // Cannot access "a" within block scope B since "a" was defined in block scope A
  console.log(a); // ReferenceError: a is not defined
}

// block scope C
{
  let c = 3;
  console.log(c); // 3

  // block scope D
  // block scope D is part of block scope D
  // Therefore, variables declared in block scope C are also accessible in block scope D
  // However, variables declared in block scope D are NOT part of block scope C
  {
    let d = 4;
    console.log(d); // 4
    console.log(c); // 3
  }
  // "ReferenceError: d is not defined" because "d" is part of block scope D but not block scope C
  console.log(d);
}
```

More examples of block scope:

```js
// Note, the below if-else...if-else loop would never actually run
// the else-if or else portion of the code due to the if statment always
// evaluating to true first, this is just to give you an idea of the block scope.

// Example of block scope for an if-else...if-else loop
if (true) {
  let x = 1;
  console.log("x is in the if-statement's block scope");
} else if (true) {
  let y = 2;
  console.log("y is in the else...if-statement's block scope");
} else {
  let z = 3;
  console.log("z is in the else-statement's block scope");
}

// Example of block scope within a for loop
for (let i = 0; i < 5; i++) {
  let a = i; // a is in the for loop's block scope
  console.log(a);
}
// Cannot access the variable "a" outside of the block scope
console.log(a); // Uncaught ReferenceError: a is not defined

// Nested loops
// Outer Loop
for (let i = 0; i < 5; i++) {
  // This variable is defined in the outer loop's block scope,
  // it will be accessible by the inner loop
  let a = 5;
  console.log("Running outer for loop:");
  console.log(a); // 5

  // This inner for loop is defined inside the curly brackets of the outer for loop
  // Therefore, the inner for loop is in the block scope of the outer for loop
  // The inner for loop will have access to variables declared
  // in the outer for loop since they are in the same block scope
  // However, variables declared in the inner loop will not be accessible by the outer loop
  for (let j = 0; j < 5; j++) {
    // This variable is defined in the inner loop's block scope,
    // it is not accessible by the outer loop
    let b = 10;
    console.log("Running inner for loop:");
    console.log(a); // Will return 5
    console.log(b); // 10
  }

  console.log("Running outer for loop:");
  console.log(a); // 5
  // "ReferenceError: b is not defined" (because b is not in the block scope of the outer loop)
  console.log(b);
}
```

**NOTE:** Variables declared with the `var` keyword do **NOT** have block scope, only variables declared with `let` or `const` have block scope. Variables declared with `var` will ignore block scoping rules.

Example of how `var` does not follow block scoping

```js
// Var does not follow block scoping
{
  var a = 1;
  console.log(a); // 1
}

console.log(a); // 1

{
  {
    var b = 2;
    console.log(b); // 2
  }
  // 2 (if b was declared using let or const, you would get a ReferenceError)
  console.log(b);
}

console.log(b); // 2
```

# Lexical Scope

JavaScript is a lexically scoped language (as opposed to a dynamically scoped language). You will also see Lexical Scoping defined as Static Scoping. So what does lexical scoping mean?

Lexical scoping means that the scope is defined at the location where the variable or function is defined (as opposed to where they are run).

Example of how Lexical Scoping works:

```js
// Define variable x and initialize its value to 1
let x = 1;

// Define function that will console.log the value of x
function myFunc() {
  console.log(x);
}

// Define function that defines a local variable x = 50 and calls myFunc()
function logVariable() {
  let x = 50;
  myFunc();
}

// What will logVariable() return? 1, 50, something else?
logVariable(); // This will log 1 to the javascript console
```

Let's break down the code snippet above.

1. When the `logVariable()` function is called, it creates a local variable x and sets its value equal to 50
2. In the next line, the `myFunc()` function is called, let's go up to where the `myFunc()` function is defined
3. `myFunc()` calls the `console.log()` function on the `x` variable however, `x` is not defined in the `myFunc()` scope. We therefore need to go up one scope to the global scope to get the value of `x` which is 1. (see section below on scope chaining).

Notice that we never accessed the value of x = 50, even though it appears right above the `myFunc()` call in the `logVariable()` function. Again, this is because lexical scoping requires us to go to where the functions are defined, and not where they are run. If JavaScript were a dynamically scoped language, calling `logVariable()` would result in the value of 50 being logged to the console instead of 1.

# Scope Chaining

It is very helpful to understand how JavaScript accesses variables using scope chaining. Understanding the concept of scope chaining will help you understand how to determine the scope of variables / functions.

When a function or method needs to access a variable in JavaScript which is not initialized with a value in the current scope, JavaScript will go up by one scope level to look for the variable's value. It will keep going up scope levels until it finds the function declaration.

**NOTE:** Notice that scope chaining does not go DOWN scope levels, it will always only go up to look for a variable declaration in the next larger scope

Example of how scope chaining works:

```js
// Defining x in the global scope of the file
let x = 0;

// Defining myFunc, everything inside is in it's function scope
function myFunc() {
  // In order to set a value for y, JavaScript needs to find the value of x
  // Since the value of x is not defined within the funcion scope,
  // we have to go to the next scope outside the function (which happens to be the global scope)
  // In the global scope, we find x = 0 so y will be initialized with a value of 0 as well
  let y = x;
  console.log("Initial value of y is: ", y); // 0

  for (let i = 0; i < 5; i++) {
    // Again, y is not defined in the for loop's scope,
    // need to go up by one level to the function scope to get the value of y
    y = y + i;
    console.log("logging y: ", y);

    // Since x's value is not defined in the for loop's block scope,
    // JavaScript goes up to the function scope
    // The function scope does not contain a value for x either
    // so JavaScript goes up another scope level to the global scope
    console.log(x);
  }
}

myFunc();
```

# Summary

- Scope is the area of code where a variable (or function) exists and is accessible
- There are several types of scope in JavaScript

  - Global Scope
  - Function Scope
  - Block Scope

- Variables declared with `let` and `const` inside curly brackets `{ }` have block scope
  - These variables cannot be accesssed outside of the curly brackets they were declared in
  - Block scoping does not apply to variables defined with the `var` keyword
- Variables declared inside a function have function scope
  - These variables cannot be accessed outside of the function they were declared in
  - Technically, variables declared with `let` and `var` don't have function scope, they have block scope
- Variables declared outside of functions and curly brackets have global scope
  - These variables can be accessed anywhere in the code
  - Only variables declared with the `var` keyword get attached to the global `window` object
- JavaScript is lexically scoped which means that scope is defined where the function / variable are defined, and not where the function / variable are run.
- Scope chaining allows javascript to go up to higher level scopes to look for the value of a variable if it does not exist in the current scope

# References

- [MDN - block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [MDN - variable scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope)
- [MDN - block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement)
- [W3 Schools JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)
- [W3 Schools JavaScript Window - The Browser Object Model](https://www.w3schools.com/js/js_window.asp)
- [Wes Bos - Scope](https://wesbos.com/javascript/03-the-tricky-bits/scope)
- [Understanding Scope and Scope Chain in JavaScript](https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53)
