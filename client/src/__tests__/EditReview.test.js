import React from 'react';
import { render, screen } from '@testing-library/react';
import EditReview from '../EditReview';

test('renders EditReview component with edit form', () => {
  render(<EditReview />);
  const formElement = screen.getByText(/edit your review/i);
  expect(formElement).toBeInTheDocument();
});
