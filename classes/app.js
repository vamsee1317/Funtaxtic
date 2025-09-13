// Classes :

    // A class in js is a blue print for creating objects.
    // It is a function that has a constructor and methods.
    // The constructor is a special method that is called when an object is created from the class.
    // The methods are functions that are defined inside the class and can be called on the objects created.
    // Classes are used to create objects that have properties and methods.

    // It helps organize code using the OOP approach.
    // Instead of manually creating objects with object literals, classes allow us to define the props & methods in a structured way.


// Live examples - without classes

// const student1 = {
//     // props
//     name: 'John',
//     age: 20,
//     course : "Javascript",

//     // methods

//     getDetails : ()=>{
//         console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);

//     }
// }



// const student2 = {
//     // props
//     name: 'Jane',
//     age: 23,
//     course : "ReactJs",

//     // methods

//     getDetails : ()=>{
//         console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);

//     }
// }


// Creating a Basic class :

// Live example for creating student class.

class Student{
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
    }


    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this
            .course}`);
    }

    isEligible(){
        return this.age >= 18 ? `${this.name} is eligible for  the course` : 
        `${this.name} is not eligible for the course`;
    }
}


const student1 = new Student("Rahul", 23, "Java");
const student2 = new Student("Rohan", 25, "Python");

// student1.getDetails();
// student2.getDetails();
// console.log(student3.isEligible());




// Live Example - Bank Account System.
//  A bank account has props like accountNumber, balance, and methods like deposit, withdraw, checkBalance.

class BankAccount{
    constructor(accountNumber, holderName, balance){
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(this.balance);
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        }else{
            console.log(`Insufficient balance in account ${this.accountNumber} and the balance is
                ${this.balance}`);
        }
    }

    getBalance(){
        console.log(`Account Number: ${this.accountNumber}, Holder Name: ${this.holderName}, Balance: ${this.balance}`);
    }
}


const vamseeAccount = new BankAccount(12345678, "VamseKrishna", 5000);
vamseeAccount.getBalance();
vamseeAccount.deposit(1000);
vamseeAccount.withdraw(2000);
vamseeAccount.getBalance();


// Inheritance : 
//  Inheritance is a mechanism in which one class can inherit from another class. The class that inherits is called the subclass or the derived class, and the class from which it inherits is called the superclass or the base class.

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    displayDetails(){
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}



class Manager extends Employee{
    constructor(name, salary, department, teamSize){
        super(name, salary);
        this.department = department;
        this.teamSize = teamSize;
    }


    getManagerDetails(){
        console.log(`${this.name} manages a team of ${this.department} department`)
    }
}

const manager = new Manager("Vamsee", 234567890, "IT", 10);
manager.displayDetails();




class Prodcut{
    constructor(name, price){
        this.name = name;
        this._price = price;
    }

    // getters
    get price(){
        return (`Price : ${this._price}`)
    }
    // setters
    set price(newPrice){
        if(newPrice > 0){
            this._price = newPrice;
        }else{
            console.log("Invalid price");
        }
    }
}

const productOne = new Prodcut("Dell Laptoo", 45000);


productOne.price = -50000;
console.log(productOne.price);
