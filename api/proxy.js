const express = require("express");

const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: '*' 
}
 //  Дозволяємо запити з будь-якого джерела
  ));

app.get('/proxy', async (req, res) => {
  try {
    // Зробіть запит до стороннього сайту
    const response = await fetch('https://slovnyk.ua/index.php?s1=9&s2=0');

    // Перевіряємо статус відповіді
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Помилка при запиті: ' + error.message);
  }
});

module.exports = app;


// "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1",
  //   "start": "node server.js"
  // },