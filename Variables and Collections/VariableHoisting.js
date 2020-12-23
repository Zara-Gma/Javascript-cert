//!Variable Hoisting

/*It is possible to refer to a variable that is declared using var later in teh code, which called hoisting. A hoisted variable returns the value of undefined. However, let and const variables are hoisted but not initialized, which results in a ReferenceError.
*/

//This example shows the effect of variable hoisting

name = 'Astro';

function printName() {
    console.log('Current character is ' + name);
}
printName();

var name; //No error here since the variable is hoisted
let name; //This will throw an uncaught ReferenceError
const name = ""; //This will throw an uncaught ReferenceError
//This example shows the use of strict mode to avoid variable hoisting

"use strict"; //execute code in strict mode

topic = "Process Automation";
