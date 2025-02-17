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

// Advanced Array Methods

const productsData = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 2499,
      discount: 10,
      brand: "Boat",
      rating: 4.5,
      stock: 20,
      image: "https://example.com/images/headphones.jpg",
      description: "High-quality wireless headphones with noise cancellation and deep bass.",
    },
    {
      id: 2,
      name: "Smartwatch Series 5",
      category: "Wearable",
      price: 5999,
      discount: 15,
      brand: "Noise",
      rating: 4.7,
      stock: 15,
      image: "https://example.com/images/smartwatch.jpg",
      description: "Feature-packed smartwatch with heart rate monitoring and fitness tracking.",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      category: "Laptops",
      price: 74999,
      discount: 5,
      brand: "Asus",
      rating: 4.8,
      stock: 10,
      image: "https://example.com/images/gaming-laptop.jpg",
      description: "Powerful gaming laptop with RTX 4060 GPU and 16GB RAM.",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "Accessories",
      price: 999,
      discount: 20,
      brand: "Logitech",
      rating: 4.3,
      stock: 30,
      image: "https://example.com/images/mouse.jpg",
      description: "Ergonomic wireless mouse with adjustable DPI settings.",
    },
    {
      id: 5,
      name: "55-inch 4K Smart TV",
      category: "Home Appliances",
      price: 45999,
      discount: 12,
      brand: "Samsung",
      rating: 4.6,
      stock: 8,
      image: "https://example.com/images/smart-tv.jpg",
      description: "Ultra HD Smart TV with Dolby Vision and built-in apps support.",
    },
    {
      id: 6,
      name: "Noise Cancelling Earbuds",
      category: "Electronics",
      price: 3499,
      discount: 18,
      brand: "Sony",
      rating: 4.7,
      stock: 25,
      image: "https://example.com/images/earbuds.jpg",
      description: "Compact wireless earbuds with active noise cancellation.",
    },
    {
      id: 7,
      name: "Mechanical Gaming Keyboard",
      category: "Accessories",
      price: 4499,
      discount: 25,
      brand: "Redragon",
      rating: 4.5,
      stock: 12,
      image: "https://example.com/images/keyboard.jpg",
      description: "RGB mechanical keyboard with customizable keys.",
    },
    {
      id: 8,
      name: "Smartphone 5G",
      category: "Mobiles",
      price: 34999,
      discount: 10,
      brand: "OnePlus",
      rating: 4.8,
      stock: 22,
      image: "https://example.com/images/smartphone.jpg",
      description: "Latest 5G smartphone with AMOLED display and fast charging.",
    },
    {
      id: 9,
      name: "Power Bank 20000mAh",
      category: "Accessories",
      price: 1999,
      discount: 15,
      brand: "MI",
      rating: 4.4,
      stock: 18,
      image: "https://example.com/images/powerbank.jpg",
      description: "High-capacity power bank with fast charging support.",
    },
    {
      id: 10,
      name: "Full HD Webcam",
      category: "Electronics",
      price: 2999,
      discount: 10,
      brand: "Logitech",
      rating: 4.6,
      stock: 10,
      image: "https://example.com/images/webcam.jpg",
      description: "Full HD 1080p webcam with built-in microphone.",
    },
    {
      id: 11,
      name: "Gaming Chair",
      category: "Furniture",
      price: 12999,
      discount: 10,
      brand: "Green Soul",
      rating: 4.7,
      stock: 5,
      image: "https://example.com/images/gaming-chair.jpg",
      description: "Ergonomic gaming chair with lumbar support.",
    },
    {
      id: 12,
      name: "Smart LED Bulb",
      category: "Home Appliances",
      price: 999,
      discount: 20,
      brand: "Philips",
      rating: 4.3,
      stock: 50,
      image: "https://example.com/images/smart-bulb.jpg",
      description: "WiFi-enabled LED bulb with voice control.",
    },
    {
      id: 13,
      name: "Air Purifier",
      category: "Home Appliances",
      price: 14999,
      discount: 8,
      brand: "Dyson",
      rating: 4.6,
      stock: 7,
      image: "https://example.com/images/air-purifier.jpg",
      description: "Advanced air purifier with HEPA filter technology.",
    },
    {
      id: 14,
      name: "Smart Vacuum Cleaner",
      category: "Home Appliances",
      price: 25999,
      discount: 10,
      brand: "iRobot",
      rating: 4.5,
      stock: 6,
      image: "https://example.com/images/vacuum-cleaner.jpg",
      description: "Automatic vacuum cleaner with app control.",
    },
    {
      id: 15,
      name: "Gaming Monitor 27-inch",
      category: "Electronics",
      price: 27999,
      discount: 12,
      brand: "Acer",
      rating: 4.8,
      stock: 9,
      image: "https://example.com/images/monitor.jpg",
      description: "144Hz gaming monitor with ultra-fast response time.",
    },
    {
      id: 16,
      name: "DSLR Camera",
      category: "Cameras",
      price: 54999,
      discount: 5,
      brand: "Canon",
      rating: 4.7,
      stock: 8,
      image: "https://example.com/images/camera.jpg",
      description: "Professional DSLR camera with 24MP sensor.",
    },
    {
      id: 17,
      name: "Home Theater System",
      category: "Electronics",
      price: 35999,
      discount: 15,
      brand: "Sony",
      rating: 4.6,
      stock: 4,
      image: "https://example.com/images/home-theater.jpg",
      description: "High-quality home theater system with surround sound.",
    },
    {
      id: 18,
      name: "Portable Speaker",
      category: "Electronics",
      price: 2999,
      discount: 18,
      brand: "JBL",
      rating: 4.5,
      stock: 20,
      image: "https://example.com/images/speaker.jpg",
      description: "Compact portable Bluetooth speaker with deep bass.",
    },
    {
      id: 19,
      name: "Smart Door Lock",
      category: "Home Security",
      price: 12999,
      discount: 8,
      brand: "Godrej",
      rating: 4.6,
      stock: 6,
      image: "https://example.com/images/smart-lock.jpg",
      description: "Smart fingerprint-enabled door lock for enhanced security.",
    },
    {
      id: 20,
      name: "Electric Toothbrush",
      category: "Health & Personal Care",
      price: 2499,
      discount: 15,
      brand: "Oral-B",
      rating: 4.4,
      stock: 15,
      image: "https://example.com/images/toothbrush.jpg",
      description: "Rechargeable electric toothbrush with multiple cleaning modes.",
    }
  ];
  
  const productCards = productsData.map((item)=>{
    return(`
            <div class="cards">
                 <img src="https://images.pexels.com/photos/30654155/pexels-photo-30654155/free-photo-of-classic-yellow-facade-of-uppsala-building.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load">
                <h2 class="title">${item.name}</h2>
                <pre>$${item.price} <strike>$999999</strike></pre>
                <button>addToCart</button>
            </div>
        
        `)
  })

  // const productsContainer = document.getElementById('productsContainers');
  // productsContainer.innerHTML = productCards.join("");


  const orders = [
    { 
      orderId: 101, 
      customer: "Alice", 
      amount: 250, 
      status: "delivered", 
      items: ["Laptop", "Mouse"] 
    },
    { orderId: 102, customer: "Bob", amount: 100, status: "pending", items: ["Keyboard"] },
    { orderId: 103, customer: "Charlie", amount: 450, status: "delivered", items: ["Monitor", "Mouse"] },
    { orderId: 104, customer: "David", amount: 300, status: "cancelled", items: ["Tablet"] },
    { orderId: 105, customer: "Eve", amount: 150, status: "delivered", items: ["Charger", "Cable"] },
  ];
  
  // 1. **map** - Create an array of order summaries.
  const orderSummaries = orders.map(order => ({
    orderId: order.orderId,
    customer: order.customer,
    status: order.status,
  }));
  
  console.log(orderSummaries);
  
  // 2. **filter** - Get only the delivered orders.
  const deliveredOrders = orders.filter(order => order.status === "delivered");
  
  console.log(deliveredOrders);
  
  // 3. **reduce** - Calculate the total revenue from delivered orders.
  const totalRevenue = orders.reduce((total, order) => total + order.amount, 0);
  
  console.log(totalRevenue);
  
  // 4. **find** - Find an order by a specific orderId.
  const orderById = orders.find(order => order.customer === "Eve");
  
  console.log(orderById);
  
  // 5. **every** - Check if all orders are delivered.
  const allDelivered = orders.every(order => order.status === "delivered");
  
  console.log(allDelivered);
  
  // 6. **includes** - Check if a specific product exists in any order.
  const hasLaptop = orders.some(order => order.items.includes("Laptop"));
  
  console.log(hasLaptop);
  
  // 7. **fill** - Mark all pending orders as "processing".
  const updatedOrders = orders.map(order =>
    order.status === "delivered" ? { ...order, status: "completed" } : order
  );
  
  console.log(updatedOrders);
  


  // const num = [12, 39, 27, 24, 46, 50, 73, 99];


  // num.fill("Zero",0, 3);
  // console.log(num);

  // const result = num.reduce((a,b)=>{return a+b})
  // console.log(result) // 370

  // const evenNums = num.filter((number)=>{ return number % 2 === 0}).map((num)=>{ return num * num})
  // console.log(evenNums)



