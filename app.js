let products = {
  data: [
    {
      name: "Black leather bag",
      price: "45",
      image: "images/black-bag.jpg",
      category: "bags",
      color: "black"
    },
    {
      name: "Magneta top",
      price: "30",
      image: "images/magneta-top.jpg",
      category: "tops",
      color: "magneta"
    },
    {
      name: "blue jeans shoes",
      price: "35",
      image: "images/blue-jeans-shoes.jpg",
      category: "shoes",
      color: "blue"
    },
    {
      name: "green skirt",
      price: "20",
      image: "images/green-skirt.jpg",
      category: "skirts",
      color: "green"
    },
    {
      name: "brown sunglasses",
      price: "35",
      image: "images/sunglasses-brown.jpg",
      category: "sunglasses",
      color: "brown"
    },
    {
      name: "yellow top",
      price: "30",
      image: "images/yellow-top.jpg",
      category: "tops",
      color: "yellow"
    },
    {
      name: "metallic bag",
      price: "30",
      image: "images/metalic-bag.jpg",
      category: "bags",
      color: "white"
    },
    {
      name: "magneta sandals",
      price: "22",
      image: "images/magneta-sandals.jpg",
      category: "shoes",
      color: "magneta"
    },
    {
      name: "pink skirt",
      price: "40",
      image: "images/pink-skirt.jpg",
      category: "skirts",
      color: "pink"
    },
    {
      name: "blue jean bag",
      price: "32",
      image: "images/blue-bag.jpg",
      category: "bags",
      color: "blue"
    },
  ]
};

for(let i of products.data) {
  //card
  const p = document.getElementById("productsId");
  let card = document.createElement("div");
  card.classList.add("product__container", i.category,"hide" , i.color);
  card.innerHTML =`
  <img class="product__img" src="${i.image}">
  <div>
    <span class="product__price">${i.price}$</span>
    <button class="product__addBtn"><i class="bi bi-plus-circle-fill"></i></button>
  </div>`;
    p.appendChild(card);
}



/* filter open & close btns */
function openFilter() {
    document.getElementById("filter").style.visibility = "visible";
    document.getElementById("filter").style.opacity = "1";
  }
function closeFilter() {
    document.getElementById("filter").style.visibility = "hidden";
    document.getElementById("filter").style.opacity = "0";
}
/* cart open & close btns */
/* filter open & close btns */
function openCart() {
  document.getElementById("cart").style.visibility = "visible";
  document.getElementById("cart").style.opacity = "1";
}
function closeCart() {
  document.getElementById("cart").style.visibility = "hidden";
  document.getElementById("cart").style.opacity = "0";
}
/* filter dropdown menus */
var dropdown = document.getElementsByClassName("filter__dropdownBtn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "grid") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "grid";
    }
  });
}


function filterProduct(value) {
  //Button class code
  // i should fix this part later id i felt like it:)
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".product__container");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Initially display all products
window.onload = () => {
  filterProduct("all");
};


// how many items are in cart
let carts = document.querySelectorAll('.product__addBtn');

for (let i=0; i<carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers();
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers) {
    document.querySelector('.nav__cartBtn__quantity').textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if( productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.nav__cartBtn__quantity').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.nav__cartBtn__quantity').textContent = 1;
  }
}
onLoadCartNumbers();
