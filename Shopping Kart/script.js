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

const productId = document.getElementById("productId");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");

// const addProductionBtn = document.getElementById("addProduction");
const updateProductId = document.getElementById("updateProductId");
const updateProductQuantity = document.getElementById("updateProductQuantity");
// const updateQuantityBtn = document.getElementById("updateQuantity")

// const getCartBtn = document.getElementById("getCartBtn");

const removeProductid = document.getElementById("removeProductId");
// const removeProductBtn = document.getElementById("removeProductBtn");

const cartItems = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");

const messageElement = document.getElementById("message");

