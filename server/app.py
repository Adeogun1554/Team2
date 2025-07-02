from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")

reviews = []

@app.route('/api/reviews', methods=['GET', 'POST'])
def review_handler():
    if request.method == 'POST':
        data = request.get_json()
        reviews.append(data)
        return jsonify({"message": "Review added!"}), 201
    return jsonify(reviews)

if __name__ == '__main__':
    app.run(debug=True)
