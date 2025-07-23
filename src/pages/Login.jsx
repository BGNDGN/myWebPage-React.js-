import styles from '../css/Login.module.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearLoginState } from '../redux/slices/loginSlice';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Eye, EyeOff } from 'lucide-react';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user, success } = useSelector(state => state.login);

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (success && user) {
      navigate('/homepage');
      dispatch(clearLoginState());
    }
  }, [success, user, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateEmail = (email) => {
    const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) return false;

    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
  };

  const validatePassword = (password) => {
    const startsWithUpper = /^[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return startsWithUpper && hasNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let errors = {};

    if (!validateEmail(formData.email)) {
      errors.email = 'Lütfen geçerli bir e-posta adresi girin (gmail, hotmail, outlook).';
      valid = false;
    }

    if (!validatePassword(formData.password)) {
      errors.password = 'Şifre büyük harf ile başlamalı ve en az 1 rakam içermelidir.';
      valid = false;
    }

    setFormErrors(errors);

    if (valid) {
      dispatch(loginUser(formData));
    }
  };

  return (
    <Layout videoUrl="https://burakgundogan.net/videos/20004535-uhd_2560_1440_30fps_wvukgh.mp4">
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Giriş Yap</h2>

        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" name="email" maxLength={30} value={formData.email} onChange={handleChange} required/>
            {formErrors.email && <p className={styles.errorMessage}>{formErrors.email}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Şifre:</label>
            <div className={styles.loginPasswordWrapper}>
              <input id="password"type={showPassword ? 'text' : 'password'} maxLength={17} name="password" value={formData.password} onChange={handleChange} required/>
              <button className={styles.loginEyeButton} type="button" onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <EyeOff size={18} color="black"/> : <Eye size={18} color="black"/>}
              </button>
            </div>
            {formErrors.password && <p className={styles.errorMessage}>{formErrors.password}</p>}
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
