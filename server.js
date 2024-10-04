const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const fetch = require('node-fetch'); 
const { exec } = require('child_process');



let newValue = '';
function mainF(){
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
}

let link = 'https://slovnyk.ua/index.php?s1=18&s2=74';

fetch(link)
  .then((response) =>{
    if (!response.ok) {
      console.log('noOk');
    } else{
        console.log('OOK');
    }
  return response.text();
  })
  .then((text)=>{
    // console.log(text);
    newValue = text.slice(1,100);

  })
  .catch((error) => {
    console.log('noOk2');
  });