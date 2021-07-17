# Data Structures in JS: Objects

# Data Structures:

This series of blogs will discuss various data structures in the context of JavaScript. Data structures are different ways to organize data to solve different types of problems.

This article is an introduction to objects. I will be discussing the object data type, what it is, how it is created, how to access it, and how to manipulate it.

# The Object Data Type:

- An object is a collection of key-value pairs.
  - Objects allow us to group related variables and functions together.
- The data stored in objects is unordered, meaning that the order in which you enter the data into the object may not the the same order in which the javascript interpreter retrieves the data.
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

### Method Shorthand:

Instead of declaring an anonymous function, we can actually omit the key-value assignment as well as the function keyword to create an object method using a shorthand technique.

To use the shorthand for declaring an object method, simply write the function name followed directly by parenthesis and then open yp your curly brackets.

```js
// Initialize a wizard object
let warrior = {
  health: 20,
  specialization: "melee",
  attacks: ["headbutt", "slash", "chop", "stun"],
  inventory: ["roast mutton", "sword", "axe"],
  attack: function () {
    console.log("Warrior attacks with...", this.attacks[1]);
  },
  // Use the method shorthand to define the eat() method
  eat() {
    // If roast mutton exists in object's inventory
    if (this.inventory.indexOf("roast mutton") >= 0) {
      // Remove roast mutton
      this.inventory = this.inventory.filter(
        (element) => element !== "roast mutton"
      );
      // Increase health
      this.health += 10;
    }
  },
};

console.log(warrior);
/*
{
  health: 20,
  specialization: 'melee',
  attacks: [ 'headbutt', 'slash', 'chop', 'stun' ],
  inventory: [ 'roast mutton', 'sword', 'axe' ],
  attack: [Function: attack],
  eat: [Function: eat]
}
*/

// Call the eat() method which was defined using the shorthand technique
warrior.eat();
console.log(warrior.health); // 30
console.log(warrior.inventory); // [ 'sword', 'axe' ]
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

To create an object, use either object literals or using the new keyword and the Object() constructor function.

## Using an Object Literal:

To create an object literal (you are "literally" creating the object value) in JavaScript, simply enclose as many (or as little) key-value pairs inside curly braces and assign that to a variable.

````js
let emptyObject = {};

let myObject = {
  key1: "value1",
  key2: "value2",
  key3: 3,
  key4: [4, 5, 6],
};

## Using the new Object() Constructor Function:

Use the `new` keyword accompanied by the Object() constructor function to create a new empty object

```js
let myObject = new Object();

console.log(myObject); // {}
````

# How to Copy and Object using the Spread Operator:

Since objects are reference types, you cannot directly make a "deep copy" of an object by using the equality operator. Trying to do so will result in making 2 objects which reference the same data in memory. This is because when using the assignment operator, the reference to the location in memory where the values are stored are copied, instead of the values actually being copied. Therefore, if the values in either of these 2 objects would change, the change will be visible in both objects.

Example:

```js
// Initialize myFirstObject object
let myFirstObject = {
  greeting: "Hello",
};

// Create a "shallow copy" of myFirstObject and store
// it in mySecondObject
// (mySecondObject points to the same data in memory as
// myFirstObject)
let mySecondObject = myFirstObject;

// Add a property to mySecondObject
// Since mySecondObject is a shallow copy, myFirstObject will
// also reference the sayGoodbye property
mySecondObject.sayGoodbye = "Bye!";

console.log(`myFirstObject:`, myFirstObject);
// myFirstObject: { greeting: 'Hello', sayGoodbye: 'Bye!' }

console.log(`mySecondObject:`, mySecondObject);
// mySecondObject: { greeting: 'Hello', sayGoodbye: 'Bye!' }
```

In order to make a `deep copy` of an object which stores its own copy of all of the values of a copied object, we have to use the spread operator.

The spread operator consists of three dots `...` and works on arrays, strings, objects, and other iterables in JavaScript. The spread operator basically destructures / unpacks the contents of whatever it is called on so that they can be used to create copies using literal expressions such as object literals and string literals.

```js
// Initialize myFirstObject object
let myFirstObject = {
  greeting: "Hello",
};

// Create a "deep copy" of myfirstObject using the spread operator
// myThirdObject stores copies of the key-value pairs of myFirstObject
let myThirdObject = { ...myFirstObject };

// Add a property to myThirdObject
// Since myThirdObject is a deep copy, myFirstObject will NOT contain this property
myThirdObject.sayGoodbye = "Bye!";

console.log(`myFirstObject:`, myFirstObject);
// myFirstObject: { greeting: 'Hello' }

console.log(`myThirdObject:`, myThirdObject);
// myThirdObject: { greeting: 'Hello', sayGoodbye: 'Bye!' }
```

**NOTE 1**: Keep in mind that the spread operator only copies one level down. So if you have a nested object for example, the properties of the copied nested object will still be a reference to the values of the nested object from the original object.

```js
// Initialize myFirstObject object
let myFirstObject = {
  greeting: "Hello",
  nestedObject: { nestedObjectKey: "nested object value" },
};

// Create a "deep copy" of myfirstObject using the spread operator
// myThirdObject stores copies of the key-value pairs of myFirstObject
let myThirdObject = { ...myFirstObject };

// Change the value of the nestedObject
// This value is a reference value
myThirdObject.nestedObject.nestedObjectKey =
  "I changed the nested object value";

console.log(`myFirstObject:`, myFirstObject);
/*
myFirstObject: {
  greeting: 'Hello',
  nestedObject: { nestedObjectKey: 'I changed the nested object value' }
}
*/

console.log(`myThirdObject:`, myThirdObject);
/*
myThirdObject: {
  greeting: 'Hello',
  nestedObject: { nestedObjectKey: 'I changed the nested object value' }
}
*/

// Change the value of the nestedObject property to a string instead of an object
// Since this is at the first level, this change will not propagate through both of the objects.
myThirdObject.nestedObject = "value changed to string from object";

console.log(`myFirstObject:`, myFirstObject);
/*
myFirstObject: {
  greeting: 'Hello',
  nestedObject: { nestedObjectKey: 'I changed the nested object value' }
}
*/
console.log(`myThirdObject:`, myThirdObject);
/*
myThirdObject: {
  greeting: 'Hello',
  nestedObject: 'value changed to string from object'
}
*/
```

**NOTE 2**: The spread syntax is also very useful with functions that take in a list of values, such as `Math.max()`. If you had an array of numbers and you wanted to find the max value in that array, you can use the spread operator to "unpack" the values of the array so that they can be read by the .max() method.

```js
let myArray = [1, 2, 3, 4, 5];
let max = Math.max(...myArray); // same as writing Math.max(1, 2, 3, 4, 5)
console.log(max); // returns 5
```

# How to Access and Change Properties and Methods of the Object:

As with object declaration, there are a few ways to access the properties and methods of objects.

Once a property or method is accessed, it can be changed.

You can also add a new property or method to an object by using the methods below.

## Dot Notation:

Dot notation can be used to access any property or method of an object. It can also be used to modify or even add properties and objects.

To use dot notation, simply write the name of the object, followed by a dot, followed by the name of the key whose value you want to access (or modify).

Using dot notation with a key name that does not exist will add it and the value which you assign to the object.

```js
// Initialize a wizard object
let wizard = {
  health: 5,
  type: "magic",
  specialization: "fire",
  spells: ["fireball", "conflaguration"],
  inventory: ["apple", "scroll", "potion"],
  castSpell: function () {
    console.log("Wizard casts...", this.spells[1]);
  },
};

// Use dot notation to access properties and methods of
// the object
console.log(wizard.health); // 5
console.log(wizard.inventory); // [ 'apple', 'scroll', 'potion' ]
wizard.castSpell(); // Wizard casts... conflaguration

// Use dot notation change the value of the spells array
wizard.spells[1] = "fizzle";
console.log(wizard.spells); // [ 'fireball', 'fizzle' ]

// Use dot notation to add additional properties to the
// wizard object
wizard.mana = 20;
console.log(wizard.mana); // 20

wizard.weapon = "staff";
console.log(wizard.weapon); // "staff"

// Use dot notation to add additional methods to the
// wizard object
wizard.drinkHealthPotion = function () {
  this.health += 5;
  console.log("Health has been restored to...", this.health);
};

// Call the newly added method 2 times
// watch how the value of the health property is updated
wizard.drinkHealthPotion(); // Health has been restored to... 10
wizard.drinkHealthPotion(); // Health has been restored to... 15
```

## Bracket Notation:

Another way to access, modify or add properties to an object is by using square brackets.

In application, this is very similar to using dot notation but instead of using the dot, use square brackets to encapsulate the name of the property key. You also need to wrap the name of the property in strings unless you are entering an iterator in a loop.

In the example below, we are accessing a property of `myObject` called `keyName` and we retrieve the value of "myValue".

```js
let myObject = {
  keyName: "myValue",
  hello: "world",
};

console.log(myObject["keyName"]); // Returns "myValue"
```

When you enter a keyName without quotes to try to access an object's value, JS will actually try to interpret the value of the item placed in brackets and use that value as the key name.

In this 2nd example below, since `keyName` is not wrapped in quotes, JS searches for a value named `keyName` outside of the object and then uses the value assigned to `keyName` as the name of the object property. Since `keyName` is defined as the string `"hello"`, JavaScript accesses the property of the object with a key, `"hello"` which has a value of "world" in `myObject`.

```js
let myObject = {
  keyName: "myValue",
  hello: "world",
};

let keyName = "hello";

console.log(myObject[keyName]); // Returns "world"
```

**NOTE:** Bracket notation cannot be used to access or add object methods.

**NOTE 2:** Sometimes you will find that you have to use bracket notation as dot notation does not always work. If for example, you are looping through the properties of an object using a for loop, `object.iterator` will not work because JavaScript will be looking for a key called `iterator` which does not exist, and you will get `undefined`. When you use brackets, JavaScript interprets the value of what is inside as the actual key name. Take a look a the example below.

Another reason why you would use bracket notation is if the key is in the form of a string (ex. `"my key name": value`).

```js
// Initialize a wizard object
let wizard = {
  health: 5,
  type: "magic",
  specialization: "fire",
  spells: ["fireball", "conflaguration"],
  inventory: ["apple", "scroll", "potion"],
};

// Retrieve and log the value of each property
// of the wizard object using bracket notation
for (const key in wizard) {
  console.log(`${key}: ${wizard[key]}`);
}

// The word "key" inside the brackets is being interpreted
// as the current key name of the iteration
// (i.e. health, type, specialization, etc.)
// Results of running above for loop:
/*
health: 5
type: magic
specialization: fire
spells: fireball,conflaguration
inventory: apple,scroll,potion
 */

// Retrieve and log the value of each property
// of the wizard object using dot notation
for (const key in wizard) {
  console.log(`${key}: ${wizard.key}`);
}

// Notice how all the values are undefined
// This is because JavaScript is looking for a key
// named "key" but it does not exist, so we get
// a value of `undefined` returned instead
// Results of running above for loop:
/*
health: undefined
type: undefined
specialization: undefined
spells: undefined
inventory: undefined
 */
```

## Should I use dot notation or bracket notation?

Use dot notation unless you have to use bracket notation, such as when using a for loop to access the properties of an object using an iterator or if the key name is in the form of a string.

## Accessing object keys using Object.keys():

Using the `Object.keys()` method on an object returns an array containing all of the keys in the object. The keys which are returned as elements in the array are converted to strings.

```js
let myObject = {
  key1: 1,
  key2: "hi",
  key3: [1, 2, 3],
  key4: { myKey: "myValue" },
};

let keys = Object.keys(myObject);
console.log(keys); // [ 'key1', 'key2', 'key3', 'key4' ]
```

## Accessing object values using Object.values():

Using the `Object.values()` method on an object returns an array containing all of the values in the object.

```js
let myObject = {
  key1: 1,
  key2: "hi",
  key3: [1, 2, 3],
  key4: { myKey: "myValue" },
};

let values = Object.values(myObject);
console.log(values); // [ 1, 'hi', [ 1, 2, 3 ], { myKey: 'myValue' } ]
```

## Removing an Object's Properties using the delete operator:

The `delete` operator can be used to remove a property from an object.

The delete operator will return `true` if deletion of the specified property was successful and will return `false` otherwise.

```js
// Initialize a wizard object
let wizard = {
  health: 5,
  type: "magic",
  specialization: "fire",
  spells: ["fireball", "conflaguration"],
  inventory: ["apple", "scroll", "potion"],
  castSpell: function () {
    console.log("Wizard casts...", this.spells[1]);
  },
};

console.log(wizard);
// {
//   health: 5,
//   type: 'magic',
//   specialization: 'fire',
//   spells: [ 'fireball', 'conflaguration' ],
//   inventory: [ 'apple', 'scroll', 'potion' ],
//   castSpell: [Function: castSpell]
// }

console.log(delete wizard.inventory); // returns true
console.log(delete wizard.castSpell); // returns true
console.log(wizard);
// {
//   health: 5,
//   type: 'magic',
//   specialization: 'fire',
//   spells: [ 'fireball', 'conflaguration' ]
// }
```

**NOTE**: There are some technicalities that you should understand about what `delete` can and cannot do. You can see more in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete).

- If the property you are trying to remove does not exist, `delete` will still return `true`. This is because the return value of `delete` is based on if the operation was successful, not whether or not a property exists.
- `delete` only works on properties that belong to the object instance and not ones that exist in the object's prototype chain. So if an object instance has the same property name as a property in the prototype chain and you use `delete` to remove that property from the object instance, the object will just use the property from the prototype instead.

Example of `delete` returning true when trying to delete a property that is not part of the object

```js
// Initialize a wizard object
let wizard = {
  health: 5,
  type: "magic",
  specialization: "fire",
  spells: ["fireball", "conflaguration"],
  inventory: ["apple", "scroll", "potion"],
  castSpell: function () {
    console.log("Wizard casts...", this.spells[1]);
  },
};

console.log(delete wizard.vehicles); // returns true
console.log(delete wizard.pets); // returns true
```

# Iterating Over an Object's Properties:

## for...in loop:

Unlike arrays or strings, the object does not have a built in length method so you cannot iterate over an object's properties using a traditional for loop. You can use a `for...in` loop instead to iterate over properties of an object.

The iterator takes on the value of the object's keys and loops through all of the keys in the object. Remember, since objects don't have an order to them, the properties may not be extracted in the same order that they were written in.

```js
// Initialize a wizard object
let wizard = {
  health: 5,
  type: "magic",
  specialization: "fire",
  spells: ["fireball", "conflaguration"],
  inventory: ["apple", "scroll", "potion"],
};

for (const property in wizard) {
  console.log(`${property}: ${wizard[property]}`);
}

// health: 5
// type: magic
// specialization: fire
// spells: fireball,conflaguration
// inventory: apple,scroll,potion
```

### The Problem with using for...in:

The `for...in` method iterates over ALL enumerable properties of an object which are keyed by strings, _including inherited enumerable properties_ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

# References:

- [MDN - Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [MDN - Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
- [MDN - Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN - delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- [MDN - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [JavaScript.info - Objects](https://javascript.info/object)
- [JavaScript.info - Object methods, "this"](https://javascript.info/object-methods)
- [Understanding Objects in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript)
- [How to Use Object Methods in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)
- [Programming with Mosh: JavaScript this keyword](https://www.youtube.com/watch?v=gvicrj31JOM)
- [JavaScript Primitive vs. Reference Values](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)
- [How to Iterate through an object keys and values in JavaScript](https://attacomsian.com/blog/javascript-iterate-objects)
- [Objects, Prototypes, and Classes in JavaScript](https://attacomsian.com/blog/objects-prototypes-classes-javascript#prototypes)
