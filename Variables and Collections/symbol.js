//The symbol data type allows creating a unique identifier.
// A symbol value can be created by invoking the Symbol function.
//The following examples show how to declare a variable and initialize it to a Symbol value

//These examples show how to declare a variable and initialize it to a Symbol value

//Initialize a Symbol variable
let name = Symbol();

//A string can be passed to the function as its description
let label = Symbol('label');

//Symbol variables are unique. The following code creates two unique symbols
let field1 = Symbol('field');
let field2 = Symbol('field');

//The conditions below evaluate to false
console.log(field1 === field2);
console.log(Symbol('field') == Symbol('field'));


//Symbols are immutable: Their value remains constant.
//Cannot change the value!!
let field1 = field2; // It will throw an error Identifier 'field1' has already been declared