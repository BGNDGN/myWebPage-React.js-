const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const connectDB = require('./config/mongodbConnect');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Tüm gelen istekleri logla (debug için)
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// API için middleware
app.use(cors());
app.use(express.json());

connectDB().catch(console.error);
app.use('/api', authRoutes);

// React build dosyalarını sun
const buildPath = path.resolve(__dirname, '..', 'build');
console.log('Build path:', buildPath);

app.use(express.static(buildPath));

// Basit test endpoint
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// React için tüm route'lar index.html dosyasını gönderir
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
