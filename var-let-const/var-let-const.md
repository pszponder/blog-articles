# JavaScript: Differences Between Using var, let, and const for Variable Declaration

The `var` keyword was the original keyword used to declare variables in JavaScript.

Introduced in ES2016, `let` and `const` are two new keywords used for declaring variables. This article will explain the differences between how the `var`, `let`, and `const` keywords work.

Before diving into the differences between `var`, `let`, and `const`, it is important to understand what variables actually are, variable declaration and initialization, what "scope" is, as well as a little bit about "hoisting" in JavaScript.

# What is a Variable?

A variable, also known as a "binding" connects (or binds) a piece of data in memory to a name which can later be used to retrieve the value from memory. In computer science, every location in memory has a memory address.

A few things happen when a variable is declared:

1. A value is "initialized" and placed into a location in memory.
2. A memory address which "points" to that location in memory is created.
   2.1. This allows us to access the value stored in memory at a later point.
3. The variable name is assigned the memory address.

For example, let's say that you create a variable `x` using the `let` keyword and set it's value equal to the string "Hello". You then use the `console.log()` function to log the value of x to the console. What is actually happening under the hood?

```js
let x = "Hello";
console.log(x);
```

To make this a little easier to explain and understand, we can break down the 1st line into 2 lines of code, a variable declaration and a value assignment.

```js
// Lines 1 and 2 are equivalent to stating:
// let x = "Hello";
let x;
x = "Hello";
console.log(x);
```

Line 1: `let x;`

- A variable is declared with a name of "x"
- A location in memory is reserved for the value of the variable "x".
- A memory address which points to the location in memory is stored along with the variable name "x".

Line 2: `x = "Hello";`

- The memory address is used to access the location in memory which is reserved for the variable "x".
  - Basically, the variable "points" to the memory location where the value is (or is going to be) stored
- The value of "Hello" is stored at the specified memory location.

Line 3: `console.log(x)`

- The `console.log()` function calls the variable and the memory address is used to search for the value stored in memory which happens to be "Hello".
- The value at the specific memory address is returned by `console.log()`

As a quick summary, when you try to print out the value of the variable x using `console.log(x)`, what is actually happening is that the variable x contains the memory address where the the value "Hello" is stored. JavaScript uses that memory address to go to the specific location in memory which the memory address points to and retrieves the value, which is "Hello".

So **variables "point" to values stored in memory.**

# Declaring Variables in JavaScript

To declare (create) a variable, we need to use the `var`, `let`, or `const` keyword, followed by the name we want to provide to the variable. The `var`, `let`, and `const` keywords tell JavaScript to set aside a portion of memory so that we may store a specific piece of data to it later.

The name provided to the variable can be later used to access the location in memory assigned to the variable and retrieve the data which is stored in it. To assign a value to the variable, use the assignment operator `=` to set the variable name equal to a piece of data (number, boolean, string, array, object, function, etc.)

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

Initializing is the term used to describe the process of assignment of a value to a variable (i.e. storing the value in the location in memory which the variable "points" to).

```js
// Initialize the variable x to a value of 1
var x = 1;

// Initialize the variable y to a value of 2
let y = 2;

// Initialize the variable z to a value of 3
const z = 3;
```

# Scope

Scope is the space where the value of a variable is defined and accessible.

There are 3 types of scope in JavaScript:

- Global Scope
- Function Scope
- Block Scope

Variables defined with the `var` keyword have either global or function scope.

Variables defined with the `let` or `const` keyword have block scope.

For a more in-depth explenation of scope, see my other post titled "Scope in JavaScript".

# Hoisting

When a JavaScript program runs, the interpreter will fist parse the script and look for any variable declarations or function declarations. If it finds any variable or function declarations, it will "hoist" those to the top their respective scopes and process them first before proceeding to evaluate the rest of the JavaScript code. This process is called "Hoisting"

Hoisting affects variable declaration but NOT value INITIALIZATION / ASSIGNMENT.

Examples of Hoisting in JS

```js
x = 1; // Assign the variable x a value of 1
console.log(x); // 1;

// Declare a variable x
// This declaration will be "hoisted" by JS when the program runs
var x;
```

```js
x = 1;
var x; // This gets hoisted

// same as

var x;
x = 1;
```

Remember, hoisting only applies to variable declarations, not variable initialization. The below example will return "undefined" as x is initialized and not defined in the second line and therefore, it is not hoisted above the console.log() call.

```js
console.log(x); // returns undefined
var x = 1;
```

The code below will print 2. Since the variable y is declared on line 3, but not initialized, it will be hoisted up to the top of the program, above the y=2 initialization. So by the time `console.log(y)` is actually called, a value of 2 will be defined for y.

```js
y = 2;
console.log(y); // Returns 2
var y;

// Same As
var y;
y = 2;
console.log(y);
```

**NOTE:** While hoisting applies to variables declared with `var`, `let`, or `const`, hoisting really only helps variables declared with `var`. Variables declared with the `let` keyword return `ReferenceError` if they are un-initialized. You also cannot declare a variable with the `const` keyword without also initializing it's value right away. If you try to do this, you will obtain a "SyntaxError: Missing initializer in const declaration".

# The Temporal Dead Zone

The Temporal Dead Zone (TDZ) is the area in the current scope between the start of the scope and where the variable is initialized. The TDZ applies to variables declared with the `let` keyword. A variable declared with `let` cannot be accessed (will return "ReferenceError") within the TDZ

```js
{
  // Start of Temporal Dead Zone for variable x
  console.log(x); // ReferenceError, still in TDZ for x
  var y = "hi"; // Still in TDZ for x
  let x; // X declared, but not initialized with value, still in TDZ for x
  x = 10; // TDZ for x ended as x is initialized to a value of 10
}
```

# Differences between var, let, and const

## var

A variable which is declared (but not initialized) using the `var` keyword returns a value of `undefined` if it is accessed before it is initialized (see section about hoisting).

```js
console.log(x); // Returns undefined
var x = 1; // variable declaration and initialization
console.log(x); // Returns 1
```

Variables declared with `var` can be either function or global scoped.

```js
// Variable declared in global scope
var globalVariable = "This variable was declared in the global scope";

function myFunc() {
  // Variable declared in function scope
  var funcVariable = "This variable was declared in the function scope";
}
```

Variables declared with `var` can be re-declared

```js
var x = 1;
console.log(x); // 1

var x = 2;
console.log(x); // 2
```

## let

Variables declared with `let` are block scoped. This allows us to declare variables with the same name as long as they are in different block scopes.

```js
{
  // This x variable does not exist ouside of the current block scope
  let x = 1;
  console.log(x); // 1
}
// Trying to access x outside of its function block
console.log(x); // Uncaught ReferenceError: z is not defined

{
  // Since we are now in a new block scope, we can declare a variable named x (note that this is NOT the same variable as what was declared in the block above)
  let x = 2;
  console.log(x); // 2
}
// Trying to access x outside of its function block (still does not exist)
console.log(x); // Uncaught ReferenceError: z is not defined
```

Unlike `var`, variables declared with the `let` keyword cannot be re-declared within the same scope

```js
let x = 1;
let x = 2; // Uncaught SyntaxError: Identifier 'x' has already been declared
```

You can however, still redefine a variable declared with `let`.

```js
let x = 1;
console.log(x); // 1

x = 2; // This is ok because you are not trying to re-declare x, just re-define its value
console.log(x); // 2
```

## const

Similar to variables declared with `let`, variables declared with the `const` keyword are block scoped.

Also similar to `let`, variables declared with `const` cannot be redeclared.

Unlike variables declared with `let` however, variables declared with `const` **MUST** be initalized right away. If not, you will end up with a "SyntaxError: Missing initializer in const declaration" error.

Most importantily, variables declared and initialized with the `const` keyword cannot have their value changed **through reassignment** (see note below). This is because the `const` keyword causes the name of the variable to be read-only, preventing write access to the value stored in memory through the assigned variable.

**NOTE**: Notice that variables initialized with the `const` keyword cannot have their value changed **through reassignment**. This does not mean that the value of a constant value cannot change, it only means you can't change it using the variable name directly. While there isn't another way to change a string or number variable other than reassignment, you can change the properties of an object for example.

```js
// Create a variable using the const keyword and assign it a value of 1 (number)
const x = 1;
x = 2; // SyntaxError: Missing initializer in const declaration

// Create aa variable using the const keyword
// and assign it to an object
const myObj = {
  favoriteFood: "Pizza",
  favoriteLanguage: "JavaScript",
  favoriteHobby: "coding",
};

// Print out the value of favoriteHobby
console.log(myObj.favoriteHobby);

// Change the value of favoriteHobby
// This works because we are not accessing the value directly through the use of the value name
myObj.favoriteHobby = "sleeping";
console.log(myObj.favoriteHobby);
```

# Which variable declaration is best and which should I use?

I read an article from [Wes Bos](https://wesbos.com/javascript/01-the-basics/variables-and-statements/#differences-between-var-let--const) and I like his advice:

1. Use the "const" keyword to declare variables by default unless you know that your variable will need to have its value changed (use "let" in that case).
2. Use the "let" keyword to declare a variable if you know its value will change (like an iterator for example).
3. Unless necessary for a special case, avoid using the "var" keyword for variable declaration.

# Summary: Difference between variables declared with "var", "let", and "const" keywords:

"var"

- Scope:
  - Global
  - Function
- Able to be redeclared?
  - Yes
- Able to be reinitialized?
  - Yes

"let"

- Scope:
  - Global
  - Block
- Able to be redeclared?
  - No
- Able to be reinitialized?
  - Yes

"const"

- Scope:
  - Global
  - Block
- Able to be redeclared?
  - No
- Able to be reinitialized?
  - No

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
- [What is the Tempral Dead Zone?](https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/)
- [Wes Bos - Variables and Statements](https://wesbos.com/javascript/01-the-basics/variables-and-statements/#differences-between-var-let--const)
