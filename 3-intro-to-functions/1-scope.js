/*
  Ok, so in this section we are going to start going over some of the weird, tricky, and fundamental things in js, as well as some of the best practices to follow as a js developer.

  First, let's discuss scope. Think back to our discussion on the DOM, the global window object and scope.

  Review:

    Here's a great article from sitepoint:
    https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/

    Scope: From W3Schools: "Scope is the set of variables that you have access to"
    http://www.w3schools.com/js/js_scope.asp

    Global Scope: Accessible from anywhere in the program.

    Local Scope: Accessible only in the current function or block (ES6 has block scope).


      ************************
      In the ES6 standard, new ways to declare variables within the current scope have been added. We still aren't using ES6 in this class, but check out

      whenever you're ready to start looking into ES6.
      ************************

    DOM: Document Object Model

    window: Global object set up for you on the DOM (front end only)
*/
/******************** Best Pracices Aside ********

Best pracitces in Javascript dictate that you should not pollute the global scope.
The more globally available variables there are, the more confusing your application will be to build, understand and maintain.
Keep your variables private whenever you can!
Take a moment to reflect on how the types and values section was set up. Discuss with your partner why that section doesn't follow best practices, and brainstorm how it could have been improved.

***********************/
// By now you know the drill. Use the lines below to pass the tests!

var scope1; //assign this variable a string with the definition of scope to pass the test.
// Not sure of the definition? Check http://www.w3schools.com/js/js_scope.asp















