// PRODUCT DATA

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 3,
        name: "Casual Shoes",
        price: 1999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 4,
        name: "Backpack",
        price: 999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 5,
        name: "Sunglasses",
        price: 799,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 6,
        name: "Leather Wallet",
        price: 699,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
    }
];


// CART

let cart = [];


// DISPLAY PRODUCTS

function displayProducts(productList) {

    const container =
        document.getElementById("product-container");

    container.innerHTML = "";

    if (productList.length === 0) {

        container.innerHTML =
            "<p>No products found.</p>";

        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button
                    class="btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;

        container.appendChild(card);
    });
}


// ADD TO CART

function addToCart(id) {

    const product =
        products.find(item => item.id === id);

    cart.push(product);

    updateCart();

    alert(product.name + " added to cart!");
}


// UPDATE CART

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <div>
                <strong>${item.name}</strong>
                <br>
                ₹${item.price}
            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    cartCount.textContent = cart.length;

    cartTotal.textContent = total;
}


// REMOVE FROM CART

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// SEARCH

document
    .getElementById("search")
    .addEventListener("input", filterProducts);


// CATEGORY

document
    .getElementById("category")
    .addEventListener("change", filterProducts);


// FILTER PRODUCTS

function filterProducts() {

    const searchValue =
        document
            .getElementById("search")
            .value
            .toLowerCase();

    const categoryValue =
        document
            .getElementById("category")
            .value;

    const filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchValue);

            const matchesCategory =
                categoryValue === "all" ||
                product.category === categoryValue;

            return matchesSearch && matchesCategory;
        });

    displayProducts(filtered);
}


// CHECKOUT

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Order placed successfully! Thank you for shopping with ShopEase."
    );

    cart = [];

    updateCart();
}


// CONTACT FORM

document
    .getElementById("contact-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been sent."
        );

        this.reset();
    });


// INITIAL DISPLAY

displayProducts(products);

updateCart();