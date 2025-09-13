// Javascript Modules :
// JS modules allow you to break up your js code into seprate files, making it more manageable and reusable. 
// Using modules, you can export & import functions, objects or varaibles between different files.


import { addToCart, showCart as view, cart } from "./cart.js";
import { login, logout } from "./auth.js"


login("Vamsee");
logout();