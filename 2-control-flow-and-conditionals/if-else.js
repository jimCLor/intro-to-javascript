// These are the varibales you will be using in this section. Rather than scrolling up to find their values, why don't you practice accessing them from the browser's console?
var flowA = false;
var flowB = true;
var flowC = 0;
var flowD = 1;
var flowE = -10;
var flowF = 10;
var flowG = 100;
var flowH = '';
var flowI = 'howdy';
var flowJ = 'javascript';
var flowK = 0;
var flowL = 'javaScript';

/*
  From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions

  "An expression is any valid unit of code that resolves to a value.

  Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluates and therefore resolves to value.

  The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.

  The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable."

  So far we have been working with expressions, now we are going to start working with block statements. 

  From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block

  "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets."

  We are going to use the comparison operators and learn about control flow statements in the next section.

  The control flow is the order in which the computer executes statements. 
  https://developer.mozilla.org/en-US/docs/Glossary/Control_flow  

*/
// The first control flow statements we will use are 'if', 'else if', and 'else'. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// Those statements work like this.
/*
  You can have a block of code run if the condition you check is true by using the if statement.

  if (condition) {
    run this code if condition evaluates to true
  } 

  ------------------------------------------

  You can also have a block of code run if the condition is false by using the else statement.

  if (condition) {
    run this code if condition evaluates to true
  } else {
    run this code if condition is false
  }

  ------------------------------------------

  Finally, you can check multiple conditions, and have seperate blocks of code run if one of them is true.
  Check the first condition with the if statement, then as many other conditions as you like with the else if statement.
  Don't forget to use the else statement at the end whenever you use if/else if, so some code runs in the event that all conditions are false

  if (conditionA) {
    run this code if conditionA evaluates to true
  } else if (conditionB) {
    run this code if conditionB evaluates to true
  } else {
    run this code if all conditions are false
  }

*/
// Let see put that into action!
// The first couple of tests are passing as an example.

// create a variable called flowAnswerA.
var flowAnswerA;
// if flowC is greater than or equal to flowB assign flowAnswerA true. Otherwise asign fAnswerA false.
if (flowC >= flowB) {
  flowAnswerA = true;
} else {
  flowAnswerA = false;
}

// create a variable flowAnswerB
var flowAnswerB;
// if flowB is strictly equal (the same value and type) to flowD assign flowAnswerB true.
if (flowB === flowD) {
  flowAnswerB = true;
}
// create a variable flowAnswerC
var flowAnswerC = flowB == flowC;
// if flowB equals (in a truthy kind of way) flowD assign flowAnswerC true
if (flowB == flowD){
  flowAnswerC = true;
}
// create a variable called flowAnswerD.
var flowAnswerD;
// if flowE plus flowG is bigger than flowG plus flowF, assign flowAnswerD the value of flowG plus flowE. Otherwise assign it the value of flowG plus flowF.
if((flowE + flowG)>(flowG + flowF)){
  flowAnswerD = (flowG + flowE);
} else {
  flowAnswerD = (flowG + flowF);
}
// create a variable called flowAnswerE.
var flowAnswerE;
// if flowA is equal to flowE assign flowAnswerE false. Otherwise assign it true.
if(flowA = flowE){
  flowAnswerE = false;
} else {
  flowAnswerE= true;
}
// create a variable called fålowAnswerF.
var flowAnswerF = (flowE * flowF); 
// assign flowAnswerF the value of flowE multiplied by flowF.
// create a variable called flowAnswerG

var flowAnswerG;
// flowAnswerG should hold the greater of flowAnswerF, and flowG.
if (flowAnswerF > flowG){
  flowAnswerG = flowAnswerF;
} else if (flowAnswerF < flowG){
  flowAnswerG = flowG;
} else {
  flowAnswerG = true;
}
// if they have the same value, then flowAnswerG should have a value of true.


// create a variable called flowAnswerH.
// assign it the value of flowG * negative one.
var flowAnswerH = flowG * -1;
// create a varibale called flowAnswerI
var flowAnswerI;
if(flowAnswerF > flowAnswerG){
  flowAnswerI = true;
} else if (flowAnswerG > flowAnswerF){
  flowAnswerI = false;
} else {flowAnswerI = 'woo hoo!';
}
// if flowAnswerF is greater than flowAnswerG flowAnswerI gets true.
// if flowAnswerG is greater than flowAnswerF flowAnswerI gets false.
// Otherwise flowAnswerI gets 'woo hoo!'