import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearRegisterState } from '../redux/slices/registerSlice';
import styles from '../css/Register.module.css';
import signUpImage from '../assets/undraw_fingerprint-login_19qv.webp';
import Layout from '../components/Layout';
import { Eye, EyeOff } from 'lucide-react';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.register);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (success) {
      alert('Kayıt başarılı! Giriş yapabilirsiniz.');
      dispatch(clearRegisterState());
      navigate('/login');
    }
  }, [success, dispatch, navigate]);

  const validateName = (name) => {
    if (/\d/.test(name)) {
      return 'Sayı girilemez.';
    }
    if (name.length > 0 && /^[a-z]/.test(name[0])) {
      return 'İlk karakter büyük olmalı.';
    }
    return '';
  };

  const validateEmail = (email) => {
    const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Geçerli gmail, hotmail veya outlook adresi girin.';

    const domain = email.split('@')[1];
    if (!allowedDomains.includes(domain)) return 'Geçerli gmail, hotmail veya outlook adresi girin.';
    return '';
  };

  const validatePassword = (password) => {
    const startsWithUpper = /^[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    if (!startsWithUpper || !hasNumber) {
      return 'Şifre büyük harf ile başlamalı ve en az 1 rakam içermelidir.';
    }
    return '';
  };

  const handleNameChange = (e) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
    if (submitted) {
      setFormErrors((prev) => ({ ...prev, name: validateName(e.target.value) }));
    }
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    if (submitted) {
      setFormErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
    }
  };

  const handlePasswordChange = (e) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
    if (submitted) {
      setFormErrors((prev) => ({ ...prev, password: validatePassword(e.target.value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setFormErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
    });

    if (!nameError && !emailError && !passwordError) {
      dispatch(registerUser(formData));
    }
  };

  return (
    <Layout videoUrl="https://burakgundogan.net/videos/1093662-hd_1920_1080_30fps.mp4">
      <div className={styles.RegisterMain}>
        <h2 className={styles.registerTitle}>Kayıt Sayfası</h2>

        <form className={styles.registerZone} onSubmit={handleSubmit}>

          <div className={styles.registerInputGroup}>
            <label htmlFor="name">İsim:</label>
            <input
              id="name"
              className={styles.registerInputField}
              name="name"
              type="text"
              maxLength={23}
              value={formData.name}
              onChange={handleNameChange}
              required
            />
          </div>
          {submitted && formErrors.name && (
            <p className={styles.registerInputError}>{formErrors.name}</p>
          )}

          <div className={styles.registerInputGroup}>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              className={styles.registerInputField}
              name="email"
              type="email"
              maxLength={23}
              value={formData.email}
              onChange={handleEmailChange}
              required
            />
          </div>
          {submitted && formErrors.email && (
            <p className={styles.registerInputError}>{formErrors.email}</p>
          )}

          <div className={styles.registerInputGroup}>
            <label htmlFor="password">Şifre:</label>
            <div className={styles.passwordInputWrapper}>
              <input
                id="password"
                className={styles.registerInputField}
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handlePasswordChange}
                maxLength={17}
                required
                name="password"
                aria-describedby="passwordHelp"
              />
              <button
                type="button"
                aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                className={styles.registerEyeButton}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {submitted && formErrors.password && (
            <p className={styles.registerInputError}>{formErrors.password}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={styles.registerSubmitButton}
          >
            {loading ? 'Kaydoluyor...' : 'Kaydol'}
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <p className={styles.ifUWantToRegister}>
            Eğer kayıt olmadan anasayfaya gitmek istiyorsanız{' '}
            <Link to="/homepage">tıklayınız !</Link>
          </p>
        </form>

        <div className={styles.photographZone}>
          <h2 className={styles.tokenIsSafingYourInfos}>
            Tüm bilgileriniz Token ile gizlenmektedir.
          </h2>
          <hr className={styles.tokenIsSafingYourInfosHr}></hr>
          <img
            className={styles.registerImage}
            src={signUpImage}
            alt="Kayıt Ol"
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Register;
