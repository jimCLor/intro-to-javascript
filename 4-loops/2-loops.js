  // Great job! We've been covering a lot of material, super quickly.
  // Take a moment to be proud of yourself!

/*
  In this section we will be covering loops. Loops!
  Loops are great because they run the code block (everything inside of the curly braces that follow the loop declaration) once per iteration.
  Ok, I guess we need to define some terms.
*/

/**************** Necessary Definitions *********************/
// Iterate -
// Iteration - 
// Increment - 
// Decrement - 


// We also need to go over different ways to change a numerical value!


// We will be covering three kinds of loops.
  // LINK

  // for
  // for in
  // while


// Let's dive right in with the for loop!


/************* Here's the syntax 

  for (initializeCounter, conditionToCheck, IncrementOrDecrement) {
    // magic happens here!
    // jk, it's not magic.
    // The code in this block will run once per iteration
  }
  

**********************/

// So if, for example, I wanted to log the numbers 1 - 10 (inclusive) to the console
// rather than writing 10 console.log statements with each number in it (boring!)
// I could use a loop! Try uncommenting lines 43 - 47 to see it in action!

// // create loop, with counter starting at 0, increment by 1 until 10 is reached
// for (var i = 1; i <= 10; i++) {
//   // log the current number to the console
//   console.log(i);
// }


// A couple of small things before we get our hands dirty. Remember, variables can be named whatever you like them to be.
// Using i or count as variable names for the counter in loops is a tradition, not a requirement.

// BEWARE THE INFINITE LOOP!


// Our first set of loop tests are going to look for numbers. 
// Don't cheat yourself and just assign the variable the answer!
// Use a for loop to get the desired value into the target variable.
// Here's an example:

// forExample should have the values 0 - 10 added to it.
var forExample = 0;
for (var i = 0; i <= 10; i++) {
  forExample += i;
}

// for1 should have the values 0 - 9 added to it.
var for1 = 0;



// for2 should have the values 9 - 22 added to it
var for2 = 0;

// Remember the different ways to change a numerical value? Well, they're going to start getting handy right about now!

// for3 should have only even values from 0 - 10 added to it!
var for3 = 0;

// for4 should have the numbers 0 - -100 added to it
var for4 = 0;

// use a for loop to assign for5 the sum of the values in forArr
var for5 = 0;
var forArr = [10, 29, 33, 8];



/********************** While loops 

So for this section we are going to use the skills we've already accumulated with
creating functions, assigning values to variables and using scope to our advantage 
while (hehe) learning about while loops.

Syntactic example time!

  while (condition) {
    // run code in this block
  }

A while loop runs while the condition is true. So we can use them for regular iterations
like we did with the for loop, or we can use them to *purposefully* create an infinite loop, as in:
  while (true) {
    // this code would run forever because true == true
  }

In order to use a while loop iteratively, you need to declare a variable to maintain
track of your iterations (don't forget to incrementdecrement your counter as appropriate!)

**********************************/













// Alright, that wasn't so bad, right?

 /*
  For this section, we need to take a closer look at strings.
  First, take a moment to familarize yourself with escape characters.
-----LINK TO ESCAPE CHARACTERS


  We will be using the new line character, which is \n (when in a string only, of course).
  
  We will also be using string concatenation (sp?)
  That is when you take two or more strings and put them together into one string.
  There are several ways to do it, we will use the + operator
----LINK TO STRING CONCATINATION
*/