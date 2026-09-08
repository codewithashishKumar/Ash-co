window.addEventListener("load", function () {
  const loader = document.getElementById("pageLoader");
  setTimeout(() => {
    loader.classList.add("loaded");
    setTimeout(() => {
      loader.remove();
    }, 900);
  }, 650);
});
const products = [
  {
    id: 1,
    name: "Relaxed Linen Shirt",
    category: "Clothing",
    price: 2490,
    oldPrice: 2990,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    description:
      "An easy everyday shirt cut from lightweight linen with a relaxed silhouette, soft texture and naturally effortless character.",
  },
  {
    id: 2,
    name: "Essential Cotton Tee",
    category: "Clothing",
    price: 1290,
    oldPrice: null,
    rating: 4.7,
    reviews: 218,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description:
      "A clean, heavyweight cotton tee designed with a comfortable fit that works on its own or as a foundation layer.",
  },
  {
    id: 3,
    name: "Everyday Leather Tote",
    category: "Accessories",
    price: 4290,
    oldPrice: 4990,
    rating: 4.9,
    reviews: 87,
    badge: "Editor's pick",
    image:
      "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?auto=format&fit=crop&w=900&q=85",
    description:
      "A spacious everyday tote crafted with a structured shape and enough room for your daily essentials.",
  },
  {
    id: 4,
    name: "Classic Everyday Sneaker",
    category: "Footwear",
    price: 3890,
    oldPrice: null,
    rating: 4.6,
    reviews: 96,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "A minimal everyday sneaker with a timeless profile, cushioned sole and versatile styling.",
  },
  {
    id: 5,
    name: "Studio Sunglasses",
    category: "Accessories",
    price: 1890,
    oldPrice: 2290,
    rating: 4.7,
    reviews: 63,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    description:
      "Clean-lined sunglasses with a confident silhouette designed to complement everyday looks.",
  },
  {
    id: 6,
    name: "Soft Glow Table Lamp",
    category: "Objects",
    price: 2990,
    oldPrice: null,
    rating: 4.9,
    reviews: 41,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    description:
      "A softly sculpted table lamp that adds warm ambient light to desks, bedside tables and quiet corners.",
  },
  {
    id: 7,
    name: "Textured Overshirt",
    category: "Clothing",
    price: 3190,
    oldPrice: 3690,
    rating: 4.8,
    reviews: 72,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1644483878413-1bdfe8d1180c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A versatile textured overshirt designed for layering through changing seasons.",
  },
  {
    id: 8,
    name: "Minimal Leather Watch",
    category: "Accessories",
    price: 4490,
    oldPrice: null,
    rating: 4.8,
    reviews: 54,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    description:
      "A refined everyday watch pairing a minimal dial with a classic leather strap.",
  },
  {
    id: 9,
    name: "Canvas Weekend Bag",
    category: "Objects",
    price: 3590,
    oldPrice: 4190,
    rating: 4.7,
    reviews: 38,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description:
      "A durable canvas carryall made for weekends away, gym days and everything between.",
  },
  {
    id: 10,
    name: "Suede Everyday Loafer",
    category: "Footwear",
    price: 4990,
    oldPrice: null,
    rating: 4.9,
    reviews: 46,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=85",
    description:
      "A refined suede loafer balancing classic proportions with an easy everyday feel.",
  },
  {
    id: 11,
    name: "Soft Knit Cardigan",
    category: "Clothing",
    price: 3490,
    oldPrice: 3990,
    rating: 4.8,
    reviews: 81,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",
    description:
      "A softly textured knit cardigan designed to become a dependable layer throughout the year.",
  },
  {
    id: 12,
    name: "Ceramic Studio Vase",
    category: "Objects",
    price: 1590,
    oldPrice: null,
    rating: 4.6,
    reviews: 29,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A tactile ceramic vase with a softly organic shape for flowers or as a standalone object.",
  },
];

let activeCategory = "All";
let searchTerm = "";
let cart = JSON.parse(localStorage.getItem("ashCoCart") || "[]");

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const formatPrice = (value) => `₹${value.toLocaleString("en-IN")}`;

function stars(rating) {
  const full = Math.floor(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function renderProducts() {
  const filtered = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    productGrid.innerHTML = `
          <div class="col-12 py-5 text-center">
            <i class="bi bi-search fs-1 text-muted"></i>
            <h3 class="mt-3">Nothing found</h3>
            <p class="text-muted">Try another search or category.</p>
          </div>
        `;
    return;
  }

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <div class="col-xl-3 col-lg-4 col-md-6">
          <article class="product-card">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}" loading="lazy">
              <span class="product-badge">${product.badge}</span>
              <button class="wishlist" onclick="toggleWishlist(this)" aria-label="Add to wishlist">
                <i class="bi bi-heart"></i>
              </button>
              <button class="quick-view" onclick="openProduct(${product.id})">
                QUICK VIEW
              </button>
            </div>

            <div class="product-info">
              <div class="product-category">${product.category}</div>
              <h3 class="product-name">${product.name}</h3>
              <div class="rating">
                ${stars(product.rating)}
                <span>${product.rating} (${product.reviews})</span>
              </div>

              <div>
                <span class="price">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
              </div>

              <button class="add-btn" onclick="addToCart(${product.id})">
                ADD TO BAG
              </button>
            </div>
          </article>
        </div>
      `,
    )
    .join("");
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  showToast();

  const canvas = bootstrap.Offcanvas.getInstance(
    document.getElementById("cartCanvas"),
  );

  if (canvas) {
    renderCart();
  }
}

function changeQuantity(id, amount) {
  const item = cart.find((item) => item.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter((item) => item.id !== id);
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("ashCoCart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find((product) => product.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  cartCount.textContent = count;
  cartTotal.textContent = formatPrice(total);

  if (!cart.length) {
    cartItems.innerHTML = `
          <div class="empty-cart">
            <i class="bi bi-bag"></i>
            <h4>Your bag is empty</h4>
            <p>Looks like you haven't found your next favourite yet.</p>
            <button class="btn btn-main mt-2" data-bs-dismiss="offcanvas">START SHOPPING</button>
          </div>
        `;
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const product = products.find((product) => product.id === item.id);

      return `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">

            <div class="flex-grow-1">
              <div class="d-flex justify-content-between gap-2">
                <div>
                  <div class="product-category">${product.category}</div>
                  <div class="cart-item-name">${product.name}</div>
                </div>

                <button class="border-0 bg-transparent text-muted" onclick="removeFromCart(${product.id})">
                  <i class="bi bi-trash"></i>
                </button>
              </div>

              <strong>${formatPrice(product.price)}</strong>

              <div class="quantity-control">
                <button onclick="changeQuantity(${product.id}, -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${product.id}, 1)">+</button>
              </div>
            </div>
          </div>
        `;
    })
    .join("");
}
function openProduct(id) {
  const product = products.find((product) => product.id === id);

  document.getElementById("modalProduct").innerHTML =
    ` <div class="col-lg-6"> <img
     src="${product.image}"
     class="modal-product-image"
     alt="${product.name}"
     loading="lazy"
     decoding="async"
   > </div>


<div class="col-lg-6 d-flex align-items-center position-relative">

  <div class="modal-product-content">
    <div class="product-category">${product.category}</div>

    <h2>${product.name}</h2>

    <div class="rating mb-3">
      ${stars(product.rating)}
      <span>${product.rating} · ${product.reviews} reviews</span>
    </div>

    <div class="fs-4 fw-bold mb-4">
      ${formatPrice(product.price)}
      ${
        product.oldPrice
          ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
          : ""
      }
    </div>

    <p>${product.description}</p>

    <div class="mt-4">
      <div class="small fw-bold mb-2">SELECT SIZE</div>

      <button type="button" class="size-btn active">S</button>
      <button type="button" class="size-btn">M</button>
      <button type="button" class="size-btn">L</button>
      <button type="button" class="size-btn">XL</button>
    </div>

    <button
      type="button"
      class="btn btn-main w-100 mt-4 py-3"
      onclick="addToCart(${product.id})"
    >
      ADD TO BAG · ${formatPrice(product.price)}
    </button>
  </div>
</div>


`;

  const modalElement = document.getElementById("productModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

  modalElement.querySelectorAll(".size-btn").forEach((button) => {
    button.addEventListener("click", () => {
      modalElement
        .querySelectorAll(".size-btn")
        .forEach((item) => item.classList.remove("active"));

      button.classList.add("active");
    });
  });

  modal.show();
}

function toggleWishlist(button) {
  button.classList.toggle("active");

  const icon = button.querySelector("i");
  icon.classList.toggle("bi-heart");
  icon.classList.toggle("bi-heart-fill");
}

function showToast() {
  bootstrap.Toast.getOrCreateInstance(document.getElementById("cartToast"), {
    delay: 1800,
  }).show();
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

document.getElementById("productSearch").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderProducts();
});

document.getElementById("searchToggle").addEventListener("click", () => {
  document.getElementById("productSearch").focus();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("newsletterForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const input = event.target.querySelector("input");
    const button = event.target.querySelector("button");

    button.textContent = "YOU'RE IN ✓";
    input.value = "";

    setTimeout(() => {
      button.textContent = "SUBSCRIBE";
    }, 2500);
  });

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    alert("Your bag is empty.");
    return;
  }

  alert("Demo checkout — connect your payment gateway here.");
});

renderProducts();
renderCart();
