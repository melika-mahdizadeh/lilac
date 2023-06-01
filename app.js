let products = {
  data: [
    {
      name: "Black leather bag",
      price: "45",
      image: "images/black-bag.jpg",
      category: "bags"
    },
    {
      name: "Magneta top",
      price: "30",
      image: "images/magneta-top.jpg",
      category: "top"
    },
    {
      name: "blue jeans shoes",
      price: "35",
      image: "images/blue-jeans-shoes.jpg",
      category: "shoes"
    },
    {
      name: "green skirt",
      price: "20",
      image: "images/green-skirt.jpg",
      category: "skirt"
    },
    {
      name: "brown sunglasses",
      price: "35",
      image: "images/sunglasses-brown.jpg",
      category: "sunglasses"
    },
  ]
};

for(let i of products.data) {
  const p = document.getElementById("productsId");
  let card = document.createElement("div");
  card.classList.add("product__container");
  p.appendChild(card);
  let productImage = document.createElement("img");
  productImage.setAttribute("src", i.image);
  productImage.classList.add("product__img");
  card.appendChild(productImage);
  let productDetails = document.createElement("div");
  productDetails.classList.add("product__details");
  card.append(productDetails);
  let productPrice = document.createElement("span");
  productPrice.innerHTML = i.price + "$";
  productPrice.classList.add("product__price");
  productDetails.append(productPrice);
  let productBtn = document.createElement("button");
  productBtn.classList.add("product__addBtn");
  productDetails.append(productBtn);
  let icon = document.createElement("i");
  icon.classList.add("bi","bi-plus-circle-fill");
  productBtn.append(icon);

}




function openFilter() {
    document.getElementById("filter").style.visibility = "visible";
    document.getElementById("filter").style.opacity = "1";
  }
function closeFilter() {
    document.getElementById("filter").style.visibility = "hidden";
    document.getElementById("filter").style.opacity = "0";
}
