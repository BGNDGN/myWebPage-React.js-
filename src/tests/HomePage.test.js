import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../pages/HomePage';

describe('HomePage component', () => {
  beforeEach(() => {
    delete window.open;
    window.open = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Gönder butonuna tıklayınca window.open çağrılır', () => {
    render(<HomePage />);

    const emailInput = screen.getByPlaceholderText(/E-posta adresiniz/i);
    const subjectInput = screen.getByPlaceholderText(/Konu başlığı/i);
    const button = screen.getByText(/Gönder/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test konusu' } });

    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('https://mail.google.com/mail/?view=cm&fs=1&to=burakgundogan25@gmail.com'),
      '_blank'
    );
  });
});