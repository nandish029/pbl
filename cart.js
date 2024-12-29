// Initialize the book or retrieve it from localStorage
let book = JSON.parse(localStorage.getItem('book')) || [];

// Function to add items to the book
function addToCart(id, title, price, image) {
    const existingItem = book.find(item => item.id === id);
    if (existingItem) {
        alert('This item is already in the cart');
    } else {
        book.push({ id, title, price, image });
        localStorage.setItem('book', JSON.stringify(book));
        alert('Item added to cart');
    }
}

// Function to display the book items
function displayCart() {
    const cartTable = document.getElementById('cartTable').querySelector('tbody');
    const totalPriceElement = document.getElementById('totalPrice');
    
    cartTable.innerHTML = ''; // Clear the table
    let totalPrice = 0;

    book.forEach(item => {
        const row = cartTable.insertRow();
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.title}" width="50"></td>
            <td>${item.title}</td>
            <td>&#8377;${item.price.toFixed(2)}</td>
            <td><button class="remove" onclick="removeFromCart('${item.id}')">Remove</button></td>
        `;
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2); // Display the total price
}

// Function to remove items from the book
function removeFromCart(id) {
    book = book.filter(item => item.id !== id);
    localStorage.setItem('book', JSON.stringify(book));
    displayCart();
}

// Display the cart when the cart page is loaded
if (window.location.pathname.endsWith('cart.html')) {
    document.addEventListener('DOMContentLoaded', displayCart);
}
