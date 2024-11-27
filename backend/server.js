const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const dotenv = require('dotenv');
const app = express();

dotenv.config();  

app.use(cors()); 

// Middleware
app.use(express.json());

// Routes
app.use('/contact', contactRoutes);

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on http://localhost:5000');
});
