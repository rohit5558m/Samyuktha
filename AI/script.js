document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Hi da', price: 10 },
        { id: 2, name: 'Prdfuct 2', price: 20 },
        { id: 3, name: 'Prdfdft 3', price: 30 },
        { id: 4, name: 'Prdfduct 4', price: 40 },
        { id: 5, name: 'dfduct 5', price: 50 },
        { id: 6, name: 'Prodfct 6', price: 60 }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addProductToCart(productId) {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
        updateCartButton();
    }

    function updateCartButton() {
        const cartButton = document.getElementById('cart-button');
        const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
        if (cartButton) cartButton.textContent = `Cart (${cartItemCount})`;
    }

    document.getElementById('products').addEventListener('click', event => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.closest('.product').getAttribute('data-id'), 10);
            addProductToCart(productId);
        }
    });

    updateCartButton();
});
