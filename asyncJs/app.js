
// Synchronous Js :

    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);

// Asynchronous Js :
console.log("AsynJs");
    console.log(1);
    console.log(2);
    setTimeout(() => {
        console.log(3);
    },3000)
    console.log(4);
    console.log(5);


// Callbacks :
// A callback is a function passed as an argument to another function.
// Js uses callbacks to handle asynchronous Operations.

// function greet(name, cb){
//     console.log(`Hello ${name}`);
//     cb();
// }

// function sayGoodBye(){
//     console.log("Good Bye");
// }


// greet("John", sayGoodBye);

// Callback Hell

// setTimeout(()=>{
//     console.log("Step1");
//     setTimeout(()=>{
//         console.log("Step2");
//         setTimeout(()=>{
//             console.log("Step3");
//         },2000)
//     }, 2000)
// }, 2000);

// Promises :
// A promise is a result of an asynchronous operation.
// It is used to handle asynchronous operations in a more readable way.
// A promise is in one of these states: pending, fulfilled or rejected.
// A promise can be created using the Promise constructor.
// A promise can be resolved or rejected using the resolve() or reject() methods.
// A promise can be chained using the then() method.
// A promise can be cancelled using the cancel() method.
// A promise can be awaited using the await keyword.
// A promise can be used with async/await syntax.

let myPromise = new Promise((resolve, reject)=>{

    let sucess = true;

    setTimeout(()=>{
        if(false){
            resolve("Promise Resolved");
        }else{
            reject("Promise Rejected");
        }
    })
})

myPromise.then((message) =>{
    console.log(message);
}).catch((e)=>{
    console.log(e)
}).finally(()=>{
    console.log("Promise is executed");
})


// Async/Await :



