const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const connectDB = require('./config/mongodbConnect');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ TEST ENDPOINT
app.get('/test', (req, res) => {
  res.json({ message: 'TEST endpoint çalışıyor!' });
});

// ✅ API route'ları
app.use('/api', authRoutes);

// ✅ Frontend build klasörü
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

// ✅ DB bağlantısı
connectDB();

// ✅ Server başlat
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🟢 server.js çalıştı! Server ${PORT} portunda çalışıyor` );
});