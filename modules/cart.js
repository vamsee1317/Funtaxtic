

export let cart = [];

export function addToCart(product){
    cart.push(product);
    console.log(`${product} added to cart sucessfully`);
}

export function showCart(){
    console.log(cart);
}