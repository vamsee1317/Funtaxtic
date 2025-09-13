

// fetch("https://dummyjson.com/products")
// .then((res)=>{ return res.json()})
// .then((data)=>{
//     data.products.map((item)=>{
//         console.log(item.title)
//     })
// })
// .catch((error)=>{ console.error(error)})


//  Asyn & Await for fetching

const apiUrl = "https://dummyjson.com/products";


const fetchProducts = async ()=>{
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
       const products = data.products;
       console.log(products);

     const cards = products.map((item)=>{
            return(`
                    <div class="card">
                    <img src="${item.images[0]}" alt="${item.title}">
                        <h2>${item.title}</h2>
                        <p>Price: ${item.price}</p>
                    </div>
                `)
       })

       const container = document.getElementById("container");
       container.innerHTML = cards.join("");
    }
    catch(error){
        console.error(error);
    }
}
fetchProducts();

