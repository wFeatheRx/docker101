const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// 解析表單資料
app.use(express.urlencoded({ extended: true }));

// 首頁 - 功能選單
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>功能選單</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding: 50px; background: #f0f0f0; }
          a {
            display: block;
            margin: 15px auto;
            width: 200px;
            padding: 10px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 18px;
          }
          a:hover { background-color: #0056b3; }
        </style>
      </head>
      <body>
        <h1>🧰 功能目錄</h1>
        <a href="/random">🐱 隨機貓與 🐶 狗</a>
        <a href="/calculator">🧮 計算機</a>
        <a href="/time">🕒 現在時間</a>
        <a href="/quote">💡 隨機金句</a>
      </body>
    </html>
  `);
});

// 隨機貓與狗
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
          <title>隨機貓與狗</title>
          <style>
            body { text-align: center; font-family: sans-serif; background: #f5f5f5; padding: 30px; }
            img { max-width: 300px; margin: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2); }
            button {
              padding: 10px 20px; font-size: 16px; border: none; border-radius: 5px;
              background-color: #ff69b4; color: white; cursor: pointer;
            }
            button:hover { background-color: #ff85c1; }
          </style>
        </head>
        <body>
          <h1>🐱 隨機貓與 🐶 狗</h1>
          <img src="${catImg}" alt="貓貓" />
          <img src="${dogImg}" alt="狗狗" />
          <br><br>
          <button onclick="window.location.reload()">再抽一次</button>
          <br><br>
          <a href="/">回主選單</a>
        </body>
      </html>
    `);
  } catch {
    res.status(500).send('取得圖片失敗');
  }
});

// 計算機 - 表單
app.get('/calculator', (req, res) => {
  res.send(`
    <html>
      <head><title>計算機</title></head>
      <body style="text-align:center; font-family: sans-serif;">
        <h1>🧮 簡易計算機</h1>
        <form action="/calculator" method="POST">
          <input type="number" name="a" required />
          <select name="op">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input type="number" name="b" required />
          <button type="submit">計算</button>
        </form>
        <br><a href="/">回主選單</a>
      </body>
    </html>
  `);
});

// 計算機 - 結果
app.post('/calculator', (req, res) => {
  const { a, b, op } = req.body;
  const x = parseFloat(a);
  const y = parseFloat(b);
  let result;

  switch (op) {
    case '+': result = x + y; break;
    case '-': result = x - y; break;
    case '*': result = x * y; break;
    case '/': result = y !== 0 ? x / y : '除數不能為 0'; break;
    default: result = '不支援的運算';
  }

  res.send(`
    <html>
      <body style="text-align:center; font-family: sans-serif;">
        <h1>結果：${result}</h1>
        <a href="/calculator">再算一次</a> | <a href="/">回主選單</a>
      </body>
    </html>
  `);
});

// 顯示現在時間
app.get('/time', (req, res) => {
  const now = new Date().toLocaleString();
  res.send(`
    <html>
      <body style="text-align:center; font-family: sans-serif;">
        <h1>🕒 現在時間</h1>
        <p>${now}</p>
        <a href="/">回主選單</a>
      </body>
    </html>
  `);
});

// 隨機金句
app.get('/quote', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.quotable.io/random');
    res.send(`
      <html>
        <body style="text-align:center; font-family: sans-serif; padding: 30px;">
          <h1>💡 隨機金句</h1>
          <blockquote style="font-size: 20px;">"${data.content}"</blockquote>
          <p>— ${data.author}</p>
          <a href="/quote">換一句</a> | <a href="/">回主選單</a>
        </body>
      </html>
    `);
  } catch {
    res.status(500).send('取得金句失敗');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

