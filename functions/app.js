// Functions with Real time project scenarios

// Greet function 

// function greet(name="guestUser"){
//     // console.log("Hello, how are you?");
//   return(`Hello ${name}, How are you?`);
// }


// const guestUser = greet();
// console.log(guestUser);

// const userVamsee = greet("Vamsee");
// console.log(userVamsee);

// Function Expressions :

// callback functions :

// function greet(name, expandDetails){
//     console.log(name);
//     expandDetails();
// }


// function vamseeDetails(){
//     console.log("I am Vamsee");
//     console.log("I am 25 years old");
//     console.log("I am from India");
// }

// function tejaDetails(){
//     console.log("I am Teja");
//     console.log("I am 26 years old");
// }


// greet("VamseeKrishna", vamseeDetails)
// greet("Teja", tejaDetails)



// Self Invoking functions

// (function(name){
//     console.log("Hello, I am " + name);
// })("guestUser")


// Calculating price of a cart
// totalcartPrice = 0;
// function calculateCartPrice(price, quantity){
//     totalcartPrice += price * quantity;
//     console.log(`price of the cart is ${totalcartPrice}`);
// }
// calculateCartPrice(100, 2);
// calculateCartPrice(200, 3);


// console.log(totalcartPrice)


// Function Expression - checking product availability :

// const isProductAvailable = (stock) => {
//     return stock > 0 ? "In stock" : "out of stock"
// }
// console.log(isProductAvailable(0))


// IIFE with an example default API calls
// (
//     function(){
//         const url = "https://jsonplaceholder.typicode.com/posts"
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
//     }
// )()

// Higher Order Functions :


// function applyOffers(price, discountFunction){
//     return discountFunction(price)
// }

// const summerSale = price => price * 0.9;
// const winterSale = price => price * 0.8;
// const noSale = price => price;


// console.log(applyOffers(1000, summerSale))
// console.log(applyOffers(1000, winterSale))
// console.log(applyOffers(1000, noSale))




