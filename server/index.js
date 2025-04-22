const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});