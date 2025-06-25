const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const connectDB = require('./config/mongodbConnect');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connect
connectDB().catch(console.error);

// Routes
app.use('/api', authRoutes);

// Test endpoint (isteğe bağlı)
app.get('/', (req, res) => {
  res.send('API Çalışıyor ✔️');
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
