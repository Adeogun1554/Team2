import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductFilter from '../ProductFilter';

test('renders ProductFilter component with filter label', () => {
  render(<ProductFilter />);
  const labelElement = screen.getByText(/filter by category/i);
  expect(labelElement).toBeInTheDocument();
});
