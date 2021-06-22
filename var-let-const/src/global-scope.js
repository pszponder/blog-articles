// Define Variables in the JavaScript Global Scope
var vGlobal = "I was defined in the global scope using the var keyword";
let lGlobal = "I was defined in the global scope using the let keyword";
const cGlobal = "I was defined in the global scope using the const keyword";

// Access the variables defined in the global scope from the global scope
console.log("Accessing vGlobal from global scope: ", vGlobal);
console.log("Accessing lGlobal from global scope: ", lGlobal);
console.log("Accessing cGlobal from global scope: ", cGlobal);

// Define a function to access the global variables inside a function (function scope)
function functionScope() {
  // Access global variables from within functionScope
  console.log("Accessing vGlobal from within function scope: ", vGlobal);
  console.log("Accessing lGlobal from within function scope: ", lGlobal);
  console.log("Accessing cGlobal from within function scope: ", cGlobal);
}

// Run functionScope function
functionScope();

// Access the global variables from within block scope
{
  console.log("Accessing vGlobal from within block scope: ", vGlobal);
  console.log("Accessing lGlobal from within block scope: ", lGlobal);
  console.log("Accessing cGlobal from within block scope: ", cGlobal);
}
