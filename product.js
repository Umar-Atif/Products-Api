const getData = localStorage.getItem("id");
console.log(getData);

const output2 = document.querySelector(".output2");
const card = document.querySelector(".card2")

const products2 = fetch(`https://dummyjson.com/products/${getData}`)
.then((res) => res.json())
.then((res) => {
    // console.log(res);
    output2.innerHTML += `
            <div class="card2">
            <img src="${res.thumbnail}" width = "300px" alt="Thumbnail">
            <h3>${res.title}</h3>
            <p>${res.description}</p>
            <p>Price: <span style="color: red;"><b>$${res.price}</b></span></p><hr>
            </div>
            <h2>Reviews</h2>`
            res.reviews.map((item) => {
                output2.innerHTML += `
                    <p>Name: <b>${item.reviewerName}</b></p>
                    <p>Rating: <b>${item.rating} Star</b></p>
                    `
            })
})