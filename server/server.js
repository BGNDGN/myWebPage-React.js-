const express = require('express');
const app = express();
app.use(express.json());

// API route örneği
app.get('/api/health', (req, res) => {
  res.json({ status: 'API çalışıyor!' });
});

// Diğer router'lar burada...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server ${PORT} portunda çalışıyor`));
