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
  p.appendChild(card);

  //image
  let productImage = document.createElement("img");
  productImage.setAttribute("src", i.image);
  productImage.classList.add("product__img");
  card.appendChild(productImage);

  // a div for price and add btn
  let productDetails = document.createElement("div");
  productDetails.classList.add("product__details");
  card.append(productDetails);

  //price
  let productPrice = document.createElement("span");
  productPrice.innerHTML = i.price + "$";
  productPrice.classList.add("product__price");
  productDetails.append(productPrice);

  //add btn
  let productBtn = document.createElement("button");
  productBtn.classList.add("product__addBtn");
  productDetails.append(productBtn);

  //the icon of add btn
  let icon = document.createElement("i");
  icon.classList.add("bi","bi-plus-circle-fill");
  productBtn.append(icon);

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


