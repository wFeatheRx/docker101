# Flask API 專案

## 用 COPY 的方式建立映像

docker build -f Dockerfile.copy -t flask-api .
docker run -p 5001:5000 flask-api

## 用 CLONE 的方式建立映像

docker build -f Dockerfile.clone -t flask-api .
docker run -p 5001:5000 flask-api

