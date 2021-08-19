# `this` Keyword in JavaScript:

When dealing with objects and functions in JavaScript, you will encounter the `this` keyword. The purpose of this article is to try to explain what `this` is and how it is used.

## What is `this`?

`this` is a keyword which refers to the object which `this` is associated with. The association between `this` and the object is context sensitive and depends to what calls `this` during code execution.

The purpose of `this` is to point to an object so that JavaScript knows which object's properties to access.

## How does `this` work?

## How to change what `this` points to

Since `this` is context sensitive, in order to set what `this` refers to, we have to use the bind method

Use the bind method

```js
// Example from FunFunFunction on bind and this video
let dog = {
  sound: "woof",
  talk: function () {
    console.log(this.sound);
  },
};

dog.talk(); // "woof"
let talkFunction = dog.talk;
talkFunction(); // undefined (because this no longer is part of the dog object, it's free floating, so this actually refers to the global object which does not have a .sound property)
let boundFunction = talkFunction.bind(dog); // bind the this keyword in talkFunction to the dog object
boundFunction(); // "woof", the this keyword in boundFunction is now referencing the dog object and therefore prints woof
```

```js
// more examples from FunFunFunction
function talk() {
  console.log(this.sound);
}

let boromir = {
  speak: talk,
  sound: "One does not simply walk into mordor!",
};

let talkBoundtoBoromir = talk.bind(boromir);

talkBoundToBoromir(); // "One does not simply walk into mordor!"
talk(); // still undefined because "this" references the global object which does not have a sound property

boromir.speak(); // "One does not simply walk into mordor!" (here, since the speak method is being called on the boromir object, "this" references the borormir object and therefore has access to the sound property of borormir)
talk(); // still undefined because "this" STILL references the global object, we have not modified the talk method

let blabber = boromir.speak;
blabber(); // undefined because "this" from the speak method is referencing the global object since blabber() is being called on the global context in this case

boromir.speak = talk.bind(boromir); // bind the "this" keyword in the talk function to the boromir object
let blabber2 = borormir.speak;
blabber2(); // "One does not simply walk into mordor!"
talk(); // undefined since the talk function was not modified, even with the bind function, so "this" references the global object
```

```js
let talk = function () {
  console.log(this.sound);
};

let boromir = {
  blabber: talk,
  sound: "One does not simply walk into mordor!",
};

let gollum = {
  jabber: boromir.blabber,
  sound: "My precious",
};

gollum.jabber(); // "My precious", jabber's value points to boromir.blabber which points to the talk function. Inside the talk function, "this" refers to gollum since jabber was called on the gollum object so the sound property which this refers to is "My precious"
```

Here is an interview question taken from [topal.com](https://www.toptal.com/javascript/interview-questions) regarding the `this` keyword. Can you answer it correctly?

QUESTION: What will the code below output to the console and why?

```js
const myObject = {
  foo: "bar",
  func: function () {
    let self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function () {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    })();
  },
};

myObject.func();
```

## Resources:

- [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [FunFunFunction - bind and this - Object Creation in JavaScript P1](https://www.youtube.com/watch?v=GhbhD1HR5vk&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=2)
- [FunFunFunction - Examples of this and bind - Objec Creation in JavaScript P2](https://www.youtube.com/watch?v=PIkA60I0dKU&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=2)
- [37 Essential JavaScript Interview Questions](https://www.toptal.com/javascript/interview-questions)
