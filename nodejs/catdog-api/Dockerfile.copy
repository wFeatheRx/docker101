# 使用 Node.js 官方映像
FROM node:18

# 建立應用目錄
WORKDIR /app

# 複製檔案
COPY package.json ./
RUN npm install

COPY index.js ./

# 啟動應用
CMD ["npm", "start"]

# 開放 port
EXPOSE 3000

