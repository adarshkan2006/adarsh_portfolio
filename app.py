from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name", "")
    email = data.get("email", "")
    phone = data.get("phone", "")
    message = data.get("message", "")

    print("=" * 50)
    print("NEW CONTACT FORM SUBMISSION")
    print("=" * 50)
    print(f"Name:    {name}")
    print(f"Email:   {email}")
    print(f"Phone:   {phone}")
    print(f"Message: {message}")
    print("=" * 50)

    return jsonify({"status": "success", "message": "Thank you! Your message has been received."})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
