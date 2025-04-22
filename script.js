document.addEventListener('DOMContentLoaded', function() {
  // Fetch and display data
  fetch('http://localhost:3001/api/data') // Use the new port
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-container');
      data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = JSON.stringify(item); // Replace with your desired data format
        dataContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  // UI interactions for header, menu icon, and navbar
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

  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3001/api/contact', { // Use the new port
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text()) // Use .text() because the backend responds with a plain text message
    .then(responseText => {
      console.log('Success:', responseText);
      // Display a success message
      const messageElement = document.createElement('p');
      messageElement.textContent = 'Form Submitted';
      messageElement.style.color = 'green'; // Optional: Change the text color to green
      document.getElementById('contact-form').appendChild(messageElement);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
