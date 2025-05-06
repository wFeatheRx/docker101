from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")  # 確保 index.html 存在於 templates 資料夾中

@app.route("/ping")
def ping():
    return "pong"

@app.route("/hello/<name>")
def hello(name):
    return f"Hello, {name}!"

@app.route("/status")
def status():
    return {"status": "running", "version": "1.0"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

