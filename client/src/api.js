import axios from 'axios';

const API_URL = 'https://congenial-giggle-q76pprr6wpqv369wq-5000.app.github.dev/api/reviews';

export const getReviews = () => axios.get(API_URL);
export const postReview = (review) => axios.post(API_URL, review);
