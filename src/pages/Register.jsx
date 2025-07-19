import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearRegisterState } from '../redux/slices/registerSlice';
import styles from '../css/Register.module.css';
import signUpImage from '../assets/undraw_fingerprint-login_19qv.webp';
import Layout from '../components/Layout';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.register);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (success) {
      alert('Kayıt başarılı! Giriş yapabilirsiniz.');
      dispatch(clearRegisterState());
      navigate('/login');
    }
  }, [success, dispatch, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <Layout videoUrl="https://burakgundogan.net/videos/13523849_2160_3840_100fps_iwomk6.mp4">
      <div className={styles.RegisterMain}>
        <h2 className={styles.registerTitle}>Kayıt Sayfası</h2>

        <form className={styles.registerZone} onSubmit={handleSubmit}>
          <label>
            <span>İsim:</span>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>Şifre:</span>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Kaydoluyor...' : 'Kaydol'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className={styles.ifUWantToRegister}>
            Eğer kayıt olmadan anasayfaya gitmek istiyorsanız{' '}
            <Link to="/homepage">tıklayınız !</Link>
          </p>
        </form>

        <div className={styles.photographZone}>
          <h2 className={styles.tokenIsSafingYourInfos}>Tüm bilgileriniz Token ile gizlenmektedir.</h2>
          <hr className={styles.tokenIsSafingYourInfosHr}></hr>
          <img
            src={signUpImage}
            alt="Kayıt Ol"
            className={styles.registerImage}
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Register;
