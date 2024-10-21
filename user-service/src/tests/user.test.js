// src/tests/user.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');

describe('User Service API', () => {
    const mongoUri = process.env.NODE_ENV === 'test' ? process.env.MONGO_TEST_URI : process.env.MONGO_URI;
    
    // Connect to MongoDB before all tests
    beforeAll(async () => {
        await mongoose.connect(mongoUri);
    });

    // Clear the database before each test
    beforeEach(async () => {
        await User.deleteMany({});
    });

    // Test for user registration
    it('should register a new user', async () => {
        const newUser = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'Test@1234',
        };

        const response = await request(app)
            .post('/api/users/register')
            .send(newUser);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'User registered.');
        expect(response.body).toHaveProperty('userId');

        // Verify the user was added to the database
        const user = await User.findOne({ email: newUser.email });
        expect(user).not.toBeNull();
        expect(user.isVerified).toBe(true);
        expect(user.verificationToken).not.toBeNull();
    });

    // Test for user registration with an existing email
    it('should not register an existing user', async () => {
        const existingUser = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'Test@1234',
        };

        // Register the user for the first time
        await request(app)
            .post('/api/users/register')
            .send(existingUser);

        // Attempt to register the same user again
        const response = await request(app)
            .post('/api/users/register')
            .send(existingUser);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'User already exists');
    });

    // Test for missing required fields
    it('should return 500 for missing fields', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({}); // Sending an empty request

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message', 'Server error');
    });

    // Close the database connection after all tests
    afterAll(async () => {
        await mongoose.connection.close();
    });
});
