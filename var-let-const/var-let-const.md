# JavaScript: Differences Between Using var, let, and const Keywords for Variable Declaration

The `var` keyword was the original keyword used to declare variables in JavaScript.

Introduced in ES2016, `let` and `const` are two new keywords used for declaring variables. This article will explain the differences between how the `var`, `let`, and `const` keywords work.

Before we jump into the differences between `let`, `var` and `const`, it's important to understand how scope and hoisting works.

# Scope

Scope is the space where the value of a variable is defined and accessible.

There are 3 types of scope in JavaScript:

- Global Scope
- Function Scope
- Block Scope

Variables defined with the `var` keyword have either global or function scope.

Variables defined with the `let` or `const` keyword have block scope.

For a more in-depth explanation of scope, see my other post titled [Scope in JavaScript](https://piotr-szponder.ghost.io/scope-in-javascript/).

# Hoisting

When a JavaScript program runs, it will first parse the script and look for any variable declarations or function declarations. If it finds any variable or function declarations, it will "hoist" those to the top their respective scopes and process them first before proceeding to evaluate the rest of the JavaScript code. This process is called "Hoisting"

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

Remember, hoisting only applies to variable declarations, not variable initialization. The below example will return "undefined" as x is initialized and not defined in the second line and therefore, it is not hoisted above the `console.log()` call.

```js
console.log(x); // returns undefined
var x = 1;
```

The code below will print 2. Since the variable y is declared on line 3, but not initialized, it will be hoisted up to the top of the program, above the `y = 2` initialization. So by the time `console.log(y)` is actually called, a value of 2 will be defined for `y`.

```js
y = 2;
console.log(y); // Returns 2
var y;

// Same As
var y;
y = 2;
console.log(y);
```

**NOTE:** While hoisting applies to variables declared with `var`, `let`, or `const`, hoisting really only helps variables declared with `var`. Variables declared with the `let` keyword return `ReferenceError` if they are un-initialized (see `TDZ` section further down for more detail). You also cannot declare a variable with the `const` keyword without also initializing it's value right away. If you try to do this, you will obtain a "SyntaxError: Missing initializer in const declaration".

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

Variables declared with `var` can be re-declared.

```js
var x = 1;
console.log(x); // 1

var x = 2;
console.log(x); // 2
```

## let

Variables declared with `let` are block scoped. We can only declare variables with the same name as long as they are in different block scopes using `let`.

```js
{
  // This x variable does not exist outside of the current block scope
  let x = 1;
  console.log(x); // 1
}
// Trying to access x outside of its function block
console.log(x); // Uncaught ReferenceError: x is not defined

{
  // Since we are now in a new block scope, we can declare a variable named x (note that this is NOT the same variable as what was declared in the block above)
  let x = 2;
  console.log(x); // 2
}
// Trying to access x outside of its function block (still does not exist)
console.log(x); // Uncaught ReferenceError: x is not defined
```

Unlike `var`, variables declared with the `let` keyword cannot be re-declared within the same scope

```js
let x = 1;
let x = 2; // Uncaught SyntaxError: Identifier 'x' has already been declared
```

You can however, still redefine (reassign) a variable declared with `let`.

```js
let x = 1;
console.log(x); // 1

x = 2; // This is ok because you are not trying to redeclare x, just redefine its value
console.log(x); // 2
```

### The Temporal Dead Zone

The Temporal Dead Zone (TDZ) is the area in the current scope between the start of the scope and where the variable is finally initialized. The TDZ applies to variables declared with the `let` keyword. A variable declared with `let` cannot be accessed (will return "ReferenceError") within the TDZ.

```js
{
  // Start of Temporal Dead Zone for variable x
  console.log(x); // ReferenceError, still in TDZ for x
  var y = "hi"; // Still in TDZ for x
  let x; // x declared, but not initialized with value, still in TDZ for x
  x = 10; // TDZ for x ended as x is initialized to a value of 10
}
```

## const

Similar to variables declared with `let`, variables declared with the `const` keyword are block scoped.

Also similar to `let`, variables declared with `const` cannot be redeclared.

Unlike variables declared with `let` however, variables declared with `const` **MUST** be initialized right away. If not, you will end up with a "SyntaxError: Missing initializer in const declaration" error.

Most importantly, variables declared and initialized with the `const` keyword cannot have their value changed **through reassignment** (see note below). This is because the `const` keyword causes the name of the variable to be read-only, preventing write access to the value stored in memory through the assigned variable. If you think about it, it makes sense why this is. If you want to create a variable that can't be changed easily, you need to know it's value, otherwise, you would just end up with a constant variable with an "undefined" value.

**NOTE**: Notice that variables initialized with the `const` keyword cannot have their value changed **through reassignment**. This does not mean that the value of a constant value cannot change, it only means you can't change it using the variable name directly. While there isn't another way to change a string or number variable other than reassignment for example, you can change the properties of an object.

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

// Print out the value of favoriteFood
console.log(myObj.favoriteFood);

// Change the value of favoriteFood
// This works because we are not accessing the value directly through the use of the value name
myObj.favoriteFood = "Brocolli";
console.log(myObj.favoriteFood);
```

# Which variable declaration is best and which should I use?

I read an article from [Wes Bos](https://wesbos.com/javascript/01-the-basics/variables-and-statements/#differences-between-var-let--const) and I like his advice:

1. Use the `const` keyword to declare variables by default unless you know that your variable will need to have its value changed (use `let` in that case).
2. Use the `let` keyword to declare a variable if you know its value will change (like an iterator for example).
3. Unless necessary for a special case, avoid using the `var` keyword for variable declaration.

# Summary: Difference between variables declared with "var", "let", and "const" keywords:

**`var`**

- Scope:
  - Global
  - Function
- Able to be redeclared?
  - Yes
- Able to be reinitialized?
  - Yes

**`let`**

- Scope:
  - Global
  - Block
- Able to be redeclared?
  - No
- Able to be reinitialized?
  - Yes

**`const`**

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
