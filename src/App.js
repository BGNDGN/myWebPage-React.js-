import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
