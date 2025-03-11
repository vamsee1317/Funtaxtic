// DOM : Document Object Model.
// DOM is programming interface for web documents.
// DOM is nothing but a tree like structure where all the html elements are arranged in a hierarical fashion.
// DOM enables javscript to easily access the elements from the DOM tree, and to dynamically change the structure, style and content of the web pages.



// DOM
// DOM Selectors
// DOM Selectors are used to select the elements from the DOM tree.
    // document.getElementsByTagName()
    // document.getElementsByClassName()
    // document.getElementById()
    // document.querySelector()
    // document.querySelectorAll()
// DOM Manipulation



// document.getElementsByTagName()

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);


// document.getElementsByClassName()

// const olist = document.getElementsByClassName('olist');
// console.log(olist);

// document.getElementById()
// const heading = document.getElementById('title');
// console.log(heading);

// document.querySelector()
const targetPerson = document.querySelectorAll('ul>ol li');

console.log(targetPerson);



let htmlCollection = document.getElementsByTagName("li"); // HTMLCollection (Live)
let nodeList = document.querySelectorAll("li");

function addStudent() {
    let newStudent = document.createElement("li");
    newStudent.innerText = "Charlie";
    document.getElementById("students").prepend(newStudent);

}

function checkLength() {
    console.log("HTMLCollection length:", htmlCollection.length); // Updates dynamically
    console.log("NodeList length:", nodeList.length); // Remains same (static)

    let nodeList1 = document.querySelectorAll("li");
    console.log("NodeList length after query:", nodeList1.length); // Updates dynamically
}
