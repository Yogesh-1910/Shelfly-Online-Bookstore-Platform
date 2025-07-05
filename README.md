# 🛒 Shelfly - Online Bookstore Platform

Shelfly is a modern and responsive online bookstore platform built to streamline the process of browsing, purchasing, and managing books. It provides a seamless experience for both customers and administrators.

## 📌 Features

- 📚 Browse books by categories
- 🔍 Search for books by name, author, or genre
- 🛒 Add books to cart and checkout
- 👤 User registration and login system
- 🧾 Order history and invoices
- 🛠️ Admin dashboard for managing books and users
- 🌐 Responsive UI for web and mobile

## 🏗️ Tech Stack

**Frontend:**
- HTML5, CSS3
- JavaScript

**Backend:**
- PHP
- MySQL

**Other Tools:**
- Bootstrap (for UI components)
- Apache (XAMPP recommended for local dev)

## 🗂️ Project Structure

```plaintext
Shelfly-Online-Bookstore-Platform-main/
│
├── admin/              # Admin dashboard
├── assets/             # CSS, JS, and images
├── books/              # Book listings
├── cart/               # Cart functionality
├── checkout/           # Order placement and billing
├── includes/           # Reusable components and database configs
├── login/              # User login/registration
├── orders/             # User orders history
├── index.php           # Homepage
├── contact.php         # Contact form
└── about.php           # About us page
```

## 🚀 Getting Started

### Prerequisites

- XAMPP / WAMP installed
- PHP 7.x or higher
- MySQL

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Shelfly-Online-Bookstore-Platform.git
   ```

2. Move the folder to your XAMPP `htdocs` directory:
   ```bash
   mv Shelfly-Online-Bookstore-Platform-main /xampp/htdocs/shelfly
   ```

3. Import the database:
   - Open `phpMyAdmin`
   - Create a new database, e.g., `shelfly_db`
   - Import the `shelfly_db.sql` file (if provided)

4. Start Apache and MySQL from XAMPP Control Panel

5. Access the platform:
   ```
   http://localhost/shelfly/
   ```

## 🔐 Admin Login

- **URL:** `http://localhost/shelfly/admin/`
- **Default Credentials:**
  - Username: `admin`
  - Password: `admin123`

*(You can change these in the database or via code.)*

## 💻 Developers

**Yogesh S** -
https://github.com/Yogesh-1910

**Danush G** - 
https://github.com/Danush6123



