// ========================
//  BACKEND  SERVER.JS
// ========================
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const connectDB   = require('./config/mongodbConnect');
const authRoutes  = require('./routes/authRoutes');

const app = express();

/* ---------- CORS ---------- */
const allowedOrigins = [
  'https://burakgundogan.net',
  'https://www.burakgundogan.net',
  'http://116.202.30.140',       // IP adresi veya ihtiyaç duyulan diğer originler
  'http://localhost:3000',       // Geliştirme ortamı için
];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // Postman gibi araçlar için
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: Bu origin izinli değil.'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

/* ---------- Middleware & Routes ---------- */
app.use(express.json());
app.use('/api', authRoutes);

/* ---------- Frontend Build klasörünü servis et ---------- */
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

/* ---------- DB & Server ---------- */
connectDB();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
