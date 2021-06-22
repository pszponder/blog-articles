/**
 * Define and access variables in the global scope
 */

// Define Variables in the global scope
var vGlobal = "I was defined in the global scope using the var keyword";
let lGlobal = "I was defined in the global scope using the let keyword";
const cGlobal = "I was defined in the global scope using the const keyword";

// Access the variables defined in the global scope from the global scope
console.log("Accessing vGlobal from global scope: ", vGlobal);
console.log("Accessing lGlobal from global scope: ", lGlobal);
console.log("Accessing cGlobal from global scope: ", cGlobal);

/**
 * Define and access variables in a function scope
 */

// Define a function to access the global variables inside a function (function scope)
function functionScope() {
  // Access global variables from within functionScope
  console.log("Accessing vGlobal from within function scope: ", vGlobal);
  console.log("Accessing lGlobal from within function scope: ", lGlobal);
  console.log("Accessing cGlobal from within function scope: ", cGlobal);
}

// Run functionScope function
functionScope();

/**
 * Define and access variables within a block scope
 */

// Access the global variables from within block scope
{
  // Access
  console.log("Accessing vGlobal from within block scope: ", vGlobal);
  console.log("Accessing lGlobal from within block scope: ", lGlobal);
  console.log("Accessing cGlobal from within block scope: ", cGlobal);
}

// console.log("first");
// var x = 1;
// console.log(x); // 1

// console.log("second");
// var x = 2;
// console.log(x); // 2

// function myFunc() {
//   console.log("running function contents");
//   // Access x variable from the global scope
//   console.log(x); // 2

//   console.log("defining x as 3 inside function");
//   // Re-declare x variable
//   var x = 3;
//   console.log(x); // 3
// }

// myFunc();

// console.log("third");
// // Access the x variable which was re-defined in the function
// console.log(x); // 3

// var x = 1;
// console.log(x);

// function myFunc() {
//   console.log(x);
//   // x = 3;
//   console.log(x);

//   var x = "hi";
//   // console.log(x);
//   // var y = 2;
//   // console.log(y);
// }

// myFunc();
// console.log(x);
// // console.log(y);

// console.log(x); // Returns undefined
// var x = 1;
// console.log(x); // Returns 1

function myFunc() {
  // Declare a variable inside myFunc's funciton scope
  let x = 1;
  console.log(x);

  if (true) {
    // This is not part of the function scope, it is part of the block scope
    let y = 2;
    console.log(y);
  }
}

// Call the function
myFunc();

// Attempt to access x outside of the function scope is not possible
console.log(x); // Uncaught ReferenceError: x is not defined
