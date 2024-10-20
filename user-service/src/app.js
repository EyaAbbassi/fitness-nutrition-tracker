// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
app.use(express.json());

// Connect to MongoDB
const mongoUri = process.env.NODE_ENV === 'test' ? process.env.MONGO_TEST_URI : process.env.MONGO_URI;

mongoose.connect(mongoUri)
    .then(() => console.log('User Service: Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
    res.send('User Service is up and running');
});
app.use('/api/users', userRoutes);

module.exports = app; // Export the app for testing purposes
