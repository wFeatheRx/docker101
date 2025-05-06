# build
docker build -t catdog-api:latest .
# run
docker run -d -p 3000:3000 --name catdog-api catdog-api:latest

