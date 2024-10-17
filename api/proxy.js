import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors()); // Додаємо підтримку CORS

const PORT = 3001; 
// Порт для вашого проксі

// Маршрут для запиту до зовнішнього сайту
app.get('/proxy', async (req, res) => {
  try {
    const response = await fetch('https://slovnyk.ua'); // Ваше посилання
    const data = await response.text(); // Отримуємо відповідь
    res.send(data); // Відправляємо дані клієнту
  } catch (error) {
    res.status(500).send('Помилка при запиті: ' + error.message);
  }
});

module.exports = app;

app.listen(PORT, () => {
  console.log(`Проксі-сервер запущено на порту ${PORT}`);
});