import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Login from '../pages/Login';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Login Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      login: {
        loading: false,
        error: null,
        user: null,
        success: false,
      },
    });

    store.dispatch = jest.fn();
  });

  test('form alanları ve buton doğru render olur', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Şifre/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Giriş Yap/i })).toBeInTheDocument();
  });

  test('inputlara veri girilebilir', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByLabelText(/E-mail/i);
    const passwordInput = screen.getByLabelText(/Şifre/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('123456');
  });

  test('form submit edildiğinde loginUser action dispatch edilir', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByLabelText(/E-mail/i);
    const passwordInput = screen.getByLabelText(/Şifre/i);
    const submitButton = screen.getByRole('button', { name: /Giriş Yap/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  test('loading durumunda buton disable olur ve yükleniyor yazısı gösterilir', () => {
    store = mockStore({
      login: {
        loading: true,
        error: null,
        user: null,
        success: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeDisabled();
    expect(submitButton.textContent).toBe('Giriş yapılıyor...');
  });

  test('hata varsa hata mesajı gösterilir', () => {
    store = mockStore({
      login: {
        loading: false,
        error: 'Geçersiz e-posta veya şifre',
        user: null,
        success: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Geçersiz e-posta veya şifre/i)).toBeInTheDocument();
  });
});