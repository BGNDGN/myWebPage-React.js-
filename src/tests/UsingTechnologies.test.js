import React from 'react';
import { render, screen } from '@testing-library/react';
import UsingTechnologies from '../components/UsingTechnologies';

describe('UsingTechnologies component', () => {
  test('Frontend başlığı görünür', () => {
    render(<UsingTechnologies />);
    expect(screen.getByText(/Frontend:/i)).toBeInTheDocument();
  });

  test('React Router listede var', () => {
    render(<UsingTechnologies />);
    expect(screen.getByText(/React Router/i)).toBeInTheDocument();
  });

  test('GitHub linki doğru', () => {
    render(<UsingTechnologies />);
    const link = screen.getByRole('link', { name: /tıklayınız!/i });
    expect(link).toHaveAttribute('href', 'https://github.com/BGNDGN?tab=repositories');
  });
});
