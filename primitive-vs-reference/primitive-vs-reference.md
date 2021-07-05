```js
// Shallow copy is copying the reference to the location in memory
// You end up with two references to the same value in memory
// Each new copy contains a reference / pointer to the original value in memory
//
// Deep copy is copying the actual value
// You end up with two values in two different locations in memory
// Each new copy has it's own value in memory with its own pointer in memory

let myArray = [["a"], { letter: "b" }, "c", "d", "e"];
let myArrayCopy = myArray.slice();

console.log("myArray:", myArray);
console.log("myArrayCopy:", myArrayCopy);

myArray[1].letter = "hello";
myArray[0][0] = 200;

console.log("myArray:", myArray);
console.log("myArrayCopy:", myArrayCopy);
```
