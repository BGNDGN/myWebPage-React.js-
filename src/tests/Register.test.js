import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Register from '../pages/Register';

const mockStore = configureStore([thunk]);

describe('Register Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      register: {
        loading: false,
        error: null,
        success: false,
      },
    });
  });

  test('Form render ediliyor mu?', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Şifre/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Kaydol/i })).toBeInTheDocument();
  });
});
