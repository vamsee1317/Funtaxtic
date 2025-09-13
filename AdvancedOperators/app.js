

// Spread Operator :
// It is used to spread the elements of an array into a new array.
// It is also used to spread the elements of an object into a new object.

// Spread Operator - Arrays
// const userDetails = ["Vamsi", 25, "gvks.123@gmail.com", 9876543123];


// const employeeDetails = [...userDetails, 2289443, "TCS", "Hyderabad", ...userDetails];
// console.log(employeeDetails);


// Spread Operator - Objects
// const user = { name: "Vamsi", age: 25, email: "gvks@gmail.com"}
// const employee = {
//     ...user,
//     company: "TCS",
//     location: "Hyderabad",
//     age : 26,


// }
// console.log(employee);


// Rest Operators :
// It is used to get the rest of the elements of an array or object.
// It is used to get the rest of the elements of an array or object after a certain number
// of elements.


// function getUserDetails(name, age, email, ...skills){
//     console.log(skills);

// }


// getUserDetails("Vamsee", 25, "abc@gmail.com", "html","css", "js", "reactjs" );

// Destructuring :
// It is used to assign the values of an array or object to variables.

// const userDetails = ["Vamsee", 25, "abc@gmail.com", "html", "css", "js"];
// console.log(userDetails[0]);
// console.log(userDetails[1]);
// console.log(userDetails[2]);
// console.log(userDetails[3]);

// const [name, age, email, ...skill] = userDetails;
// console.log(name);
// console.log(age);
// console.log(email);
// console.log(skill);  // console.log(userDetails[3]);


// const userDetails = {
//     name: "Vamsee",
//     age: 25,
//     email: "abc@gmail.com",
//     skills: ["html", "css", "js"]
// }


// const {name, age, email, skills} = userDetails;
// console.log(name);
// console.log(age);
// console.log(email);
// console.log(skills);  



const users = [
    {name: "Vamsee", age: 25, email: "abc@gmail.com"},
    {name: "Rahul", age: 30, email: "xyz@gmail.com"},
    {name: "Rohan", age: 35, email: "pqr@gmail.com"},
];

const newUsers = [
    ...users,
    {name: "Vamsee", age: 28, email: "abc@gmail.com"}
]
console.log(newUsers);



// ES6 concepts :
// 1. let and const
// 2. Template literals
// 3. Arrow functions
// 4. Destructuring
// 5. Spread operator
// 6. Rest Operator
// 7. Classes
// 8. Promises
// 9. Async/Await
// 10. Modules