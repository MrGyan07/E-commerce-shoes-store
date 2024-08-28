const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// JavaScript Search Logic
document.getElementById("search-input").addEventListener("input", function () {
  const searchInput = document.getElementById("search-input").value;
  const searchButton = document.getElementById("search-button");

  // Enable the button if the input field has text, otherwise disable it
  if (searchInput.trim().length > 0) {
    searchButton.disabled = false;
  } else {
    searchButton.disabled = true;
  }
});

function handleEvent(event) {
  if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")){
    const query = document.getElementById("search-input").value.toLowerCase();
    const items = document.querySelectorAll(".menuItem");
    let itemIndex = 0;

    // Remove previous highlights
    items.forEach((item) => item.classList.remove("highlight"));

    // Search logic
    items.forEach((item, index) => {
      if (item.textContent.toLowerCase().includes(query)) {
        item.classList.add("highlight");
        itemIndex = index;
      }
    });

    //slide to that item
    wrapper.style.transform = `translateX(${-100 * itemIndex}vw)`;

    items.forEach((item) => item.classList.remove("highlight"));

  }
  searchInput.textContent="search...";
}

document.getElementById("search-button").addEventListener('click', handleEvent);
document.getElementById("search-button").addEventListener("enter", handleEvent);

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    description:
      "Step into a legacy of style and comfort with Nike Air Force Shoes—a perfect blend of athletic heritage and modern fashion that continues to make an impact on the streets worldwide.With their crisp design, bold Swoosh branding, and a variety of colorways, Nike Air Force Shoes are a go-to choice for sneaker enthusiasts and fashion lovers alike. Whether you’re pairing them with jeans, shorts, or even dressier outfits, these sneakers add a touch of effortless cool to any ensemble.",
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    description:
      "Nike Air Jordan Shoes are more than just footwear—they're a statement of style, confidence, and athletic excellence. Whether you're a sneaker enthusiast, a basketball fan, or simply someone who appreciates timeless design, Air Jordans offer the perfect blend of heritage and modernity. Elevate your collection with a pair of these legendary sneakers and step into a piece of sports history.",
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    description:
      "Crafted with premium materials like leather, suede, or canvas, these shoes offer durability and a sophisticated edge to any outfit. The signature mid-top design provides ankle support, while the retro Swoosh logo and classic detailing bring a touch of nostalgia. Inside, cushioned insoles ensure all-day comfort, making these shoes perfect for everything from casual outings to all-day adventures",
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    description:
      "The upper design seamlessly combines modern aesthetics with durable materials, offering a sleek look that’s perfect for everyday wear. The Nike Crater Shoes are more than just a fashion statement; they’re part of Nike's Move to Zero journey, aiming to reduce waste and carbon emissions. The recycled fabrics and sustainable construction don't compromise on performance, ensuring that you can enjoy both style and comfort while contributing to a more sustainable future.",
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    description:
      "Crafted from high-quality materials like suede and canvas, these shoes not only stand out visually but also offer ultimate comfort and durability. Subtle embroidered details and unique textures add a vintage touch to this modern silhouette. Whether you're embracing your inner hippie or simply looking to make a statement, these Nike shoes deliver style and performance in one.",
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change Title of currentProducts
    currentProductTitle.textContent = choosenProduct.title;

    //change Price
    currentProductPrice.textContent = `$${choosenProduct.price}`;

    //change Description
    currentProductDesc.textContent = choosenProduct.description;

    //change image
    currentProductImg.src = `${choosenProduct.colors[0].img}`;

    //assigning respective colors options
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

let sizeCount = 0;
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "#BAB2B2";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
    sizeCount++;
  });
});

const productButton = document.querySelector(".productButton");
const closeButton = document.querySelector(".closeButton");
const payment = document.querySelector(".payment");

productButton.addEventListener("click", () => {
  // check if one size is selected or not, if not then alert
  if (sizeCount > 0) {
    payment.style.display = "flex";
  } else {
    alert("choose the size and color");
  }
});

closeButton.addEventListener("click", () => {
  payment.style.display = "none";
});

const limitedOffer = document.querySelector(".limitedOffer");

limitedOffer.addEventListener("click", () => {
  wrapper.style.transform = `translateX(${-100 * 4}vw)`;
});
