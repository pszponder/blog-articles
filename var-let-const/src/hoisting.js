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

// Print out the value of favoriteHobby
console.log(myObj.favoriteHobby);

// Change the value of favoriteHobby
// This works because we are not accessing the value directly through the use of the value name
myObj.favoriteHobby = "sleeping";
console.log(myObj.favoriteHobby);
