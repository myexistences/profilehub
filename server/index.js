// This is the main entry point for the application
// It imports the bot.js module which sets up both the Discord bot and web server

// Import the bot module (this will initialize both Discord bot and web server)
const { app, server } = require('./bot');

// If you need to add any additional routes or configuration, you can do so here
// app.get('/additional-route', (req, res) => { ... });

// No need to start the server here as it's already started in bot.js
console.log('Server started via bot.js');