// Sample Healthcare Website Homepage in JavaScript

// Import necessary libraries and modules
const express = require('express');
const app = express();

// Define the homepage route
app.get('/', (req, res) => {
  // Create a basic HTML template for the homepage
  const homepage = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Healthcare Website</title>
      </head>
      <body>
        <header>
          <h1>Welcome to Our Healthcare Center</h1>
        </header>
        <nav>
          <ul>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/doctors">Our Doctors</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <section>
          <h2>About Us</h2>
          <p>Welcome to our healthcare center. We provide top-quality healthcare services to our community.</p>
        </section>
        <footer>
          <p>&copy; 2023 Healthcare Center</p>
        </footer>
      </body>
    </html>
  `;

  res.send(homepage);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Healthcare website is running on port 3000');
});
