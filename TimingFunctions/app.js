

// Timing Functions

// SetTimeOut : 
// 1. setTimeout() function is used to execute a function after a specified time.
// 2. It takes two arguments: the function to be executed and the time in milliseconds.
// 3. The function is executed after the specified time.

// setTimeout(()=>{
//     console.log("Hello World");
// }, 2000)




// SetInterval :
// 1. setInterval() function is used to execute a function at specified intervals.
// 2. It takes two arguments: the function to be executed and the time in milliseconds.
// 3. The function is executed at the specified intervals.


// setInterval(()=>{
//     console.log("Hello World");
// }, 2000)


// Real time example for setInterval with Carousel.


const carouselDiv = document.getElementById("carouselDiv");

const cImage = document.createElement("img");

const carouselImagePaths = [
    "https://images.pexels.com/photos/16952014/pexels-photo-16952014/free-photo-of-coast.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2378278/pexels-photo-2378278.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/29346179/pexels-photo-29346179/free-photo-of-aerial-view-of-snorkeling-in-maldives-turquoise-waters.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/29463585/pexels-photo-29463585/free-photo-of-serene-autumn-path-through-scenic-forest.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/29346146/pexels-photo-29346146/free-photo-of-serene-beach-scene-with-bird-in-maldives.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

let count = 0;

setInterval(()=>{
    if(count < carouselImagePaths.length){
        cImage.src = carouselImagePaths[count];
        count ++;
    }else{
        count = 0;
    }
}, 3000)
