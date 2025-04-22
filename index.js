const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = {
            id: this.getAttribute('data-id'),
            name: this.getAttribute('data-name'),
            price: parseFloat(this.getAttribute('data-price')),
            image: this.getAttribute('data-image'),
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.querySelector('.navbar-toggle');
        const navbarLinks = document.querySelector('.navbar-links');

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active'); // Toggle the active class
        });
    });
});