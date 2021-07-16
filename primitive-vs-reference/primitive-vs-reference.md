# Primitive vs Reference Types in JavaScript

```
review video from Academind on Primitive vs Reference Values

[https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15942572#announcements](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15942572#announcements)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

Talk about differences between objects and primitive data types

Can’t change value of mutable object so why can we do stuff like string.toUpperCase()

talk about primitive vs reference data types
```

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
