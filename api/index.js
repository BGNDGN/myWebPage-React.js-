// api/index.js
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const connectDB = require('./config/mongodbConnect');
const authRoutes = require('./routes/authRoutes');

connectDB().catch(console.error);

app.use(express.json());
app.use('/api', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'API çalışıyor!' });
});

module.exports = app;
module.exports.handler = serverless(app);
