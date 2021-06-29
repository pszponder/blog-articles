// const x = 1;
// const y = 2;
// const z = 3;

// if (x < 1) {
//   // The condition in this if statement is false,
//   // so this if statement will not run
//   console.log(x, "< 1");
// } else if (x === y) {
//   // The condition in this else if evaluates to false
//   // so this else if statement will not run
//   console.log(x + "=" + y);
// } else if (x === 1) {
//   // This is the first condition that evaluates to true
//   // it will run
//   console.log("x = 1");
// } else if (y === 2) {
//   // while the condition in this else if statement is true
//   // the else if statement above was also true and was
//   // evaluated first. Since there was already a statement
//   // which evaluated to true and ran, no other statements
//   // below it will run, including this else if statement.
//   console.log(
//     "this code will not run because the else if block above ran first"
//   );
// } else {
//   console.log(
//     "this code will not run because a previous else if statement executed successfully"
//   );
// }

// const expr = [
//   "Oranges",
//   "Apples",
//   "Bananas",
//   "Cherries",
//   "Mangoes",
//   "Papayas",
//   "Steak",
// ];

// for (const item of expr) {
//   switch (item) {
//     case "Oranges":
//       console.log("Printing results of 'Oranges' case:");
//       console.log("Oranges are $0.59 a pound.");
//       break;
//     case "Apples":
//       console.log("Printing results of 'Apples' case:");
//       console.log("Apples are $0.32 a pound.");
//       break;
//     case "Bananas":
//       console.log("Printing results of 'Bananas' case:");
//       console.log("Bananas are $0.48 a pound.");
//       break;
//     case "Cherries":
//       console.log("Printing results of 'Cherries' case:");
//       console.log("Cherries are $3.00 a pound.");
//       break;
//     case "Mangoes":
//       console.log("Printing results of 'Mangoes' case:");
//     case "Papayas":
//       console.log("Printing results of 'Papayas' case:");
//       console.log("Mangoes and papayas are $2.79 a pound.");
//       break;
//     default:
//       console.log("Printing results of 'default' case:");
//       console.log("Sorry, we are out of " + item + ".");
//   }
// }

// console.log("Is there anything else you'd like?");

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
