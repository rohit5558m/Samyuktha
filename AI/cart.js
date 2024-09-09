document.addEventListener('DOMContentLoaded', () => {
    const products = {
        1: { name: 'hi da', price: 10 },
        2: { name: 'Product 2', price: 20 },
        3: { name: 'Product 3', price: 30 },
        4: { name: 'Product 4', price: 40 },
        5: { name: 'Product 5', price: 50 },
        6: { name: 'Product 6', price: 60 }
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear previous items

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            return;
        }

        cart.forEach(item => {
            const product = products[item.id];
            if (product) {
                const cartItem = document.createElement('li');
                cartItem.textContent = `${product.name} - $${product.price} x ${item.quantity}`;
                cartItemsContainer.appendChild(cartItem);
            }
        });
    }

    document.getElementById('checkout-button').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    document.getElementById('clear-cart-button').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the cart?')) {
            localStorage.removeItem('cart');
            cart = [];
            displayCartItems();
            updateCartButton();
        }
    });

    function updateCartButton() {
        const cartButton = document.getElementById('cart-button');
        const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
        if (cartButton) cartButton.textContent = `Cart (${cartItemCount})`;
    }

    displayCartItems();
    updateCartButton();
});
