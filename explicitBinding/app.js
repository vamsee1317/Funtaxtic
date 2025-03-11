// Explicit Binding :
// Explicit binding is a technique used to bind a method to a specific object. It is used when the method is not a member of the class and we want to call it as if it were a member of the class.

const employee1 = {
    name: "John",
    age : "32",
    designation : "ReactJs Dev",
    location : "Hyd",
    experience : 10,


}

const employee2 = {
    name : "Jane",
    age : 30,
    designation : "AngularJs Dev",
    experience : 6,
}

function displayEmployeeDetails(salary, hikePercentage){
    console.log(`Name : ${this.name} , Age : ${this.age} , Designation
        : ${this.designation} , Location : ${this.location} , Experience : ${this.experience}
        , Salary : ${salary},
        hikePercentage : ${hikePercentage}
        `);
}



// Call method :
// The call method is used to call a function with a given this value and arguments provided as an object.


displayEmployeeDetails.call(employee1, 609876543, 8);
displayEmployeeDetails.call(employee2, 123456789, 10);


// Apply Method :
// The apply method is used to call a function with a given this value and arguments provided as an Array.

let emp1 = [123456789, 15]

displayEmployeeDetails.apply(employee1, emp1);
displayEmployeeDetails.apply(employee2, [987654321]);


// Bind :
// The bind method is used to bind a function to an object. It returns a new function that has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.


const displayDetails = displayEmployeeDetails.bind(employee1);
displayDetails(23456789, 16);