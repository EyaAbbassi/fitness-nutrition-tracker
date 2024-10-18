// src/server.js
const app = require('./app'); // Import the app
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
