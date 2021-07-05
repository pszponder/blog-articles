# Control Flow in JavaScript: Conditional Statements

This article is part of my Control Flow in JavaScript Series.

In this article, we will be discussing conditional statements.

## What is Control Flow and why do we need it?

_["In computer science, **control flow** is the order in which individual statements, instructions, or function calls are executed / evaluated.](https://en.wikipedia.org/wiki/Control_flow)_"

Instead of always executing instructions linearly, often times in programming, there will be more than one possible option that can be executed, depending on the current conditions.

This results in the need to have ways to be able to branch a decision into 2 or more options, and even loop back in certain cases.

Conditional statements enable a program to select one out of 2 or more possible execution paths depending on the current conditions.

Loops on the other hand enable the program to repeat a piece of code for a specified (or unspecified) amount of time.

## Truthy and Falsy

Before diving into conditional statements, let's understand "truthyness" and "falsyness" of values in JavaScript.

Just like how a bit in memory either only evaluates to 1 or 0 (true or false), each value in JavaScript evaluates to either true or false in a boolean context.

A value which evaluates to _true_ in a boolean context is considered **truthy**. Most values in JavaScript are **truthy**. Per the Mozilla Developer Network, "all values are truthy unless they are defined as **falsy**."

A value which evaluates to _false_ in a boolean context is considered **falsy**.

List of all values in JavaScript which are **falsy** (evaluate to _false_):

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

NOTE: See the [MDN Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) webpage for more information.

## Comparison Operators

Comparison operators are in boolean statements which evaluate to either true or false depending on the conditions that are on both sides of the comparison operator.

Types of Comparison Operators:

- `==` (loose equality)
- `!=` (negation of loose equality)
- `===` (strict equality)
- `!==` (negation of strict equality)
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

Examples of Comparison Operators:

```js
let x = 1;
let y = 2;
console.log(x == y); // false
console.log(x != y); // true
console.log(x === y); // false
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
```

## Logical Operators

Logical operators are most commonly used to link multiple boolean comparison statements and return either true or false depending on the conditions.

The 3 most common logical operators are logical AND (`&&`), logical OR (`||`) and logical NOT (`!`).

### Logical AND (`&&`)

Logical AND (`&&`) is used in a boolean statement and evaluates to `true` only when both sides of the statement evaluate to `true`.

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

### Logical OR (`||`)

Logical OR (`||`) is used in a boolean statement and evaluates to `true` as long as one side of the statement evaluates to `true`.

```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

### Short Circuit Evaluation

So what is actually happening "under the hood" when either `&&` or `||` are called to evaluate a boolean expression?

When given an expression to evaluate, both `&&` and `||` will evaluate the left side of the expression to either `true` or `false`. After this, depending if the operator was a Logical AND or OR, either the _original_ left side of the expression is returned or the _original_ right side will be returned. This is referred to `short-circuit evaluation`

`&&` returns the first falsy value / evaluation. If all expressions evaluate to truthy, then the right most value is returned.

```js
// 0 (0 is falsy, everything else is ignored)
console.log(0 && 1 && 2); // 0

// 0 (1 is truthy, so we look at the next value which is 0,
// since 0 is falsy, it is returned, and everything else
// is skipped)
console.log(1 && 0 && 2); // 0

// 0 (1 is truthy, and so is 2, so the next value to the right is 0, which is falsy, it is therefore returned)
console.log(1 && 2 && 0); // 0

// 3 (everything is truthy, return right most item)
console.log(1 && 2 && 3); // 3

// true, (both left and right sides of && first evaluate to
// true, since true on both sides of &&, return true
// (nothing is falsy))
console.log(1 < 2 && 4 > 3); // true
```

`||` returns the first truthy value / evaluation. If expressions evaluate to falsy, then the right most value is returned.

```js
// 1 (0 is falsy, so 1 is evaluated next,
// since 1 is truthy, it is returned and everything else
// is ignored)
console.log(0 || 1 || 2); // 1

// 1 (1 is truthy, so it is returned,
// everything else is ignored)
console.log(1 || 0 || 2); // 1

// 1 (1 is truthy, and so is 2, but since 1 was the 1st
// truthy value, it is returned, and everything is skipped)
console.log(1 || 2 || 0); // 1

// 3 (0 and undefined are both falsy, and 3 is truthy, so
// 3 is returned)
console.log(0 || undefined || 3); // 3

// undefined (since 0, false, and undefined are falsy,
// the right-most falsy value is returned)
console.log(0 || false || undefined); // undefined
```

**NOTE**: Keep in mind, that the way that short circuit evaluation works is that boolean expressions which use comparison operators are first evaluated, then the short circuit evaluation kicks in and takes over. So anything with a comparison operator will evaluate to either `true` or `false` and that is what the logical AND or OR will return.

```js
// returns true (1 < 2 evaluates to true,
// so the value of true is returned)
console.log(1 < 2 || 0); // true

// returns 0 (1 > 2 evaluates to false, so || returns
// the right hand side by default, which is 0)
console.log(1 > 2 || 0); // 0
```

### Logical NOT (`!`)

Logical NOT (`!`) reverses the truthyness or falsyness of the operand that it is in front of. Basically, if something evaluates to true, the logical NOT changes that to false and vice versa.

```js
console.log(!true); // false
console.log(!false); // true
```

## if statement:

The `if` statement evaluates a condition (what's in the parenthesis). When the condition is evaluated to be `truthy`, the `if` statement will run the block of code inside its curly braces.

If the condition is evaluated to be `falsy`, the `if` statement and the contents inside its curly braces are not evaluated and JavaScript moves on with the next statement in the code after the `if` statement's closing curly braces..

```js
// The stuff inside the parenthesis is the condition that
// is used to determine if the contents inside the
// curly braces {} will run or not.
// The condition will either evaluate to be truthy or falsy
if (true) {
  console.log("the if statement has run");
}

if (false) {
  // this code is skipped since the condition in the if
  // statement is false
  console.log("this code will not run");
}
```

## if...else statement:

The `else` portion of the `if...else` statement is an addition to the if statement.

Basically, when the if statement evaluates to `false`, then the block of code which is part of the `if` statement is skipped an the code in the `else` block will run instead.

Since the `else` statement doesn't have a condition to evaluate, it will always run as long as all of the `if` and `else if` statements above it fail (i.e. their conditions evaluate to `false`);

Notice

```js
if (true) {
  // code in if loop will run since it evaluates to true
  console.log("this code will run");
} else {
  // this code will not run when the if statement runs
  // it will only run when the condition in the if
  // statement evaluates to false
  console.log("this code will not run");
}

if (false) {
  // code inside if statement will not run as the condition
  // evaluates to false
  console.log("this code will not run");
} else {
  // code inside else statement will run since the
  // the condition in the if statement is false
  console.log("this code will run");
}
```

## else if statement:

The `else if` statement sits in between the `if` and the `else` statement. You can have as many `else if` statements as you like sandwiched in between the `if` and `else` statement.

The code block for each `else if` statement will only run when the condition inside the `else if` statement evaluates to `true` AND any `if` or `else if` statements above if also evaluated to `false`.

When an `else if` statement runs, any additional `else if` and `else` statements below the current `else if` statements will not run.

```js
const x = 1;
const y = 2;
const z = 3;

if (x < 1) {
  // The condition in this if statement is false,
  // so this if statement will not run
  console.log(x, "< 1");
} else if (x === y) {
  // The condition in this else if evaluates to false
  // so this else if statement will not run
  console.log(x + "=" + y);
} else if (x === 1) {
  // This is the first condition that evaluates to true
  // it will run
  console.log("x = 1");
} else if (y === 2) {
  // while the condition in this else if statement is true
  // the else if statement above was also true and was
  // evaluated first. Since there was already a statement
  // which evaluated to true and ran, no other statements
  // below it will run, including this else if statement.
  console.log(
    "this code will not run because the else if block above ran first"
  );
} else {
  console.log(
    "this code will not run because a previous else if statement executed successfully"
  );
}
```

## switch Statements:

Switch statements work a little differently than if loops. Instead of evaluating a condition to either true or false, the switch statement accepts an expression and then looks for the value of that expression in one of its `case`.

You can have as many `case` conditions as you want inside a switch statement.

When a switch statement identifies a matching `case`, the switch statement will run all of the contents inside that `case` as well as any other code below it, including other `case` conditions.

If a matching `case` is not identified, then the default case is run (assuming it is the last condition in the switch expression).

To avoid running more than one case, it is best practice to add a `break` statement as the last line in each of the `case` statements. This will cause the switch expression to exit once it runs into the `break` statement.

Here is the syntax used to write a switch statement, provided by [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch):

```
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ... // you can have as many cases as you want
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

Here is an example of a switch statement, also provided by [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch). Depending on the value of `expr`, there are a few different things that could happen.

If `expr` is `Oranges`:

- "Oranges are $0.59 a pound." will print out to the console.
- The break statement will trigger and prevent anything else below the current `case` from executing.

If `expr` is `Apples`:

- "Apples are $0.32 a pound." will print out to the console.
- The break statement will trigger and prevent anything else below the current `case` from executing.

If `expr` is `Bananas`:

- "Bananas are $0.48 a pound." will print out to the console.
- The break statement will trigger and prevent anything else below the current `case` from executing.

If `expr` is `Cherries`:

- "Cherries are $3.00 a pound." will print out to the console.
- The break statement will trigger and prevent anything else below the current `case` from executing.

If `expr` is `Mangoes`:

- The case in `Mangoes` will run, there actually isn't anything inside this case, however, there also isn't a break statement, so everything below the `Mangoes` case will also run (the `Papayas` case in this case)

If `expr` is `Papayas`:

- "Mangoes and papayas are $2.79 a pound." will print out to the console.
- The break statement will trigger and prevent anything else below the current `case` from executing.

If `expr` is none of these:

- The default case will run
- 'Sorry, we are out of ' + expr + '.' will run in the console, replacing `expr` to whatever you had it set to.

```js
const expr = "Apples";

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
```

To see what happens for all of the cases above, I modified the above code to loop through an array that contains all of the case options.

```js
const expr = [
  "Oranges",
  "Apples",
  "Bananas",
  "Cherries",
  "Mangoes",
  "Papayas",
  "Steak",
];

for (const item of expr) {
  switch (item) {
    case "Oranges":
      console.log("Printing results of 'Oranges' case:");
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Printing results of 'Apples' case:");
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Printing results of 'Bananas' case:");
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Printing results of 'Cherries' case:");
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
      console.log("Printing results of 'Mangoes' case:");
    case "Papayas":
      console.log("Printing results of 'Papayas' case:");
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log("Printing results of 'default' case:");
      console.log("Sorry, we are out of " + item + ".");
  }
}

console.log("Is there anything else you'd like?");
```

Here is what gets printed to the console:

```
Printing results of 'Oranges' case:
Oranges are $0.59 a pound.
Printing results of 'Apples' case:
Apples are $0.32 a pound.
Printing results of 'Bananas' case:
Bananas are $0.48 a pound.
Printing results of 'Cherries' case:
Cherries are $3.00 a pound.
Printing results of 'Mangoes' case:
Printing results of 'Papayas' case:
Mangoes and papayas are $2.79 a pound.
Printing results of 'Papayas' case:
Mangoes and papayas are $2.79 a pound.
Printing results of 'default' case:
Sorry, we are out of Steak.
Is there anything else you'd like?
```

## The Conditional Operator

The Conditional Operator is essentially a shortcut to performing an if...else loop. You will also see the conditional operator called a _ternary_ operator.

Instead of writing the if else loop, what you do is write the condition to be used to evaluate the truthyness (or falsyness), then add a questions mark followed by an expression to run if the condition is true, a colon (:), and then another expression to run if the condition evaluates to false.

Below is the syntax used by the conditional operator:

```
(condition) ? expressionIfTrue : expressionIfFalse
```

Basically, if the condition in parenthesis (to the left of the question mark) evaluate to true, then the expression to the left of the colon is returned. If the condition evaluates to false, then the expression to the right of the colon is returned.

```js
let x = 1;
let y = 2;

let a = true ? x : y;
console.log(a); // 1

let b = false ? x : y;
console.log(b); // 2

// Logs "Hi" to the console
let c = 30 < 60 ? console.log("Hi") : console.log("Goodbye");

// Logs "Goodbye" to the console
let d = 30 > 60 ? console.log("Hi") : console.log("Goodbye");
```

## Summary:

## Resources:

- [MDN - Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN - Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [MDN - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN - Logical NOT (!)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
- [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN - Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Wikipedia - Control flow](https://en.wikipedia.org/wiki/Control_flow)
- [Wikipedia - Conditional (computer programming)](<https://en.wikipedia.org/wiki/Conditional_(computer_programming)>)
- [Eloquent JavaScript, 3rd Edition: Chapter 02, Program Structure](https://eloquentjavascript.net/02_program_structure.html)
- [Javascript.Info: Logical Operators](https://javascript.info/logical-operators)
- [Javascript.Info: conditional branching: if, '?'](https://javascript.info/ifelse)
