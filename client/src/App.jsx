import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Ensure this is present for styling

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
    axios.get(API_URL)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      setFormData({ name: "", message: "", category: "Product", rating: 5 });
      const res = await axios.get(API_URL);
      setReviews(res.data);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="App">
      <h1>HALCEware Review App</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your review"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Product</option>
          <option>Service</option>
          <option>Experience</option>
        </select>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          min="1"
          max="5"
          onChange={handleChange}
        />
        <button type="submit">Submit Review</button>
      </form>

      <h2>All Reviews</h2>
      <ul>
        {reviews.map((rev, index) => (
          <li key={index}>
            <strong>{rev.name}</strong> ({rev.category}) - {rev.rating}/5<br />
            {rev.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
