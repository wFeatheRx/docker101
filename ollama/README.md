# ollama

https://hub.docker.com/r/ollama/ollama

```
docker pull ollama/ollama
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

```
# api 操作
# 拉取模型
curl http://localhost:11434/api/pull -d '{"name": "llama3"}'
# 利用 LLM 產生回應
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Hello!"
}'
```

