//!Local variables - FocusOnForce

//This example shows how to declare a local variable and how it affects its scope
var name = 'Astro';
function printName() {
    changeName();
    console.log('Current character is ' + name);
}

function changeName() {
    let name = 'Codey';
}
printName();

//"Current character is Astro"