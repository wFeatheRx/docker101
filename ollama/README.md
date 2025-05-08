# ollama

https://hub.docker.com/r/ollama/ollama

## 下載 ollama container 並執行

```
docker pull ollama/ollama
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

## 執行 ollama

```
# 拉模型
curl http://localhost:11434/api/pull -d '{"name": "llama3"}'
# 產生回應
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Hello!"
}'
```





# k8s 參考

```
# api 操作
# 拉取模型
NODE_IP=172.16.147.161
# 拉模型
curl http://${NODE_IP}:32767/api/pull -d '{"name": "llama3"}'
# 產生回應
curl http://${NODE_IP}:32767/api/generate -d '{
  "model": "llama3",
  "prompt": "Hello!"
}'
```

