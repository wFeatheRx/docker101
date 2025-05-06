const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/random', async (req, res) => {
  try {
    const [catRes, dogRes] = await Promise.all([
      axios.get('https://api.thecatapi.com/v1/images/search'),
      axios.get('https://dog.ceo/api/breeds/image/random')
    ]);

    const catImg = catRes.data[0].url;
    const dogImg = dogRes.data.message;

    res.send(`
      <html>
        <head>
          <title>Random Cat & Dog</title>
          <style>
            body { text-align: center; font-family: sans-serif; background: #f5f5f5; padding: 30px; }
            img { max-width: 300px; margin: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2); }
            button {
              padding: 10px 20px;
              font-size: 16px;
              border: none;
              border-radius: 5px;
              background-color: #ff69b4;
              color: white;
              cursor: pointer;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            button:hover {
              background-color: #ff85c1;
            }
          </style>
        </head>
        <body>
          <h1>🐱 隨機貓與 🐶 狗</h1>
          <div>
            <h2>貓</h2>
            <img src="${catImg}" alt="Random Cat" />
          </div>
          <div>
            <h2>狗</h2>
            <img src="${dogImg}" alt="Random Dog" />
          </div>
          <button onclick="window.location.reload()">再抽一次</button>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send('取得圖片失敗');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

