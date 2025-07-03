from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

reviews = []


@app.route('/api/reviews', methods=['GET', 'POST'])
def handle_reviews():
    if request.method == 'POST':
        data = request.get_json()
        review = {
            "name": data.get("name"),
            "message": data.get("message"),
            "category": data.get("category", "General"),
            "rating": data.get("rating", 0)
        }
        reviews.append(review)
        return jsonify({"message": "Review added"}), 201
    else:
        return jsonify(reviews)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
