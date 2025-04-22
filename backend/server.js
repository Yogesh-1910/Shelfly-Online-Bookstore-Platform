const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001; // Change to a different port if needed

app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yogi123',
  database: 'contact'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Route to get contact data
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM contact';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Route to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Contact message saved');
  });
});

// Route to handle order submissions
app.post('/api/orders', (req, res) => {
  const { customerName, address, paymentMethod, cart } = req.body;

  // Insert order details into the orders table
  const orderQuery = 'INSERT INTO orders (customer_name, address, payment_method) VALUES (?, ?, ?)';
  db.query(orderQuery, [customerName, address, paymentMethod], (err, result) => {
    if (err) {
      console.error('Error inserting order details:', err);
      res.status(500).send('Failed to place order');
      return;
    }

    const orderId = result.insertId;
    const cartItems = cart.map(item => [orderId, item.name, item.price]);

    // Insert cart items into the order_items table
    const cartQuery = 'INSERT INTO order_items (order_id, item_name, item_price) VALUES ?';
    db.query(cartQuery, [cartItems], (err, result) => {
      if (err) {
        console.error('Error inserting cart items:', err);
        res.status(500).send('Failed to place order');
        return;
      }

      res.status(201).send('Order placed successfully!');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
