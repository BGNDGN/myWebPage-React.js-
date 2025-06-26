import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About component', () => {
  test('Eğitim başlığı görünür', () => {
    render(<About />);
    expect(screen.getByText(/📌 Eğitim/i)).toBeInTheDocument();
  });

  test('GitHub linki doğru', () => {
    render(<About />);
    const link = screen.getByRole('link', { name: /tıklayınız!/i });
    expect(link).toHaveAttribute('href', 'https://github.com/BGNDGN?tab=repositories');
  });
});