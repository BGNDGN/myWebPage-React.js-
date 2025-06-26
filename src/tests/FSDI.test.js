import React from 'react';
import { render, screen } from '@testing-library/react';
import FSDI from '../components/FSDI';

describe('FSDI component', () => {
  test('Full-Stack Developer Intern başlığı görünür', () => {
    render(<FSDI />);
    expect(screen.getByText(/Full-Stack Developer Intern/i)).toBeInTheDocument();
  });

  test('Bir liste öğesi görünür', () => {
    render(<FSDI />);
    expect(screen.getByText(/Nuxt.js ile frontend geliştirmelerine başladım/i)).toBeInTheDocument();
  });
});