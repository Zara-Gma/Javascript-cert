/* If strict mode is enabled, variables are required to be declared first before they can be used or assigned to a value.Otherwise, an error will be thrown.In the scenario above, the accountName variable will thrown an error as it is used in teh createAccount function without being declared.Whether strict mode is enabled or not, declaring a variable using the var keyword will hoist the variable, or store the variable in memory during the compile phase, such that the variable can be initialized with a value before the instance where it is physically declared in the code. Javascript does not hoist variables that are declared using let or const, so it is recommended to use them to avoid hoisting
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
'use strict'

createAccount('Acme', 'Partner');

function createAccount(name, type) {
    accountName: name;
    accountType: type;
    console.log(accountName + "is an  " + accountType)
}

var accountType;