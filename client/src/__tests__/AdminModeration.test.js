import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminModeration from '../AdminModeration';

test('renders AdminModeration component with moderation header', () => {
  render(<AdminModeration />);
  const header = screen.getByText(/admin moderation/i);
  expect(header).toBeInTheDocument();
});
