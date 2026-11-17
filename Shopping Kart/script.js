"use strict";

function createShoppingCart() {
    let cart = [];

    return {
        addProduct(product) {
            if (!product || 
                !Number.isInteger(product.id) ||
                product.id <= 0 ||
                typeof product.name !== "string" ||
                product.name.trim() == "" ||
                !Number.isFinite(product.price) ||
                product.price < 0 || 
                !Number.isInteger(product.quantity) ||
                product.quantity <= 0
            ) {
                return {
                    success: false,
                    message: "Invalid Product Details!"
                }
            }

            const existingProduct = cart.find(
                item => item.id === product.id
            )

            if (existingProduct) {
                existingProduct.quantity += product.quantity;

                return {
                    success: true,
                    message: "Existing Product updated!"
                };
            }

            cart.push({
                ...product,
                name: product.name.trim()
            })

            return {
                success: true,
                message: "Product added successfully!"
            };
        },

        removeProduct(productId) {
            const existingProduct = cart.find(
                item => item.id === productId
            )

            if (!existingProduct) {
                return {
                    success: false,
                    message: "Product not found!"
                }
            }

            cart = cart.filter(
                item => item.id !== productId
            )

            return {
                success: true,
                message: "Product successfully deleted!"
            }
        },

        updateQuantity(productId, quantity) {
            if(!Number.isInteger(quantity) || quantity <= 0) {
                return {
                    success: false,
                    message: "Quantity must be a positive INTEGER!"
                }
            }

            const product = cart.find(
                item => item.id !== productId
            )

            if (!product) {
                return {
                    success: false,
                    message: "Product was not found!"
                }
            }

            product.quantity = quantity;

            return {
                success: true,
                message: "Product quanity updated successfully!"
            }
        },

        getCartTotal() {
            return cart.reduce((total, product) => {
                return total + product.price * product.quantity;
            }, 0)
        },

        getCartItems() {
            return cart.map(product => ({
                ...product
            }))
        },

        clearCart() {
            cart = [];
            return {
                success: true,
                message: "Shopping cart deleted!"
            }
        }
    }
}

// logic created


const shoppingCart = createShoppingCart(); // shopping cart instance created

const productIdInput = document.getElementById("productId");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productQuantityInput = document.getElementById("productQuantity");

// const addProductionBtn = document.getElementById("addProduction");
const updateProductIdInput = document.getElementById("updateProductId");
const updateProductQuantityInput = document.getElementById("updateProductQuantity");
// const updateQuantityBtn = document.getElementById("updateQuantity")

// const getCartBtn = document.getElementById("getCartBtn");

const removeProductidInput = document.getElementById("removeProductId");
// const removeProductBtn = document.getElementById("removeProductBtn");

const cartItemsContainer = document.getElementById("cartItems");

const cartTotalElement = document.getElementById("cartTotal");

const messageElement = document.getElementById("message");

function showMessage(message) {
    messageElement.textContent = message;
}

function renderCartItems() {
    const items = shoppingCart.getCartItems();

    cartItemsContainer.replaceChildren();

    if (items === 0) {
        const empyMessage = document.createElement("li");
        empyMessage.textContent = "You cart is empty!"
        cartItemsContainer.appendChild(empyMessage);
        return;
    }

    items.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `
        ID: ${product.id} ||
        Name: ${product.name} ||
        Price: ${product.price.toFixed(2)} ||
        Quantity: ${product.quantity} ||
        Subtotal: ${(product.price * product.quantity).toFixed(2)}
        
        `;

        cartItemsContainer.appendChild(li);
    })
}

function renderTotal () {
    const total = shoppingCart.getCartTotal();

    cartTotalElement.textContent = `Total: ₹${total.toFixed(2)}`
}

document.getElementById("addProduction").addEventListener("click", () => {
    const product = {
        id: Number(productIdInput.value),
        name: productNameInput.value,
        price: Number(productPriceInput.value),
        quantity: Number(productQuantityInput.value)
    }

    const result = shoppingCart.addProduct(product);

    showMessage(result.message);

    console.log(result.message);

    if(result.success) {
        renderCartItems();
        renderTotal();

        productIdInput.value = "";
        productNameInput.value = "";
        productPriceInput.value = "";
        productQuantityInput.value = "1";
    }
})

document.getElementById("removeProductBtn").addEventListener("click", () => {
    const productId = Number(removeProductidInput.value);
    const result = shoppingCart.removeProduct(productId);

    showMessage(result.message);

    if(result.success) {
        renderCartItems();
        renderTotal();

        removeProductidInput = "";
    }
})

document.getElementById("updateQuantity").addEventListener("click", () => {
    const productId = Number(updateProductIdInput.value);
    const quanity = Number(updateProductQuantityInput.value);

    const result = shoppingCart.updateQuantity(productId, quanity);

    showMessage(result.message);

    if (result.success) {
        renderCartItems();
        renderTotal();

        updateProductIdInput.value = "";
        updateProductQuantityInput.value = "";
    }
})

document.getElementById("getCartBtn").addEventListener("click", () => {
    renderCartItems();

    showMessage("Cart items displayed");
})

document.getElementById("getTotalBtn").addEventListener("click", () => {
    renderTotal();
    showMessage("Cart total Calculated")
})

document.getElementById("clearCartBtn").addEventListener("click", () => {
    const result = shoppingCart.clearCart();

    renderCartItems();
    renderTotal();

    showMessage(result.message);
})