import axios from 'axios';

// Use environment variable for flexibility
const API_URL = process.env.REACT_APP_API_URL;

// GET all reviews
export const getReviews = () => axios.get(`${API_URL}/api/reviews`);

// POST a new review
export const postReview = (review) => axios.post(`${API_URL}/api/reviews`, review);
