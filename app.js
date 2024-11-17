
const output1 = document.querySelector(".output1")

const products1 = fetch("https://dummyjson.com/products");
products1
.then((res) => res.json())
.then((res) => {
    // console.log(res.products);
    res.products.map((item) => {
        output1.innerHTML += `<div class="card1">
            <img src="${item.thumbnail}" alt="Thumbnail">
            <h3>${item.title}</h3>
            <p>${item.description.slice(0 , 25)}...</p>
            <p>Price: <span style="color: red;"><b>$${item.price}</b></span></p>
            <button onclick="seeMore(${item.id})">See More</button>
        </div>`
    })
})
.catch((err) => {
    console.log(err);
})

function seeMore(id){
    // console.log(id);
    localStorage.setItem("id" , id)
    window.location = "product.html"     
}