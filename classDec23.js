const Bike = function (s) {
  this.s = s;
}

let b = new Bike(1);
console.log(Bike); //function
console.log(b); //object 
console.log(b.s); //1


//! #2
const Bike = function (s) {
  this.s = s;
}

Bike.prototype.changeGear = function (up) {
  this.s += up;
}

let b = new Bike(1);
b.changeGear(5);

console.log(b.s); //6


// when invoked, this function will assign a function
function gearFactory() {
  return function (driverGear, drivenGear) {
    return (driverGear / drivenGear);
  }
}
// calculateGearRatio can now be invoked as a function
const calculateGearRatio = gearFactory();
// and all the rest

console.log(calculateGearRatio(1, 2));


//! Return
function foo(a, b) {
  return a + b;
}

let v = foo(1, 2);

console.log(foo(1, 2)); //3
console.log(v); //3

//! Return function in a function 
function foo(a, b) {
  return function (a, b) {
    return a - b;
  };
}

let v = foo(1, 2);

console.log(foo(1, 2)); //3
console.log(v(2, 1)); //3



//! Return function in a function 
//What is the unused variables?
// a & b parameters
function foo(a1, b1) {
  return function (a2, b2) {
    return a2 - b2;
  };
}

let v = foo();

console.log(foo(1, 2));
console.log(v(2, 1)); //1



//Another example
let myArray = [1, 5, 11, 17];
console.log(typeof myArray); //object
let newArray = myArray.map(
  (item) => item / 2
);
console.log(newArray); // [0.5, 2.5, 5.5, 8.5]


//Without parenthesis is only a function check line 97 vs line 101
let bike = {
  calculateGearRatio: function () {
    return (2 / 4);
  }
}

// invoke function and assign value to ratioResult
//ratioResult returns a value from function 
let ratioResult = bike.calculateGearRatio();
console.log(ratioResult);
// assign calculateGearRatio function to a new pointer

const ratioFunction = bike.calculateGearRatio;
console.log(ratioFunction);


// another
< !DOCTYPE html >
  <html>
    <head>
      <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
          <title>JS Bin</title>
</head>
        <body>
          <button onclick="handleClick(event)">
            Click to Go
</button>

        </body>
</html>


var handleClick = function(event) {
        //console.log(event.type);  // click
        //console.log(event.currentTarget); // the thing you clicked
        console.log(event.screenX); // screen X coordinate
  console.log(event.screenY); // screen Y coordinate
}