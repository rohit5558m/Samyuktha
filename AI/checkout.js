document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = {
        1: { name: 'Product 1', price: 10 },
        2: { name: 'Product 2', price: 20 },
        3: { name: 'Product 3', price: 30 },
        4: { name: 'Product 4', price: 40 },
        5: { name: 'Product 5', price: 50 },
        6: { name: 'Product 6', price: 60 }
    };

    function displayCheckoutItems() {
        const checkoutItemsContainer = document.getElementById('checkout-items');
        checkoutItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const product = products[item.id];
            if (product) {
                const checkoutItem = document.createElement('li');
                checkoutItem.textContent = `${product.name} - $${product.price} x ${item.quantity}`;
                checkoutItemsContainer.appendChild(checkoutItem);
            }
        });
    }

    document.getElementById('checkout-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your purchase!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });

    displayCheckoutItems();
});
