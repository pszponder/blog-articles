# NOTES

"All you need to know about closures is that when you have a function defined inside another function, the inner function has access to the variables and scope of the outer function, even if the outer function finishes executing and those variables are no longer accessible outside of the outer function." (Web Dev Simplified)

"A closure is the combination of a function and the environment / scope within which that function was declared. The environment consists of any local variables that were in scope at the time that the closure was created. In JavaScript, all functions form closures. In other languages, the local variables within a function only exist for the duration of that function's execution. A closure lets you associate some data which is the environment with a function that operates on that data" (freeCodeCamp)

Example of using closure to "emulate" private methods and variables in JS (example by freeCodeCamp)

```js
// Define a function declaration and name it counter
// store the return value of the function in the counter variable
// This function is considered as the outer function in this example
function counter() {
  // Define a privateCounter variable
  // This variable is not accessible by the user once the outer function executes
  // This variable can be considered as a "private" variable
  // This variable is accessible by both the outer function
  // and the changeBy function
  let privateCounter = 0;

  // Create an inner function called changeBy
  // This function is not accessible by the user once the outer function executes
  // This function can be considered as a "private" function
  // This function and its environment (privateCounter variable)
  // will be accessible due to being part of the return of the outer function
  function changeBy(val) {
    privateCounter += val;
  }

  // Return an object which calls the inner changeBy function
  // This object is considered "public" because it and its contents are accessible
  // by the user (the privateCounter variable and changeBy function are considered "private")
  return {
    // Create an increment method by calling the changeBy function
    // The increment method has access to the changeBy() function
    // because changeBy() was part of the increment method's environment during its initialization
    increment: function () {
      changeBy(1);
    },
    // Create a decrement method by calling the changeBy function
    // The decrement method has access to the changeBy() function
    // because changeBy() was part of the decrement method's environment during its initialization
    decrement: function () {
      changeBy(-1);
    },
    // Create a value method to return the value of the privateCounter variable
    // The value method has access to the privateCounter variable because privateCounter
    // was part of the value() method's environment during its initialization
    value: function () {
      return privateCounter;
    },
  };
}

// Call the counter function and store it in the counterResult variable
let counterResult = counter();

// Log the value of the privateCounter variable by calling the value() method on
// the counter variable
console.log(counterResult.value()); // 0

// Call the increment() method to increase the privateCounter value once each time
// increment() is called
counterResult.increment();
counterResult.increment();

// Call the value() method again to access the value of privateCounter
console.log(counterResult.value()); // 2

// Call the decrement() method to decrease the value of privateCounter
counterResult.decrement();

// Call the value() method again to access the value of privateCounter
console.log(counterResult.value()); // 1
```

"closures are functions in JavaScript that can access values outside of their own curly braces. In order to call a function in your code, the javascript interpreter needs to know about the function itself and any other data from the surrounding environment that it depends on. Both the function and the other data outside the function is packaged up in a "closure".

A function that does not depend on any external data is fully enclosed and is not a closure. When the fully enclosed function is called, its call moves to the call stack and the variables that it contains get put in memory. As soon as the function finishes, both the function call on the call stack and the values in memory are removed

In contrast, a function that depends on external data (either within another function's scope or the global context) requires a closure. In order for the interpreter to call this function and also know the values of the free variables that the function depends on, the interpreter creates a closure to store the function and the variables in a place in heap memory.

Unlike the call stack which is a sort of short term memory, items on the heap memory are generally stored for a longer period of time.

So a closure is a function combined with its outer state (lexical environment).

Closures require more memory and processing power than a pure function.

Important uses of closures: data encapsulation
" (fireship)

# Lexical Scoping:

# Lexical Environment:

# How Functions Work in Memory:

## Call Stack:

## Heap:

# Closures:

Closure is a bit tricky to understand. It is the ability to ...

# Resources:

- [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Codesmith - JavaScript the Hard Parts: Closure, Scope & Execution Context](https://www.youtube.com/watch?v=XTAzsODSCsM)
- [Web Dev Simplified - Learn Closures in 7 Minutes](https://www.youtube.com/watch?v=3a0I8ICR1Vg)
- [CSS Tricks - JavaScript Scope and Closures](https://css-tricks.com/javascript-scope-closures/)
- [freeCodeCamp - Closures - Beau teaches JavaScript](https://www.youtube.com/watch?v=1JsJx1x35c0)
- [Fireship - Closures Explained in 100 Seconds](https://www.youtube.com/watch?v=vKJpN5FAeF4)
