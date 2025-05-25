require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./authRoutes');

app.use(cors());
app.use(express.json());

// Подключаем роуты аутентификации
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});