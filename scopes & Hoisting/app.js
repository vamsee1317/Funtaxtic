// Scope :
// Scope is nothing but accessbility of variable inside the program.
// There are Three types of scope in programming :
// 1. Global Scope
// 2. Local (or) Functional Scope
// 3. Block Scope


// var
// let
// const



// const globalVariable = "GlobalVariable";

// console.log(`GlobalSpace - ${globalVariable}`)

// function myFunctionScope(){
//     var localVariable = "LocalVariable";
//     console.log(`Local Space - ${globalVariable}`);
//     console.log(`Local Space - ${localVariable}`);
// }
// myFunctionScope();

// console.log(`Global Space - ${localVariable}`);


// if(true){
//     console.log(`Block Space - ${globalVariable}`);
// }


// {
//     var x = 10;
//     let y = 20;
//     console.log(x);
//     console.log(y);
// }

// console.log(x);
// console.log(y);




// Hoisting :
// Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their scope, regardless of where they are actually declared.



// var declarations
// function declarations



// Var declarations are scanned first and made them as undefined.
// func declarations are scanned first and made them available.


greet();

var greet = ()=>{
    console.log("Hellooooo There!!!!!");
}
