
const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Serve the "About us" page
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

// Serve the "Services" page
app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/services.html');
});

// Serve the "Contact" page
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
