// Functions and Scope

// Functions are first-class citizens in JavaScript. They are a special type of object that can be invoked. Functions can be assigned to variables, passed as arguments, and returned from other functions. Functions can also be defined inside other functions.

// Function Declaration

function sayHello() {
    return "Hello!";
}

// Function Expression

const sayHello = function () {
    return "Hello!";
}

// Arrow Function

const sayHello = () => {
    return "Hello!";
}

// Arrow Function with Implicit Return

const sayHello = () => "Hello!";

// Function Invocation

sayHello();

// Function Parameters

function greet(name) {
    return `Hello, ${name}!`;
}

greet("Alice");

// Default Parameters

function greet(name = "World") {
    return `Hello, ${name}!`;
}

greet();



// Function Scope

// Variables declared inside a function are only accessible within that function. This is known as function scope.

function greet() {

    const message = "Hello!";

    return message;

}

console.log(message); // ReferenceError: message is not defined

// Block Scope

// Variables declared with let and const are block-scoped. This means they are only accessible within the block in which they are declared.

if (true) {

    let message = "Hello!";

}

console.log(message); // ReferenceError: message is not defined

// Global Scope

// Variables declared outside of a function are considered global variables. They are accessible from anywhere in the code.

const message = "Hello!";

function greet() {

    return message;

}


// Hoisting

// Function declarations are hoisted to the top of the scope in which they are defined. This means you can call a function before it is declared in the code.

sayHello();

function sayHello() {

    return "Hello!";

}

// Function expressions are not hoisted. This means you cannot call a function expression before it is declared in the code.


sayHello(); // TypeError: sayHello is not a function

const sayHello = function () {

    return "Hello!";

}

    // IIFE (Immediately Invoked Function Expression)

    // An IIFE is a function that is executed immediately after it is defined. It is often used to create a new scope for variables.

    ;
(function () {

    const message = "Hello!";

    console.log(message);

})();


// Callback Functions

// A callback function is a function that is passed as an argument to another function and is executed inside that function.

function greet(name, callback) {

    return callback(name);

}

function sayHello(name) {

    return `Hello, ${name}!`;

}

greet("Alice", sayHello);

// Higher-Order Functions

// A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.

function greet(name) {

    return `Hello, ${name}!`;

}