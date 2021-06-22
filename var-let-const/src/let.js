// Define variable using let in the global scope
let l = "I was defined in the global scope using the let keyword";
console.log("Printing l in global scope: ", l);

// Create a function to show that global variables can be accessed inside the function scope
// Create a variable in the function scope
function functionScope() {
  // Test access to the global variable within the function scope
  console.log("Printing l in function's scope: ", l);

  // Define new variable using let inside the functions scope
  let l2 = "I was defined within the function's scope using the let keyword";
  console.log("Printing l2 in function's scope: ", l2);
}

// Create a function to demonstrate block scope
function blockScope() {
  // Define a variable using let in the block scope
  {
    let l3 = "I was defined within a blockscope using the let keyword";
    console.log("Accessing l3 within block scope: ", l3);
  }
  // Try to access the variable outside of the block scope
  console.log("Accessing l3 outside of block scope: ", l3);
}

// Call the functionScope() function
functionScope();

// Call the blockScope function
blockScope();

// Test access to variable l2 outside of function scope where it was defined
console.log("Printing l2 outside of functionScope function: ", l2);
