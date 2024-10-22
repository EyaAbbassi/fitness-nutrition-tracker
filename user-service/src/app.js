// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

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

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'User Service API',
      version: '1.0.0',
      description: 'API documentation for User Service',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3001}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define routes
app.get('/', (req, res) => {
    res.send('User Service is up and running');
});
app.use('/api/users', userRoutes);

module.exports = app;
