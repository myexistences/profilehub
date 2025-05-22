// bot.js
require('dotenv').config();
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
  ],
});

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Temporary fallback credentials (remove after check)
const FALLBACK_BOT_TOKEN = process.env.BOT_TOKEN || '';
const FALLBACK_GUILD_ID = process.env.GUILD_ID || '';
const FALLBACK_TARGET_USER_ID = process.env.TARGET_USER_ID || '';
const FALLBACK_PORT = process.env.PORT || 3000;

const BOT_TOKEN = process.env.BOT_TOKEN || FALLBACK_BOT_TOKEN;
const GUILD_ID = process.env.GUILD_ID || FALLBACK_GUILD_ID;
const TARGET_USER_ID = process.env.TARGET_USER_ID || FALLBACK_TARGET_USER_ID;
const PORT = process.env.PORT || FALLBACK_PORT;

console.log('[CONFIG] BOT_TOKEN:', process.env.BOT_TOKEN ? 'Loaded from .env' : 'Loaded from script');
console.log('[CONFIG] GUILD_ID:', process.env.GUILD_ID ? 'Loaded from .env' : 'Loaded from script');
console.log('[CONFIG] TARGET_USER_ID:', process.env.TARGET_USER_ID ? 'Loaded from .env' : 'Loaded from script');
console.log('[CONFIG] PORT:', process.env.PORT ? 'Loaded from .env' : 'Loaded from script');

let latest = null;   // cached payload for new browser clients

/* ---------- helpers ---------- */
async function pushUpdateById(userId) {
  try {
    console.log(`[pushUpdateById] Fetching guild: ${GUILD_ID}`);
    const guild = await client.guilds.fetch(GUILD_ID);
    console.log(`[pushUpdateById] Fetching member: ${userId}`);
    const member = await guild.members.fetch(userId);
    latest = buildPayload(member);
    console.log('[pushUpdateById] Emitting status update:', latest);
    io.emit('status', latest);
  } catch (err) {
    console.error('[pushUpdateById] Error:', err);
  }
}

function buildPayload(member) {
  const user = member.user;
  const presence = member.presence ?? null;
  const status = presence?.status ?? 'offline';
  const activity = presence?.activities && presence.activities.length > 0 ? presence.activities[0] : null;

  return {
    username: user.username,
    discriminator: user.discriminator,
    avatar: user.displayAvatarURL({ dynamic: true, size: 256 }),
    status,
    activity: activity && {
      name: activity.name,
      details: activity.details,
      state: activity.state,
      largeImage: activity.assets?.largeImageURL(),
      smallImage: activity.assets?.smallImageURL(),
      type: activity.type,
    },
    timestamp: Date.now(),
  };
}

/* ---------- Discord ---------- */
client.once('ready', async () => {
  console.log(`✅  Logged in as ${client.user.tag}`);
  try {
    const guild = await client.guilds.fetch(GUILD_ID);
    console.log(`[ready] Guild fetched: ${guild.name}`);
    await guild.members.fetch();           // populate presence cache
    console.log('[ready] Members fetched');
    const target = await client.users.fetch(TARGET_USER_ID);
    console.log(`[ready] Target user fetched: ${target.username}`);
    pushUpdateById(TARGET_USER_ID);
    server.listen(PORT, () =>
      console.log(`🌐  Web server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('[ready] Error:', err);
  }
});

client.on('presenceUpdate', (_, newPresence) => {
  console.log('[presenceUpdate] Presence update received:', newPresence?.userId);
  if (newPresence?.userId === TARGET_USER_ID) pushUpdateById(TARGET_USER_ID);
});

client.on('userUpdate', (oldUser, newUser) => {
  console.log('[userUpdate] User update received:', newUser.id);
  if (newUser.id === TARGET_USER_ID && oldUser.avatar !== newUser.avatar) {
    pushUpdateById(TARGET_USER_ID);
  }
});

client.on('error', (err) => {
  console.error('[Discord Client Error]', err);
});

client.login(BOT_TOKEN).catch(err => {
  console.error('[client.login] Error:', err);
});

/* ---------- Web ---------- */
// Serve static files from the client directory (one level up from server)
app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/status', (_req, res) => {
  console.log('[API] /api/status called');
  res.json(latest);
});

app.get('/', (req, res) => {
  console.log('[API] / called');
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

io.on('connection', (socket) => {
  console.log('[Socket.IO] New client connected:', socket.id);
  if (latest) {
    console.log('[Socket.IO] Sending latest status to new client');
    socket.emit('status', latest); // send snapshot immediately
  }
  socket.on('disconnect', () => {
    console.log('[Socket.IO] Client disconnected:', socket.id);
  });
});

module.exports = { app, server };
