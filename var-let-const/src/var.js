var v = "I was defined in the global scope using the var keyword";
console.log("Printing v in global scope: ", v);

function functionScope() {
  console.log("Printing v in function's scope: ", v);

  // Define new variable using var inside the function block's scope
  var v2 = "I was defined within the function's scope using the var keyword";
  console.log("Printing v2 in function's scope: ", v2);
}

// Call the functionScope() function
functionScope();

// Test access to variable v2 outside of function scope where it was defined
console.log("Printing v2 outside of functionScope function: ", v2);
