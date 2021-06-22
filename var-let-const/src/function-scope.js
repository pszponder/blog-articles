// Define a function to demonstrate the function scope
function functionScope() {
  // Define variables in function scope
  var vFunction = "I was defined in the function scope using the var keyword";
  let lFunction = "I was defined in the function scope use the let keyword";
  const cFunction =
    "I was defined in the function scope using the const keyword";

  // Access the defined variables inside the function scope
  console.log("Accessing vFunction from within function scope: ", vFunction);
  console.log("Accessing lFunction from within function scope: ", lFunction);
  console.log("Accessing cFunction from within function scope: ", cFunction);
}

// Call the functionScope function
functionScope();
