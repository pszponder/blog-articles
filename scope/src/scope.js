// var v = "Variable declared with var keyword";
// let l = "Variable declared with let keyword";
// const c = "Variable declared with const keyword";

// console.log(`Printing v from scope.js file: `, v);
// console.log(`Printing l from scope.js file: `, l);
// console.log(`Printing c from scope.js file: `, c);

let x = 1;

function myFunc() {
  console.log(x);
}

function logVariable() {
  let x = 50;
  myFunc();
}

// What will logVariable() return? 1, 50, something else?
logVariable();
