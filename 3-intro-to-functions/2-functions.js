

/*
  Alright, let's talk functions. So many things to go over here!

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

  Functions use the keyword return, which stops loop and function activity and returns the value.
  Using return is the only way to get a value from a function!

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return


  A function is created using the keyword function, like this:

  var add = function (param1, param2) { //parameters in parentheses
    
    return param1 + param2; //everything between the curly braces is part of our function body.

  }; // This is an anonymous function expression assigned to a variable

  You can also create a named function like this:

  function add(param1, param2) {
    
    return param1 + param2;

  };  // This is a named function.

  Remember from our talk, the parameters for the function are just variables, or placeholders for the values that are passed in when the function is invoked.

  Invoking a function is done like:
  add(2, 2); // returns 4

  When we invoke (or call) our function, we pass in the values that will replace the parameters. Those values we pass in are called arguments.

  We use the name of the function (or variable it was assigned to), and follow it with parentheses. If the function takes any arguments, we pass them in via those parentheses.

  The last word for now on functions is that a function is the only way to create a local scope (in ES5). Go ahead and try it if you don't believe me.
  Make a function, any function in your console. Inside of that function, assign a variable, and try to access it somewhere else.

  function someFunc() {
    var a = 1;
  };
  a; // returns a is undefined, because it's not available in the global scope! It's only available within the scope of the function someFunc.
*/

// If you need a hand making the tests pass, give a holler. Functions can be tricky to get down, but once you get them you'll love them.



