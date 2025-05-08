import requests
import json
import sys

# 支援從命令列參數傳入 OLLAMA_URL，否則使用預設值
OLLAMA_URL = sys.argv[1] if len(sys.argv) > 1 else "http://172.16.147.161:32767"

def generate_text():
    prompt = input("請輸入提示詞 (prompt): ")
    model = input("模型名稱 (預設 llama3): ") or "llama3"
    data = {
        "model": model,
        "prompt": prompt,
        "stream": True
    }
    print("=== 回覆內容 ===")
    try:
        with requests.post(f"{OLLAMA_URL}/api/generate", json=data, stream=True) as r:
            for line in r.iter_lines():
                if line:
                    try:
                        res = json.loads(line)
                        if "response" in res:
                            print(res["response"], end='', flush=True)
                        else:
                            print(f"\n[⚠️ 無 response 欄位]: {res}")
                    except json.JSONDecodeError as e:
                        print(f"\n[❌ JSON 解碼錯誤]: {e}")
    except Exception as e:
        print(f"[❌ 發生錯誤]: {e}")
    print("\n=== 結束 ===")

def chat_mode():
    model = input("模型名稱 (預設 llama3): ") or "llama3"
    messages = []
    print("輸入 'exit' 結束聊天")
    while True:
        user_input = input("你：")
        if user_input.lower() == "exit":
            break
        messages.append({"role": "user", "content": user_input})
        data = {
            "model": model,
            "messages": messages,
            "stream": True
        }
        print("AI：", end='')
        reply = ""
        try:
            with requests.post(f"{OLLAMA_URL}/api/chat", json=data, stream=True) as r:
                for line in r.iter_lines():
                    if line:
                        try:
                            res = json.loads(line)
                            content = res.get("message", {}).get("content", "")
                            print(content, end='', flush=True)
                            reply += content
                        except json.JSONDecodeError as e:
                            print(f"\n[❌ JSON 解碼錯誤]: {e}")
        except Exception as e:
            print(f"[❌ 發生錯誤]: {e}")
        print()
        messages.append({"role": "assistant", "content": reply})

def list_models():
    try:
        r = requests.get(f"{OLLAMA_URL}/api/tags")
        print("=== 模型清單 ===")
        for m in r.json().get("models", []):
            print(f"- {m['name']}")
    except Exception as e:
        print(f"[❌ 取得模型列表錯誤]: {e}")

def pull_model():
    name = input("要拉取的模型名稱：")
    try:
        r = requests.post(f"{OLLAMA_URL}/api/pull", json={"name": name}, stream=True)
        for line in r.iter_lines():
            if line:
                print(json.loads(line).get("status", ""), flush=True)
    except Exception as e:
        print(f"[❌ 拉取模型錯誤]: {e}")

def delete_model():
    name = input("要刪除的模型名稱：")
    try:
        r = requests.post(f"{OLLAMA_URL}/api/delete", json={"name": name})
        print("刪除結果：", r.text)
    except Exception as e:
        print(f"[❌ 刪除模型錯誤]: {e}")

def create_model():
    name = input("模型新名稱：")
    base = input("使用的基礎模型 (如 llama3)：")
    system_prompt = input("System prompt：")
    modelfile = f"FROM {base}\nSYSTEM {system_prompt}"
    try:
        r = requests.post(f"{OLLAMA_URL}/api/create", json={"name": name, "modelfile": modelfile})
        print("建立結果：", r.text)
    except Exception as e:
        print(f"[❌ 建立模型錯誤]: {e}")

def embeddings():
    prompt = input("請輸入文字以取得 embedding：")
    model = input("模型名稱 (預設 llama3): ") or "llama3"
    try:
        r = requests.post(f"{OLLAMA_URL}/api/embeddings", json={"model": model, "prompt": prompt})
        res = r.json()
        print("向量長度：", len(res.get("embedding", [])))
    except Exception as e:
        print(f"[❌ 向量取得錯誤]: {e}")

def main_menu():
    while True:
        print("\n===== Ollama API 操作選單 =====")
        print("1. 單輪文字產生 (/api/generate)")
        print("2. 多輪聊天 (/api/chat)")
        print("3. 取得模型列表 (/api/tags)")
        print("4. 拉取模型 (/api/pull)")
        print("5. 刪除模型 (/api/delete)")
        print("6. 建立自定模型 (/api/create)")
        print("7. 文字嵌入向量 (/api/embeddings)")
        print("0. 離開")
        choice = input("請輸入選項：")

        if choice == "1":
            generate_text()
        elif choice == "2":
            chat_mode()
        elif choice == "3":
            list_models()
        elif choice == "4":
            pull_model()
        elif choice == "5":
            delete_model()
        elif choice == "6":
            create_model()
        elif choice == "7":
            embeddings()
        elif choice == "0":
            break
        else:
            print("無效選項，請重試。")

if __name__ == "__main__":
    main_menu()
