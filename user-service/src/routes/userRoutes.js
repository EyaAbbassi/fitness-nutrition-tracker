// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Simple route to create a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' });
        }
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to register user' });
    }
});

module.exports = router;
