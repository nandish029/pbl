// cart.js

// Initialize the cart or retrieve it from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];



// Function to add items to the cart
function addToCart(id, title, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        alert('This item is already in the cart');
    } else {
        cart.push({ id, title, price, image });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');
    }
}

// Function to display the cart items
function displayCart() {
    const cartTable = document.getElementById('cartTable').querySelector('tbody');
    const totalPriceElement = document.getElementById('totalPrice');
    
    cartTable.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const row = cartTable.insertRow();
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.title}" width="50"></td>
            <td>${item.title}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="remove" button onclick="removeFromCart('${item.id}')">Remove</button></td>
        `;
        totalPrice += item.price;
        
            });
     totalPrice=NaN;
    totalPriceElement.textContent = totalPrice.toFixed(2);
    
        }

// Function to remove items from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Display the cart when the cart page is loaded
if (window.location.pathname.endsWith('cart.html')) {
    document.addEventListener('DOMContentLoaded', displayCart);
}