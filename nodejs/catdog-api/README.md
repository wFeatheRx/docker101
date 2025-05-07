# COPY 版本
## build
docker build -f Dockerfile.copy -t docker.io/raylin9981/docker101:catdog-api-copy .
## run
docker run -d -p 3000:3000 --name catadog-api-copy docker.io/raylin9981/docker101:catdog-api-copy

# git clone 版本

## build
docker build -f Dockerfile.git -t docker.io/raylin9981/docker101:catdog-api-git .
## run
docker run -d -p 3001:3000 --name catdog-api-git  docker.io/raylin9981/docker101:catdog-api-git
