from flask import Blueprint, jsonify, request

listings_bp = Blueprint('listings', __name__)

sample_listings = [
    {
        "id": 1,
        "title": "Python Tutoring",
        "type": "offer",
        "description": "Can help with basic to intermediate Python.",
        "user": "Emmanuel"
    }
]

@listings_bp.route('/api/listings', methods=['GET'])
def get_listings():
    return jsonify(sample_listings)
