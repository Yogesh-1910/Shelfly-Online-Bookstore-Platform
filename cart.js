// Function to place an order
function placeOrder() {
    // Get customer details from form
    let customerName = document.getElementById('customer-name').value;
    let address = document.getElementById('address').value;
    let paymentMethod = document.getElementById('payment-method').value;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to the cart before placing an order.');
        return;
    }

    // Create order object
    let order = {
        customerName: customerName,
        address: address,
        paymentMethod: paymentMethod,
        cart: cart
    };

    // Send order data to the backend
    fetch('http://localhost:3306/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order placed:', data);
        alert('Thank you for your order!');

        // Clear the cart after placing the order
        localStorage.removeItem('cart');
        updateCartUI();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error placing your order. Please try again.');
    });
}

// Run the function to update the cart UI when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});
