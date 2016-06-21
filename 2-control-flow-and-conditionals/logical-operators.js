/*
  Ok, so now that we're getting pretty comfortable with conditionals, let's introduce a couple of new operators; 
  the logical operators.

  https://developer.mozilla.org/en-US/search?q=logical+operators 

  && - and operator
  || - or operator
  !  - not operator

  The && (and) operator checks two or more conditions to find if they are true.
  If they all evaluate to true, the block of code will run.

  Here's an example!

  var once = 'once';
  var twice = 'twice';


  if (once && twice) {
    console.log('three times a lady');
  }

  The above code is checking if the variables once and twice are truthy.
  Since they both have a value (which is not
  null or undefinded) we get the message in the console. Neat, huh?

---------------------------------------------

  The || (or) operator checks to see if either condition is true.
  If either is true, the block of code will run.

  Example time!

  var three = 3;
  var nope = false;

  if (nope || three) {
    console.log('something was true!');
  }

  if (false || nope) {
    console.log('one thing was true still!');
  } else {
    console.log('everything was false!');
  }

  As you can see, the or operator evaluates the conditions given one at a time, first the left one, then the right. If either is true, the code in the block runs.

---------------------------------------------


  The ! (not) operator has several uses (other uses for ! will come later). 
  The first is exactly what you're thinking, it allows you to evaluate if something is not true.

  Take another look at the section on operators at MDN, specifically the not operator.
  Remember when we talked about truthy vs true, and falsy vs false in class?
  Discuss it with your partner, and make sure you understand the difference.

  How's about an example you were wondering, right?
  Well here's one now!

  var thisIsTrue = true;
  var thisIsFalse = false;

  if (!thisIsTrue) {
    console.log('what is happening?');
  }

  (since !thisIsTrue evaluates to false, nothing happened!)

  if (!thisIsFalse) {
    console.log('something is happening!');
  }

  (since (!thisIsFalse) evaluates as true, we get out console.log!)

*/

// Use this next section to practice using conditionals with the logical operators.
// Great job by the way, we're really flying through this!


// declare a variable called lOne
// assign lOne a value of true
var lOne = true;
// write an if/else statement that declares a variable named lAOne and assigns it a value of 
// true if lOne is not true, and false otherwise.
var lAOne;
if (lOne !=true){
  lAOne = true;
} else {
  lAOne = false;
}

// declare a variable called lTwo
var lTwo;
// lTwo should get true if lOne or LAOne is true
if (lOne || lAOne){
  lTwo = true;
}
// declare a variable called lThree
// Assign lThree a value of 100
var lThree = 100;

// declare a variable called lATwo.
// if lThree is less than lOne and also less than LAOne lATwo should get true. Otherwise lATwo should get false.
var lATwo;
if ((lThree < lOne) && (lThree < lAOne)){
  lATwo = true;
} else {
  lATwo = false;
}


// declare a variable called lFour
var lFour;
// Still using if/else if/else statements, assign lFour a value of a string with the word true in it 
// if either lATwo or lOne is true.
// if both are false, assign lFour a value of a string with the word false in it.
if (lATwo || lOne){
  lFour = 'true';
} else if (!lATwo && !lOne){
  lFour = 'false';
}

// declare a variable called lFive
// this one will be tricky. Ready?
// write an if statement that checks if lFive is not equal to undefined.
// If lFive is not equal to undefined, then assign it the number 5.
// If lFive is undefined, then assign it the number 10.
var lFive;
if (lFive != undefined){
  lFive = 5;
} else {
  lFive = 10;
}

//Crazy how that worked, right? Well done!
// You just dynamically assigned a variable a value
// based on the current value it had!
// And, we snuck in a reminder that undefined is an actual value type, and how to use the not equals operator! Whoot!


// declare a variable called lSix
// here are your conditions to check (I'm leaving out the words if, so as not to give you an extra hint :)
// Remember, you can group conditions to check within the parentheses using paretheses. For example:
var lSix;
if (lATwo == lThree){
  lSix = 23;
} else if (lOne === lAOne){
  lSix = 11;
} else if (lTwo == lFour){
  lSIx = 24;
} else if (lFour === lOne){
  lSix = 41;
} else if ((lFive + 90) == 110){
  lSix = 110;
} else if (((24 + 26) >=50) && !lOne){
  lSix = 5050;
} else if ( ( 25 +25 == 50) && (lOne != true) ){
  lSix = 252550;
} else {
  lSix = 1010;
}
/* 
   if ( (2 < 0) || (-1 < -100) ) {
      //do some stuff
    } else if ( ( 2 * 2 == 4) && ('coding' === 'fun') ) {
      // do other stuff
    } else {
      // this code would run in this program. Why?
    }

*/
// --------------------- End of example
// does lATwo equal lThree?
  // then assign lSix a value of 23
// does lOne strictly equal lAOne?
  // then assign lSix a value of 11
// does lTwo equal lFour?
  // then assign lSix a value of 24
// does lFour strictly equal lOne?
  // then assign lSix a value of 41
// does lFive + 90 equal 110?
  // then assign lSix a value of 110
// is 24 + 26 greater than or equal to 50 and does lOne equal false?
  // then assign lSix a value of 5050
// is 25 + 25 equal to 50 and does lAOne not equal true?
  // then assign lSix a value of 252550
// otherwise assign lSix a value of 1010