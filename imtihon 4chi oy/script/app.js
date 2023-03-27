
const containerEl = document.querySelector(".container");





function renderData(){
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
      containerEl.innerHTML = ""
      data.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card"
      productCard.innerHTML = `
      <img  src="${product.image}" alt="${product.description}"/>
      <h1>${product.category}</h1>
      <p>${product.description}</p>
      <h2>${product.title}</h2>
      <div class="price-star">
       <strong>${product.price}</strong>
       <div class="star-card">      
       <span>⭐</span>
       <span>⭐</span>
       <span>⭐</span>
       <span>⭐</span>
       <span>⭐</span>
       </div>

      </div>
      <button data-product-id="${product.id}" class="delete-btn">Delete</button>
    
    `
    containerEl.appendChild(productCard)
  }); 
    })
}

renderData();



// function checkLoader(isLoading){
//   if(isLoading){
//     loaderEl.style.display = "flex"
//   }

// }

containerEl.addEventListener("click", (e) =>{
    if(e.target.className == "delete-btn"){

      fetch(`https://api.escuelajs.co/api/v1/products/${e.target.dataset.productId}`, 
        {method: "DELETE"}
      )
      .then(response => response.json())
      .then(data =>  {
        if(data){
          renderData();
        }
      });
    }
    else if(e.target.className == "edit-btn"){
      $updateMain.style.display = "block"
      $updateForm.setAttribute("edit-id", e.target.dataset.productId)
    }
  })


  // $updateForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  
  //   fetch(`https://api.escuelajs.co/api/v1/products/${e.target.getAttribute("edit-id")}`, 
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(
  //         {
  //           title: $productTitleInp.value,
  //           price: $productPriceInp.value,
  //           description: $productDescInp.value, 
  //           categoryId: $productCategoryInp.value,
  //           images: [$productImageInp.value]
  //         }   
  //       ) 
  //     }
  //   )
  //   .then(response => response.json())
  //   .then(data => {
  //     if(data.id){
  //       $updateMain.style.display = "none";
  //       $updateForm.removeAttribute("edit-id");
  //       renderData();
  //     }
  //   });
  // })













  