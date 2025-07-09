const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const connectDB = require('./config/mongodbConnect');
const authRoutes = require('./routes/authRoutes');

const app = express();

const corsOptions = {
  origin: 'http://116.202.30.140', 
  credentials: true, 
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', authRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
