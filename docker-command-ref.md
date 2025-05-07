# Docker 常用指令備忘錄

## 容器管理指令

| 指令 | 說明 | 範例 |
|------|------|------|
| `docker run [-it --name <name> -p <host_port>:<container_port>] <image>` | 啟動一個容器，指定名稱與埠口 | `docker run -it --name my-nginx -p 8080:80 nginx` |
| `docker ps [-a]` | 顯示容器列表，加 `-a` 顯示包含已停止的 | `docker ps -a` |
| `docker rm [-f] <container>` | 刪除容器，`-f` 可強制 | `docker rm -f my-nginx` |
| `docker logs <container>` | 查看容器日誌 | `docker logs my-nginx` |
| `docker exec [-it] <container> <command>` | 在容器中執行指令，常用 `bash` | `docker exec -it my-nginx bash` |

## 映像檔管理指令

| 指令 | 說明 | 範例 |
|------|------|------|
| `docker images` | 列出本地映像檔 | `docker images` |
| `docker rmi <image>` | 刪除映像檔 | `docker rmi nginx` |
| `docker build [-t <name> -f <Dockerfile>] <path>` | 建立映像，指定名稱與 Dockerfile 路徑 | `docker build -t myapp -f Dockerfile .` |
| `docker tag <image> <new_tag>` | 重新命名映像（常用於推送） | `docker tag myapp myrepo/myapp:latest` |
| `docker push <image>` | 推送映像到 registry | `docker push myrepo/myapp:latest` |
| `docker inspect <object>` | 查看容器或映像詳細資料 | `docker inspect my-nginx` |

## 常用參數說明

- `-it`: 互動式終端
- `--name`: 指定容器名稱
- `-p`: 連接埠映射 (主機:容器)
- `-a`: 顯示所有（包括已停止的）
- `-f`: 強制執行
- `-t`: 為映像指定標籤名稱
- `-f <Dockerfile>`: 指定 Dockerfile 位置

## 其他實用指令

| 指令 | 說明 | 範例 |
|------|------|------|
| `docker stop <container>` | 停止運行中的容器 | `docker stop my-nginx` |
| `docker start <container>` | 啟動已停止的容器 | `docker start my-nginx` |
| `docker restart <container>` | 重新啟動容器 | `docker restart my-nginx` |
| `docker pull <image>` | 僅下載映像檔而不啟動 | `docker pull ubuntu:20.04` |
| `docker volume ls` | 列出所有卷宗 | `docker volume ls` |
| `docker network ls` | 列出所有網路 | `docker network ls` |


