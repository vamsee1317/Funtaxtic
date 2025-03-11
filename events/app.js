// Events :
// Events are nothing but actions that occurs when user starts interacting with the webpage.

// Types of Events :
    // Mouse events
    // Keyboard events
    // Form events
    // Window Events
    // Document Events
    // Scroll Events

// How to handle events in Javascript ?

// 1. Inline Events (not recommended)
// 2. Event Listeners (recommended)
// 3. Javascript Props



// Event Bubbling :
// Event bubbling is a mechanism where an event starts from the targeted person and propagates up through its ancestors in the DOM Hierarcy.

// Why it occurs :
// It allows parent elements to listen to the events triggered by the children.
// Reduces the need of attaching addevent listeners for the parent elements.

// Event Capturing :
// Event capturing is a mechanism where an event starts from the root of the DOM and propagates down through the DOM hierarchy towards target.

// const gparent = document.getElementById("gparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");



// gparent.addEventListener('click', (e)=>{
//     console.log("Gparent is triggered");


// }, );

// parent.addEventListener('click', (e)=>{
//     console.log("Parent is triggered");


// });

// child.addEventListener('click', (e)=>{
//     console.log("Child is triggered");

// });




// gparent.addEventListener('click', (e)=>{
//     console.log("Gparent is triggered with Capturing");
//     // console.log(e.target)

// },{capture : true});

// parent.addEventListener('click', (e)=>{
//     console.log("Parent is triggered with Capturing");
//     // console.log(e.target)

// },{capture : true});

// child.addEventListener('click', (e)=>{
//     console.log("Child is triggered with Capturing");
// },{capture : true});


const todoList = document.getElementById('todoList');
const btn = document.getElementById('btn');

todoList.addEventListener('click', (event)=>{
    if(event.target.tagName === "LI"){
        event.target.style.textDecoration = "line-through"
    }
})

let count = 0;


btn.addEventListener('click', (e)=>{

    let newTask = document.createElement('li');
    newTask.innerText = `Task${count}`
    count ++;
    todoList.appendChild(newTask);
})



// Event Delegation
// Event Propagation