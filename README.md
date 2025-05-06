# Docker 101: 容器化開發指南


## 專案簡介
- **專案名稱**：Docker 101
- **項目描述**：  
   - 這是一個學習和使用Docker的入門指南，提供基礎的容器化開發知識。 
   - 包括安裝、設定、運作、最佳化以及最佳實務等內容。
- **開發框架/工具**：
 - Docker Desktop: 主要使用Docker desktop GUI 進行容器編排與管理。 
 - Git: 使用Git進行程式碼管理和版本控制。 
 - 任一文字編輯工具 (e.g. Vscode) :提供命令列操作的便利性。

## 預期聽眾：
此教材會預期參加人有以下能力：
1. 某一種語言的基礎程式設計能力 (e.g. `python`, `Java`, `nodejs`)
2. 會操作 windows/Mac OS
3. 能看懂基本的英文
4. git 基本語法 (`git clone`)
以下是建議：
1. 使用過某種 Linux distro (e.g. ubuntu, RHEL)
2. 不排斥使用 CLI 

## 安裝與部署
### 系統需求
- **作業系統**：Windows/MacOs
- **所需硬體**：
 - 記憶體：至少4 GB（建議8 GB以上）
 - 磁碟空間：至少10 GB可用空間
- 主要安裝 Docker Desktop 使用
  

## 主要功能
- **容器編排**：使用Docker Compose設定檔管理容器的啟動、停止和重新啟動。
- **容器化開發**：將應用程式打包為獨立的容器，以便於部署和測試。
- **多環境支援**：在不同環境中（如測試、生產）靈活配置應用程式。

## docker 指令
進入容器環境：
```bash
docker exec -it your_container_name
```
## 注意事項
- 請確保在使用Docker之前已安裝必要軟體和依賴。
- 如果需要更多功能（如雲端服務整合），可以考慮安裝Docker Swarm和Kubernetes。

## 貢獻與協作
- **開放原始碼**：是，歡迎所有使用者貢獻程式碼和改進。
- **貢獻方式**：
- 提供程式碼到倉庫的 pull request。 
- 提出問題或建議在GitHub Issues中提交。

## 專案狀態
- 目前版本：1.0.0
- 開發人員：Ray Lin (fc.raylin9981@gmail.com)
- 維護者：Ray Lin
---
