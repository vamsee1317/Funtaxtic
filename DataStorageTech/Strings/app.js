
// String : Group of characters enclosed in either single quote or double quote.

const userName = new String("      VamsveeKrishna1719      ");

console.log(typeof userName);

// Object
// Object is a collection of key-value pairs.
// Object will always have two things
    //  Properties : How one object will look like
    //  Methods :   Describes about actions of object

// Strin Properties :
//  length : Returns the length of the string
//  constructor : Returns the function that created the String object

console.log(userName.length)

// String Methods :

// toUpperCase() : converts the string into upper case values.
console.log(userName.toUpperCase())
// toLowerCase() : converts the string into lower case values.
console.log(userName.toLowerCase())
// trim() : removes the white spaces from the string.
console.log(userName.trim())
// charAt() : returns the character at the specified index.
console.log(userName.charAt(14))
// charCodeAt() : returns the Unicode of the character at the specified index.
console.log(userName.charCodeAt(14))
// concat() : returns the string after concatenating the specified value.
console.log(userName.concat("Vamsee"))
// indexOf() : returns the index of the first occurrence of the specified value.
console.log(userName.indexOf("V"))
// lastIndexOf() : returns the index of the last occurrence of the specified value.
console.log(userName.lastIndexOf("V"))
// replace() : replaces the specified characters with the specified value.
console.log(userName.replace(/V/gi, "A"))
// search() : returns the index of the first occurrence of the specified value.
console.log(userName.search("V"))
// slice() : returns the specified characters from the string.
console.log(userName.slice(0,13))
// split() : splits the string into an array of substrings.
const statement = "My name is VamseeKrishna";
const splittedArray = statement.split(" ");
console.log(splittedArray);
// Name into UpperCase:
console.log(splittedArray[3].toLocaleUpperCase())

// includes() : returns true if the string contains the specified value, otherwise false.
console.log(userName.includes("y"))




