// Object
//The object data type allows storing data in the form of key-value pairs.
// An object can be created using the Object() constructor or the object literal syntax.
// The following examples show how to declare a variable and initialize it to an object

//This example shows how to declare a variable and initialize it to an object using the Object() constructor
// 'Animal' is a constructor that can be used to create an object

function Animal() {
    this.type = 'dog';
    this.sound = function () {
        console.log('woof!');
    };
}

// 'dog' is an object created from the 'Animal' constructor
var dog = new Animal();
dog.sound();

//This example shows how to declare a variable and initialize it to an object using the object literal syntax
// 'Animal' is an object with properties

var Animal = {
    type: 'dog',
    sound: function () {
        console.log('woof');
    }
}

//Use the sound() property
Animal.sound();