/*
  So did all of those nested if/else if/else statements get a bit hard to read? 
  Well there's another way to write long conditional statements to ease readability.
  Introducing, the switch statement.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  
  From MDN: "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
"
  Which means we also need to introduce the break statement.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
  From MDN: "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement."
*/

// Create the variables that the test is looking for.
// When there are multiple cases to check, use a switch statement instead of nesting if/else if/if!

// Now let's use those switch statements!
// Want an example to check? Got you covered!
/*  
  First, here's the syntax
  
  switch(value) {
  case IF_THE_VALUE_IS:
    // do stuff here
    break;
  case IF_THE_VALUE_IS:
    // do stuff here
    break;
  default:
    // do stuff here
  }  
*/

/*
  And here it is in practice:
  Assume the prompt asks for a string that either says the value spelled out as a word or if the number is greater than 5 then the string should say larger than 5,
  and we are checking the value of a and assigning our 
  string to a variable called s.
  This is how I would do it.
  var s; // declare the variable we are testing
  var a = 9; // Here is the variable we are testing against.
  switch(a) {
  case 1:
    s = 'one';
    break;
  case 2:
    s = 'two';
    break;
  case 3:
    s = 'three';
    break;
  case 4:
    s = 'four';
    break;
  case 5:
    s = 'five';
    break;
  default:
    s = 'larger than 5 and smaller than 1';
  }
*/

// Before we start writing switch statements, let's talk about one of the downsides of using them.
// You can't use comparison operators!
// As in, you can't have a case (5 > 3)
// You have to expressly state the value that you're testing for in a cases.

// For this section, be creative.
// Check the tests to find out what variables are being tested, and what value they need to have.
// Use switch statements, check whatever conditions you'd like.
// Make sure you assign the correct variable the correct value!

 var switch1 = 1;

 var switch2 = 2;

 var switch3 = 3;

 var switch4 = 4;

 var switch5 = switch3 >= switch1;

 var switch6 = switch4 % switch3;

 var switch7 = 