import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductReviewView from '../ProductReviewView';

test('renders ProductReviewView component with product title', () => {
  render(<ProductReviewView />);
  const titleElement = screen.getByText(/product reviews/i);
  expect(titleElement).toBeInTheDocument();
});
