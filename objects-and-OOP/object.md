# Objects and OOP in JavaScript: Introduction to Objects

This article is an introduction to my "Objects and OOP in JavaScript" series. In this article, I will be discussing the object data type, what it is, how it is created, how to access it, and how to manipulate it.

# The Object Data Type:

- An object is a collection of key-value pairs.
- An object can contain any type of data (numbers, booleans, strings, arrays, other objects, etc.).
- The object can also store functions inside of it which can be accessed and called at a later time.
- Data inside an object is retrieved by referencing the key associated with the particular value we want to access.
  - Because of this, an object is not considered iterable as the values in the object don't have an index.
  - Data inside an object is unordered.

Example of an Object:

```js
let myObj = {
  firstName: "Jane",
  lastName: "Doe",
  favoriteColor: "green",
  favoriteNumber: 42,
  favoriteBookSeries: ["The Hobbit", "Lord of the Rings", "Harry Potter"],
  likesToDance: true,
};
```

## Key - Value Pairs

Unlike arrays whose element's are stored and accessed via an index, values in objects are stored with what is called key-value pairs.

For each `value` stored in an object, there is an accompanying `key` that can be used to access the value. When writing a key-value pair in a JS object, the key and value are separated by semicolons with a comma after the key-value when there are more key-value pairs in the object.

```js
let myObject = {
  key: value,
  key2: value2,
  key3: value3,
};
```

**NOTE:** The key is typically written without quotes but if your key will contain spaces, dashes or other characters other than letters and numbers, you will need to enclose the key with quotes.

```js
let myObject = {
  key: value,
  "my-key": value2,
  "this is my key": value3,
  "
};
```

## Properties

In an object, a key-value pair can either represent a `property` or a `method`. This derives from Object Oriented Programming where an object is a representation of a "thing" that has certain characteristics and can do stuff. A `property` of the object represents a characteristic of the object.

For example, if we make a car object, what are its attributes / characteristics? Well, a car has an engine, it has a color, it has a make and a model number, it has a certain amount of wheels, it has a total occupancy limit, it has a top speed. The list can go on and on. The point is that `properties` describe the object, they are the characteristics of the object.

Example of the car object:

```js
let car = {
  make: "toyota",
  model: "avalon",
  hasEngine: true,
  color: "red",
  wheels: 4,
  occupancy: 5,
  topSpeed: 100,
};
```

## Methods

Continuing with the conversation of the car object, we have discussed how properties are used to describe attributes or characteristics of the object. So what do methods do?

`Methods` are functions that belong to the object. These methods can be accessed though the object to do various sorts of things. To write a `method`, we assign an anonymous function to the value of a key-value pair.

For the car example, let's add a function that will return a string when called.

```js
let car = {
  make: "toyota",
  model: "avalon",
  hasEngine: true,
  color: "red",
  wheels: 4,
  occupancy: 5,
  topSpeed: 100,

  startEngine: function () {
    console.log("Vroom");
  },

  pressHorn: function () {
    console.log("Beep beep");
  },
};

// Access the startEngine function
car.startEngine(); // Logs "Vroom" to the console

// Access the pressHorn function
car.pressHorn(); // Logs "Beep beep" to the console
```

## `this` keyword:

The `this` keyword is used in objects to reference that particular `instance` of the object. When a function with the `this` keyword is used and the function is a method of an object, `this` will refer to the object which the method is being called on.

In the below example of the wizard object, there are two methods. Instead of just trying to access the inventory in the "checkInventory()" function for example, we access the inventory of the current object using the `this` keyword. Using the `this` keyword tells JavaScript that it needs to access the inventory key-value pair of the current object it is accessing (wizard in this case).

```js
let wizard = {
  element: "fire",
  damage: 10,
  spell: "fireball",
  intelligence: 90;
  inventory: ["staff", "scroll", "magic potion"],

  checkInventory: function () {
    console.log("Checking Inventory...");
    for (const item of this.inventory) {
      console.log(item);
    }
  },

  castSpell: function () {
    console.log("Wizard casts: ", this.spell);
  },
};

wizard.checkInventory();
/*
Checking Inventory...
staff
scroll
magic potion
*/

wizard.castSpell(); // Wizard casts: fireball
```

This may not seem important right now but once we start talking more about objects in the context of OOP and having multiple instances of the same class, it will make more sense why we want to use the `this` keyword.

**NOTE:** There are actually two different items that the `this` keyword actually represents.

- When `this` is used as part of a method inside the object, it references the object which that method is being called on.
- When `this` is called in a function outside of an object (a function which does not belong to the object itself), it references the global `window` object in the browser.
- Another important note to make is that an object can have a method which references a callback function. That callback function is not necessarily a method of the object itself and use of the `this` keyword in the callback function might actually reference the global window object, not the properties of the object.

# Primitive vs Reference Values in JavaScript:

Every value in JavaScript has one of two types, it is either a `primitive` type or it is a `reference` type.

## Primitive Data Types:

A `primitive` data type is defined as any data that is not an object and does not have any methods.

There are 7 primitive data types in JavaScript:

- number
- string
- boolean
- undefined
- null
- symbol
- bigint

A primitive value is `immutable`, which means that it's data cannot be changed or altered.

**NOTE:** When we reassign a variable with a primitive data type, we are actually assigning a new value in memory to the variable, we are not changing the original piece of data in memory which the variable referenced.

As an example, if I have a variable called `myVar` and I set it's initial value to `"hello"` and then reassign that value to `"goodbye"`, what is happening is that the `myVar`
variable is now pointing to a new location in memory with the value of `"goodbye"` instead of the original location in memory which stored `"hello"`. The location in memory which stored `"hello"` was not altered in any way.

Another important thing to understand is that when we copy a primitive data type to a new variable, an actual copy is made. In the example below, if we create a new variable called `myVar2` and assign it to the value of `myVar`, what happens is that the value of `myVar` is copied to a new location in memory and assigned to `myVar2`. So both `myVar` and `myVar2` have their own copies of the `"goodbye"` value in their own locations in memory.

```js
// Initialize the myVar variable
// myVar points to a location in memory which stores
// the value of "hello"
let myVar = "hello";

// myVar is now redirected to a new location in memory
// which holds the value of "goodbye"
// The original value of "hello" in memory was not modified
myVar = "goodbye";

// Copy the value of myVar to a new location in memory
// and assign that copied  value to myVar2
let myVar2 = myVar;
```

Here is another example taken from [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) on how immutable data types work under the hood:

```js
// Declare a string variable and set its value
// equal to "Hello"
let immutableString = "Hello ";

// Append the value of "World" to the current value
// of immutableString
immutableString = immutableString + "World";

/*
What is happening in the line above:
1. The current value of immutableString ("Hello ") is accessed in memory.
2. "World" is appended to the value of "Hello".
3. The new string value "Hello World" is stored in a new location in memory.
4. The variable immutableString now points to the new value of "Hello World" which is in a different memory location than the original value of "Hello ".
*/
```

## Reference Data Types:

All objects are `reference` data types.

Instead of pointing to the actual piece of data in memory, an object variable actually stores an address which then points to the object's value in memory.

So the `reference` refers to the address which points to the location of the object's data in memory.

`Reference` data types (like objects and arrays) work by storing an address to where the data in memory is located. So when you declare an object or array variable, the data itself is not stored with the variable name, instead, a memory address where the data is located is stored with the variable name.

When a variable with a `reference` type value is copied, the value itself in memory is not copied.Instead, the reference to the value in memory is copied. This results in both variables (original and copied) pointing to the same value in memory, their variables hold "references" to the same value in memory.

```js
// =================================================
// Base Case: Copying and Modifying Primitive Values
// =================================================

// Create a primitive type variable
let myString = "hello";

// Create a copy of the primitive type variable
let myStringCopy = myString;

// log both string variables to the console
console.log(`myString:`, myString);
// myString: hello

console.log(`myStringCopy:`, myStringCopy);
// myStringCopy: hello

// Change the value of myString
myString = "goodbye";

// Log both string variables to the console
// Notice how only the value of myString has changed
// The value of myStringCopy is still "hello"
console.log(`myString:`, myString);
// myString: goodbye
console.log(`myStringCopy:`, myStringCopy);
// myStringCopy: hello

// ==================================================
// Copying and Modifying Reference Types with Objects
// ==================================================

// Create an object named myObject
let myObject = {
  key1: "hello",
  key2: "world",
};

// Create an object named myObjectCopy which
// is a copy of myObject
let myObjectCopy = myObject;

// Log both objects to the console
console.log("myObject:", myObject);
// myObject: { key1: 'hello', key2: 'world' }

console.log("myObjectCopy:", myObjectCopy);
// myObjectCopy: { key1: 'hello', key2: 'world' }

// Modify the value of key1 in myObjectCopy
myObjectCopy.key1 = "goodbye";

// Log both objects to the console
// Notice how the value of key1 in both objects has changed
console.log(`myObject:`, myObject);
// myObject: { key1: 'goodbye', key2: 'world' }

console.log(`myObjectCopy:`, myObjectCopy);
// myObjectCopy: { key1: 'goodbye', key2: 'world' }

// ==================================================
// Copying and Modifying Reference Types with Arrays
// (arrays are also reference type values)
// ==================================================

// Create an array called myArray
let myArray = [0, 1, 2, 3, 4, 5];

// Create a copy of myArray
myArrayCopy = myArray;

// Log both arrays to the console
console.log(`myArray:`, myArray);
// myArray: [ 0, 1, 2, 3, 4, 5 ]

console.log(`myArrayCopy:`, myArrayCopy);
// myArrayCopy: [ 0, 1, 2, 3, 4, 5 ]

// Change the value of the 1st element in the original array
myArray[0] = "Hello";

// Log both arrays to the console
// Notice how the 1st element in both arrays has changed
console.log(`myArray:`, myArray);
// myArray: [ "Hello", 1, 2, 3, 4, 5 ]

console.log(`myArrayCopy:`, myArrayCopy);
// myArrayCopy: [ "Hello", 1, 2, 3, 4, 5 ]
```

It is important to understand that everything in JavaScript, other than the primitive values, is considered to be an object and is therefore, a `reference` data type. So `array`s and `map`s for example are also `object`s. If the data that you are looking at has a method attached to it, then it is considered an object.

Reference data types are `mutable` meaning that their values can be changed in memory.

```js
// Create an object named myObject
let myObject = {
  key1: "hello",
  key2: "world",
};

// Update the value of key1 to "goodbye"
myObject.key1 = "goodbye";

// Log myObject to the console
console.log(`myObject:`, myObject);
// myObject: { key1: 'goodbye', key2: 'world' }

/*
What is happening?
1. The object points to data in a location in memory.
2. JavaScript moves to that location in memory and extracts the value associated with key1 ("hello").
3. The value ("hello") is replaced with the new value "goodbye"
4. Changing the value does not change its location in memory.
5. The object is still pointing to the same value in memory as it was prior to the reassignment.
*/
```

# How to Create an Object:

## Using an Object Literal:

## Using the new Object() Constructor Function:

# How to Access Properties and Methods of the Object:

## Dot Notation:

## Square Brackets:

# Iterating Over an Object's Properties:

## for...in loop:

# Summary:

# References:

- [MDN - Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [MDN - Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
- [JavaScript.info - Objects](https://javascript.info/object)
- [Understanding Objects in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript)
- [How to Use Object Methods in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)
- [Programming with Mosh: JavaScript this keyword](https://www.youtube.com/watch?v=gvicrj31JOM)
- [JavaScript Primitive vs. Reference Values](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)
