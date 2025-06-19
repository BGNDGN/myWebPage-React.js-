import React from 'react';
import { render, screen } from '@testing-library/react';
import SSS from '../components/SSS';

describe('SSS component', () => {
  test('Software Support Specialist başlığı görünür', () => {
    render(<SSS />);
    expect(screen.getByText(/Software Support Specialist/i)).toBeInTheDocument();
  });

  test('Liste elemanlarından biri görünür', () => {
    render(<SSS />);
    expect(screen.getByText(/Jira üzerinde tanımlanan görevleri/i)).toBeInTheDocument();
  });
});
