import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";  // ✅ Make sure this is included

const API_URL = "https://halceware.onrender.com/api/reviews";


function App() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    category: "Product",
    rating: 5,
  });

  useEffect(() => {
    axios.get(API_URL).then((res) => setReviews(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, formData);
    setFormData({ name: "", message: "", category: "Product", rating: 5 });
    const res = await axios.get(API_URL);
    setReviews(res.data);
  };

  return (
    <div className="container">
      <h1>HALCEware Review App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <textarea
          placeholder="Your review"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="Product">Product</option>
          <option value="Service">Service</option>
          <option value="Business">Business</option>
        </select>
        <input
          type="number"
          min="1"
          max="5"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
        />
        <button type="submit">Submit Review</button>
      </form>

      <h2>All Reviews</h2>
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <strong>{review.name}</strong> rated <b>{review.rating}</b>/5 for <em>{review.category}</em>
          <p>{review.message}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
