// Array : Collection of elements either of same DT or diff dt stored in a single variable.

// Syntax :
            // var arrayName = []
    
// Literal Way of creating an array
// var colors = ['red', 'green', 'blue']
// console.log(colors)

// Constructor way :
// var colors = new Array('red', 'green', 'blue')


// Array Props :
const nums = [10, 20, 30, 40, 50];
console.log(nums.length);


// Array Methods :

const cart = ["Laptop", "HeadPhones", "EarPhones"];

// push() :  used to add extra items into exisiting array at last position.
cart.push("Mouse", "JoyStick");
console.log(cart);
// pop() : used to remove and return last item from array.
const poppedItem = cart.pop();
console.log(poppedItem);
// Unshift() : used to add extra items into exisiting array at begining position.
cart.unshift("Joystick");
console.log(cart)
// Shift() : used to remove and return first Element from arrays
console.log(cart.shift())
// Splice() : add/remove items from array at specified index
cart.splice(1, 1, "Keyboard", "Monitor");
console.log(cart);
// Slice() : extracts a portion of an array & returns it.
const slicedArray = cart.slice(1, 3);
console.log(slicedArray);
// Reverse() : reverse the order of array elements
const reversedArray = cart.reverse();
console.log(reversedArray);
// Sort() : sorts the array in ascending order
const sortedReverseArray = cart.sort().reverse();
console.log(sortedReverseArray);
// indexOf() : returns the first index of the element in the array
const index = cart.indexOf("Laptop");
console.log(index);
// includes() : returns true if the element is present in the array
const isPresent = cart.includes("Laptop");
console.log(isPresent);
// join() : returns a string of all elements in the array
const joinedArray = cart.join(" - ");
console.log(joinedArray);
// concat() : returns a new array that is a combination of the two arrays
const newProdcuts = ["Charger", "Mobile"];
const combinedArray = cart.concat(newProdcuts);
console.log(combinedArray);


// Map
// Fill
// Filter
// Reduce
// Find
// Some
// Every
// Includes
// Flat
// FlatMap