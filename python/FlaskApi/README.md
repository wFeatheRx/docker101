# Flask API 專案

## 用 COPY 的方式建立映像

docker build -f Dockerfile.copy -t docker.io/wfeatherx/flaskapi:copy .
docker run -d -p 5001:5000 --name copy docker.io/wfeatherx/flaskapi:copy   

## 用 CLONE 的方式建立映像

docker build -f Dockerfile.clone -t docker.io/wfeatherx/flaskapi:clone .  
docker run -d -p 5002:5000 --name clone docker.io/wfeatherx/flaskapi:clone

## Alpine Version  

docker build -f Dockerfile.alpine -t docker.io/wfeatherx/flaskapi:alpine .  
docker run -d -p 5003:5000 --name alpine docker.io/wfeatherx/flaskapi:alpine
