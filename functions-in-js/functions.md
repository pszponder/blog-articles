# JavaScript: Functions

# What is a Function?:

A function is a piece of reusable code. Understanding functions and how they work is essential to writing clean and maintainable code.

If you have a set of statements (lines of code) which you want to be able to run more than once, put that set of statements into a function and then every time you call (execute) that function, you can run those statements. A function allows you to recycle your code.

## Function Declarations and the "function" Keyword:

The most basic way to create a function is by declaring the function using the `function` keyword followed by the name of the function you want to give it, a set of parenthesis `( )` followed by a code block `{ }`. You can optionally put in one or more parameters into the function's parenthesis to be able to use them in the function's code.

Creating a function in this way is called _"Function Declaration"_.

```js
function myFuncName(optionalParam1, optionalParam2, ...) {
  // Code that runs when the function is called / executed.
}
```

## Running a Function:

In order to run or execute the code inside a function, you have to "call" the function (this is sometimes also referred to as "invoking" a function).

To invoke a function, type the name of the function followed by parenthesis and any required function arguments. When you put the parenthesis after the function name, this tells JavaScript to execute the function.

```js
// Declare a function without function parameters
function sayHello() {
  console.log("Hello");
}

// Call / Invoke the sayHello function
sayHello(); // prints "Hello" to the console

// Declare a function that takes in a function parameter
function sayWord(word) {
  console.log(word);
}

// Call / Invoke the sayWord function
sayWord("Hi"); // prints "Hi" to the console
sayWord(); // returns undefined
```

## Function Scope (Block Scope):

Functions in JavaScript are block scoped, meaning that any variable declared inside the function's blocks is part of the function's block scope and is not accessible outside of the function.

Variables in the global scope can still be accessed and modified by the function.

```js
// define variable in global scope
let word = " World!";

// Declare sayHello function
function sayHello() {
  let greeting = "Hello";
  // Update greeting using variable from global scope
  greeting += word;
  console.log(greeting);
}

// Call the sayHello function
sayHello(); // prints "Hello World!" from the console

// Try to access the greeting variable declared inside the sayHello function
// This will not work as it was declared inside the function's scope and is not
// accessible in the global scope
console.log(greeting); // Returns "ReferenceError: greeting is not defined"
```

## The Return Statement:

The `return` statement is used in a function to return a value when the function is called.

`return` also ends execution of the function. Any code below a return statement in a function is not run after the `return` statement is executed.

To create a `return` statement, simply use the `return` keyword, optionally followed by an expression or value.

- If `return` is followed by a variable or expression, the evaluated value of that variable / expression will be returned by the function when it is called.
- If `return` is not followed by a variable or expression, the function will return `undefined` when it is called.

Example of using the return keyword to return a value when the function is called

```js
// Declare a function that returns the word "Hello"
function sayHello() {
  return "Hello";
}

// Store the return value of the sayHello() function in greeting
let greeting = sayHello();
console.log(greeting); // Hello
```

Example of using return to break out of a function. Notice in the function that the return statement breaks out of the while loop AND the function so that we don't get an infinite loop.

```js
// Declare function that counts down from input number down to 0
// this function uses a return statement nested in an if statement
// to break out of the function when the function parameter is less than 0
function countDown(n) {
  while (true) {
    console.log(n);
    n--;
    if (n < 0) {
      return;
    }
  }
}

// Call the countDown() function
countDown(10);

/*
10
9
8
7
6
5
4
3
2
1
0
*/
```

## Parameters vs Arguments in Functions:

`Parameters` are placeholder variables that are specified inside the parentheses of a function. These variables are used inside the function. A function can accept zero or more `parameters`.

When a user calls a function, if that function was declared with one or more `parameters`, the user must pass in values to those `parameters`. The values that the user passes in are referred to as function `arguments`. When the `arguments` are passed into the function, JavaScript replaces all instances of the function `parameters` with the value of the `arguments` that the user passed in. When a user passes in an argument to the function, the function is actually copying the value of that argument and uses a copy to run its tasks.

Even though parameters and arguments are written in the same location in the function, they are different.

- `parameters` are placeholder variables written during function declaration
- `arguments` are the actual value passed into the function when calling the function.

## Setting Default Values for Parameters:

In JavaScript, you can set default values for function parameters. What this does is that i the user does not specify a particular argument when calling a function, JavaScript will use the default value assigned to the function parameter during function assignment.

To set a default value to a function parameter, set the parameter equal to a value during the function declaration.

```js
// Create a countUp function that will count up from a start point
// up to an end point
// Assign a default value of 10 to the end parameter
function countUp(start, end = 10) {
  while (true) {
    console.log(start);
    start++; // increment start value

    // Return condition
    if (start > end) {
      return;
    }
  }
}

// Call the countUp function with both argument inputs
countUp(1, 5);
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
*/

// Call the countUp function with only one input argument
// CountUp will start from 1 and go all the way up to 10
// which is the default value of the end parameter if not specified as an argument
countUp(1);
/*
countUp with 1 input:
1
2
3
4
5
6
7
8
9
10
*/
```

## Accepting Extra Parameters with the rest (...) Parameter:

In JavaScript, use the rest parameter `...` to allow a function to accept an unspecified amount of arguments.

To use the rest parameter, enter the rest parameter directly followed by an array name as the last parameter in the function declaration or argument. When the rest parameter is used, any additional arguments input into the function call will get stored in an array with the same name which was passed into the rest parameter.

## Function Best Practices:

Be specific! Every function that you write should only perform one task. If you find that you wrote a function that performs 2 or more tasks (especially if they are unrelated), strongly consider breaking up the function into smaller functions, each which perform only one task. If you write a function called `addTwoNumbers()`, it should only add two numbers, if it does anything else, such as multiplying the two numbers, that should go into another function.

Try to give your functions names that give some detail about what the function does. For example, if you write a function called `sayHello()`, then this probably means that the function will either return or print to the console "Hello".

This will help with code readability and maintenance. If for example, you write a function named `sayHello()`.

# Other Ways to Create a Function:

## Function Expressions:

A function expression is simply a function declaration stored in a value.

To create a function expression, write a function declaration and then assign it to a variable name.

```js
// Create a function expression
const myFuncExp = function sayHello() {
  console.log("hello");
};

// Call myFuncExp
myFuncExp(); // prints "hello" to the console

// Call sayHello
sayHello(); // returns "ReferenceError: sayHello is not defined"
```

In the code above, notice that you no longer can call the function using `sayHello()`. Instead, we have to call the function expression using the `myFuncExp()` variable name we defined to the left of the assignment operator.

## Anonymous Functions:

In the introduction to Function Expressions, we showed that the function name on the right hand side can no longer be used to invoke the function, and instead, you had to use the variable name assigned to the function expression. You can actually remove the function name to the right of the function keyword and the function expression would still work.

A function without a declared name is referred to as an anonymous function. Anonymous functions are most often seen in conjunction with function expressions as a sort of "shorthand" to writing the function expression.

```js
// Create a function expression
const sayHi = function sayHello() {
  console.log("hello");
};

// Create another function expression but assign it the value of an anonymous function
const sayGoodbye = function () {
  console.log("goodbye");
};

// Call sayHi function expression
sayHi(); // prints "hello" to the console

// Call the sayGoodbye function expression
sayGoodbye(); // prints "goodbye" to the console
```

**NOTE:** You can also create anonymous arrow functions using the following syntax `() => {}`. These can be used as callback functions. See additional information below for more information on callback functions and arrow functions.

## Arrow Functions:

Arrow functions (also referred to as arrow function expressions) are further shorthand for anonymous function expressions which omit the use of the `function` keyword altogether and instead use what is called a "fat arrow" as the trigger to tell JavaScript that the statement is a function. The fat arrow is denoted with an equal sign next to a greater than sign `=>`.

### Arrow Function Syntax:

In general, when creating an arrow function, declare a function name and assign it to parenthesis with 0 or more parameters, add an "fat arrow" after the parenthesis and then add brackets with the function code inside. You should also add a semicolon after the closing bracket.

General Arrow Function Syntax

```js
const myFuncArrow = (param1, param2, param3, ...) => {
  // CODE HERE
};
```

**NOTE:** If the arrow function only has 1 parameter, you can omit the parenthesis around the parameter however, some style guides such as the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#arrow-functions) recommend to keep the parenthesis for better clarity.

**NOTE 2:** If the arrow function does not accept any parameters, you need to use a pair of empty parenthesis as part of the arrow function syntax.

Example of writing an arrow function without parameters

```js
const myFunc = () => {
  return "hello";
};
```

If you only have one line of code inside your arrow function, you can use an `implicit` return. This requires you to omit the `return` keyword as well as the brackets. If the single line is particularly long, you can add parenthesis to wrap around the statement.

```js
// Standard Arrow Function Syntax
const sumNum = (a, b) => {
  return a + b;
};

// Single-statement Arrow Function Syntax
const sumNum2 = (a, b) => a + b;

// Call both functions
console.log("sumNum: ", sumNum(1, 2)); // returns 3
console.log("sumNum2: ", sumNum2(1, 2)); // returns 3
```

**NOTE 3:** Be careful when using the single line, implicit return with objects. If you try to return an object in a single line without the return statement ("implicitly"), JS will try to interpret the object's curly braces with the arrow function's braces. A way to work around this is to enclose the whole object in parenthesis.

```js
// BAD
const myArrowFunc = () => {key1: "value1", key2: "value2", key3: "value3"};

// GOOD
const myArrowFunc = () => ({key1: "value1", key2: "value2", key3: "value3"});
```

### Anonymous Arrow Function Syntax:

It is possible to create anonymous arrow functions. These often appear when using the arrow function expression as an input to a function (i.e. a callback function).

Anonymous Arrow Function Syntax

```
() => {}
```

Example of using an anonymous arrow function as a callback function to the array method .filter()

```js
// Initialize an array of numbers
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Call the .filter() method on myArray and use an anonymous arrow function
// as the callback function to help filter the array for even numbers
let evens = myArray.filter((element) => element % 2 === 0);

console.log(evens); // [ 2, 4, 6, 8, 10 ]
```

### Limitations of Arrow Functions:

While arrow function syntax looks clean, it cannot be used in all cases due to some limitations. Here are the most notable limitations:

- Arrow functions do not have their own bindings to `this` or `super`
  - Thus, arrow functions should not be used for object methods (functions associated with an object)
- Generally can't be used with `call`, `apply`, or `bind` methods
- Cannot be used to create constructor functions

## IIFE (Immediately Invoked Function Expression):

# Function Hoisting:

In a previous article, I spoke about hoisting which is the process that JavaScript uses to bring variable declarations to the top of the code prior to executing it.

Hoisting also works with function declarations. Any function created using a function declaration is "hoisted" to the top of the code and loaded by JavaScript before the rest of the code is executed. This allows us to write code where we call functions created by function declarations before the function declaration is actually declared.

**NOTE:** Unlike function declarations, function expressions are NOT hoisted by JavaScript. If you try to call a function expression before it is defined in code, you will get a `ReferenceError`. Apart from how function declarations and function expressions are written, the fact that function declarations are hoisted and function expressions aren't is really the only major difference between the two function creation methods.

```js
// Call sayHi function expression above where the function is defined
sayHello(); // prints "hello" to the console

// Create a function declaration named sayHello
function sayHello() {
  console.log("hello");
}

// Call the sayGoodbye function expression above where the function is defined
sayGoodbye(); // prints "ReferenceError: Cannot access 'sayGoodbye' before initialization"

// Create a function expression named sayGoodbye
const sayGoodbye = function () {
  console.log("goodbye");
};
```

# Callback Functions

# Method Chaining:

# References

- [MDN - return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [MDN - default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN - Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN - Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Wes Bos - Different Ways to Declare Functions](https://wesbos.com/javascript/02-functions/different-ways-to-declare-functions)
- [Eloquent JavaScript, 3rd Edition - Chapter 3, Functions](https://eloquentjavascript.net/03_functions.html)
- [JavaScript.info - Functions](https://javascript.info/function-basics)
- [JavaScript.info - Function Expressions](https://javascript.info/function-expressions)
- [JavaScript.info - Arrow functions, the basics](https://javascript.info/arrow-functions-basics)
- [What Method Chaining in JavaScript Is, How it Works and How to Use It](https://blog.alexdevero.com/method-chaining-in-javascript/)
