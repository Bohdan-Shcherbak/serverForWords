const http = require('http');

// Створюємо сервер
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

// Запускаємо сервер
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});

// Автоматично закриваємо сервер після 10 секунд
setTimeout(() => {
  server.close(() => {
    console.log('Сервер зупинено');
  });
}, 10000); // 10 секунд роботи сервера
