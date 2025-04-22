document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    const shipping = cart.length > 0 ? 100 : 0; 

    function renderCart() {
        cartItemsContainer.innerHTML = ""; 
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
            subtotalElement.textContent = "0.00";
            totalElement.textContent = "0.00";
            shippingElement.textContent = "0.00";
            return;
        }

        subtotal = 0; 
        cart.forEach((item, index) => {
            const price = parseFloat(item.price);
            const quantity = item.quantity || 1;
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="100">
                <h4>${item.name}</h4>
                <p>₹${price.toFixed(2)}</p>
                <div class="quantity-control">
                    <button class="decrease-quantity" data-index="${index}">-</button>
                    <span class="quantity">${quantity}</span>
                    <button class="increase-quantity" data-index="${index}">+</button>
                </div>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            subtotal += price * quantity;
        });

        subtotalElement.textContent = subtotal.toFixed(2);
        shippingElement.textContent = shipping.toFixed(2);
        const total = subtotal + shipping;
        totalElement.textContent = total.toFixed(2);
    }

    cartItemsContainer.addEventListener('click', function (event) {
        const index = event.target.getAttribute('data-index');

        if (event.target.classList.contains('remove-item')) {
            cart.splice(index, 1);
        } else if (event.target.classList.contains('increase-quantity')) {
            cart[index].quantity = (cart[index].quantity || 1) + 1;
        } else if (event.target.classList.contains('decrease-quantity')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); 
    });

    renderCart(); 
});
