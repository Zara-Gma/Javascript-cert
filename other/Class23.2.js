function countToThree() {
    // i is in the scope of the countToThree function
    // 1. initiated works one time
    // 2 condition. two cases true or false
    // if it's true then it goes to the body 
    //body, increment condition
    for (let i = 0; i < 3; i++);
    {
        console.log('inside for loop ' + i); // iteration 1: 0
        // iteration 2: 1
        // iteration 3: 2
    }
    console.log('outside for loop ' + i); // What is this?
}

let i = countToThree();


//Scope
var a = 10;

function foo() {
    console.log(a);
}

foo();



//scope var
function foo() {
    var a = 10;
}

console.log(a);
foo();



// scope var
console.log(b);

function foo() {
    var a = 10;
}

var b = 5;

foo();
console.log(a);


//global variable
var a = 10;
console.log(this.a);
console.log(this === window);

//