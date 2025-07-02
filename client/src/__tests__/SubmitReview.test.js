import React from 'react';
import { render, screen } from '@testing-library/react';
import SubmitReview from '../SubmitReview';

test('renders SubmitReview component with a heading', () => {
  render(<SubmitReview />);
  const heading = screen.getByRole('heading', { name: /submit your review/i });
  expect(heading).toBeInTheDocument();
});
