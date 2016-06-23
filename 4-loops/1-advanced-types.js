/*
  In this section we are going to learn some more advanced data types.
  The first is called an array in javascript, it may have another name in other languages.

  An array is a list of values seperated by commas wrapped in square brackets.
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

  So there are two ways to create an array. Try using them both in this section. You can look into constructor functions on your own, they are outside of the scope of this class.

  We are going to be using array literal syntax, which goes like so:
  var b = ['list', 'of', 'vaules']; 

  
*/

// Use the space below to create a couple of arrays, and make sure to assign them to the variables that the tests are looking for! Give them as many or as few values as you'd like for this one.

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*

  So what if we want to access a specific value in the array?
  That brings us to the next cool thing about arrays (and there are a lot of them!). This is actually a similarity they share with strings.

  Arrays (and strings) are numerically indexed, starting at 0.
  That's confusing!
  Well hold on, let's look at it in more detail.

  Numerically means we use numbers.
  Indexed means that the values have a numerical 'pointer' associated with them.

  Indexing starts at 0 in javascript, (in computer science in general we start counting with 0).

  Still confused? That's alright, there's an example below to help you.
*/
// Indexes are :  0 ,  1,   2,   3,   4,   5,   6,   7
var testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//Same with strings!
var testString = 'this is a string';
// Indexes are :  0123456789 etc.

/*
  So what if we want to access a specific value in the array or a string?
  We use what we call bracket notation, like so:

  testArray[0];

  We can also over-write values in an array, or assign new values extending the array (or string) using bracket notation!
*/

// For this next section, access the values from testString and testArray and assign them to the variables described in the tests.
var arr = ['1', '2', '3']
var arr1 = ['1', '2', '3']
var arr2 = ['1', '2', '3', '4', '5']

var val1 = testArray[0];
var val2 = testString[2];
var val3 = testArray[6];
var val4 = testString[12];
var val5 = testArray[4];
var val6 = testArray[3];
var val7 = testString[7];


/*
  In this next section, we are going to talk about one of the most important types in JS.
  Objects.

  An object is a collection of key value pairs wrapped in curly braces. 

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

  (They go by other names in other languages.)
  Let's see an example

  var obj = {
    first: 1,
    second: 2,
    third: 3,
    aString: 'this is a string in an object',
    aBoolean: true,
    anotherBoolean: false,
    thisOneIsNull: null,
    thisIsUndefined: undefined,
    anArray: ['a', 'b', 3, 5, true, null],
    aFunc: function() {
      return 'this is a method on the obj object';
    }
  };

  There is a lot going on in our object, yeah?
  Notice that the key is on the left side of the colon, and the value is on the right side.
  If there is more than one key/value pair, they are seperated by commas.
  Notice that the last value doesn't have a comma trailing it, as there isn't another following pair!
  Any data type can be held in an object (or an array, for that matter!).
*/

// For this first section on objects, assign a variable called myObj an object.
// Give myObj the following keys:
// myName with a value of a your name in a string
// myCity with a value of a your city in a string
// myAge with a value of your age as a number
// myTruth with a boolean (do you like js so far?)
// myMusic with a value of an array that has your four favorite bands as values.
// myFunc with a value of a function, which when invoked returns true.

var myObj ={
  myName: 'James',
  myCity: 'HongKong',
  myAge: 23,
  myTruth: true,
  myMusic: ['the script', 'maroon 5', 'all-time-low', 'passenger'],
  myFunc: function sayTrue(){
    return true;
  }
};

var myCity = myObj.myCity;
var myName = myObj.myName;
var myAge = myObj.myAge;
var myMusic = myObj.myMusic;
var myFunc = myObj.myFunc;



// Did you remember your semi-colon at the end of the object?
/*

  var anObj = {
    key: 'value'
  };  // <---- That semi-colon right there!

*/

// Well done! We are going into the realm of some really tricky stuff, so don't worry if it's taking a little longer to get this section down.
/*
  Now, let's look at how to access values from an object.

  Here's a link from w3schools, in case MDN was a bit difficult to digest.

  http://www.w3schools.com/js/js_objects.asp

  Essentially there are two ways to access values in an object.
  The first is "dot notation" :

  myObj.myName // would return that string

  The second is "bracket notation" :

  myObj['myFunc'] // would return the myFunc method (function on an object).
*/

// Try using both ways to access the values from myObj.
// Discuss with your partner which method you prefer and why.
// For this section, assign a variable with the same name as a key from myObj the same value from myObj.
// So to use the example object from above, do something like:

// var key = anObj.key;

// and not like: 

// var key = 'value';

// Let the computer do the work for you!





/*
  Ok, so it was briefly touched on in the last section. A function within an object can be called a method.
  Why?
  Because.... (get ready for it)
  Everything in js is an object!
  Wait, didn't we just spend time going over all of these data types? Then how is everything an Object? 
  Read about it via one of the links above, or wait, and we'll go into it after we discuss loops!
*/



