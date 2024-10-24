const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Додайте підтримку CORS
app.use(cors());

// Проксі-маршрут
app.use('/proxy', createProxyMiddleware({
  target: 'https://slovnyk.ua', // Цільовий ресурс, до якого будемо пересилати запити
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // Видаляє "/proxy" з URL перед пересиланням запиту
  },
}));

// Запускаємо сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Проксі-сервер працює на порту ${PORT}`);
});