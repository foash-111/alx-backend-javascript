ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript language specification. It introduced many new features to JavaScript, making the language more powerful and easier to work with.

New Features Introduced in ES6
Let and Const: Block-scoped variables and constants.
Arrow Functions: Shorter syntax for function expressions.
Template Literals: String literals allowing embedded expressions.
Destructuring Assignment: Unpacking values from arrays or properties from objects into distinct variables.
Default Parameters: Default values for function parameters.
Rest and Spread Operators: Easier handling of function parameters and array elements.
Classes: Syntactic sugar over JavaScript's prototype-based inheritance.
Modules: Support for importing and exporting functionalities.
Promises: A better way to handle asynchronous operations.
Iterators and Generators: Custom iteration protocols.
Symbols: A new primitive data type.






-------------
Before ES6, methods were defined using function expressions like this:

const obj = {
  myMethod: function() {
    console.log('Hello, world!');
  }
};
With ES6, you can define methods more succinctly by omitting the function keyword:

const obj = {
  myMethod() {
    console.log('Hello, world!');
  }
};
