// Global cart array to hold items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart UI
function updateCartUI() {
    let cartContainer = document.querySelector('.cart-container');

    // Retrieve cart items from local storage
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Get the index of the item to remove
                const index = button.getAttribute('data-index');
                
                // Remove the item from the cart array
                cart.splice(index, 1);
                
                // Save the updated cart array to local storage
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Update cart UI
                updateCartUI();
            });
        });
    }
}

// Function to setup navbar behavior
function setupNavbar() {
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        header.classList.toggle('active', window.scrollY > 0);
    });

    menu.onclick = () => {
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
    };
}

// Event listener for add-to-cart buttons
document.querySelectorAll('.shop-box button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');

        // Get the item details
        let itemName = button.parentElement.querySelector('h3').innerText;
        let itemPrice = button.parentElement.querySelector('h2').innerText;

        // Create an object for the cart item
        let cartItem = { name: itemName, price: itemPrice };

        // Add the item to the cart array
        cart.push(cartItem);

        // Save the updated cart array to local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart UI
        updateCartUI();
    });
});

// Run setup functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setupNavbar();
    updateCartUI();
});
