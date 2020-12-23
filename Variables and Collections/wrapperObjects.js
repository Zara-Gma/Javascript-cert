//String, boolean, and number data types cannot contain properties. However, each of these data types has an Object wrapper class which allow them to contain properties.

//This example shows using the object wrapper class of the number data type:

//A numeric "amount" variable is initialized
let amount = 5123.434;

//The variable is converted to an Object of the type Number just before toFixed() is called
amount.toFixed(2);

//Alternatively, the wrapper object can be instantiated as below but is not necessary
let amount2 = new Number(5123.434);

//The typeof keyword returns the type of the value. 
//The instanceof keyword returns true of a value is an instance of an object

console.log(typeof amount); //"number"
console.log(amount2 instanceof Number); //true