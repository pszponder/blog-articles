// Testing how slice copies reference values like an object
let mySecondArray = [{ name: "john" }, [3, 4], [5, 6]];
console.log(mySecondArray);

// Create a copy of mySecondArray
let mySecondArrayCopy = mySecondArray.slice();

// Change the object value inside the 1st element in
// mySecondArray
mySecondArray[0].name = "jane";

// Log both arrays to the console
// Notice that both of them have the object value of name
// changed to "jane" from "john", even though we only
// changed it in mySecondArray
// [ { name: 'jane' }, [ 3, 4 ], [ 5, 6 ] ]
console.log(`mySecondArray`, mySecondArray);
console.log(`mySecondArrayCopy`, mySecondArrayCopy);

//
// this code snippet is supposed to test copying an array reference but it appears that the nested array is not a reference value since it does not change in both arrays when changed in one
let arr = [1, [0], 3, 4, 5];
let arrCopy = arr.slice();
arr[1] = "a";
console.log(`arr`, arr); // [ 1, "a", 3, 4, 5 ]
console.log(`arrCopy`, arrCopy); // [ 1, [ 0 ], 3, 4, 5 ]
