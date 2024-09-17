const express = require('express');
const PORT = 3000;
const app = express();
const { connectDB } = require('../database.js'); // Adjust the path as needed


async function startServer() {
  const isConnected = await connectDB();
  isConnected
    ? app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
    : console.error('Failed to connect to MongoDB. Server not started.');
}

// Start the server
startServer();
