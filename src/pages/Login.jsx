import styles from '../css/Login.module.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearLoginState } from '../redux/slices/loginSlice';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user, success } = useSelector(state => state.login);

  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    if(success && user) {
      navigate('/homepage'); 
      dispatch(clearLoginState());
    }
  }, [success, user, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <Layout videoUrl="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776309/20004535-uhd_2560_1440_30fps_wvukgh.mp4">
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Giriş Yap</h2>

        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Şifre:</label>
            <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required/>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>

        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}
        <p className={styles.loginPageParagraph}>Kayıtlı değil misiniz? <Link to="/register">Kayıt olun!</Link></p>
      </div>
    </Layout>
  );
}

export default Login;
