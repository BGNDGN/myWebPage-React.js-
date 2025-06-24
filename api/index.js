const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../server/.env') });

const connectDB = require('../server/config/mongodbConnect');
const authRoutes = require('../server/routes/authRoutes');

const app = express();

connectDB().catch(console.error);
app.use(express.json());

app.use('/api', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'API çalışıyor!' });
});

module.exports.handler = serverless(app);
