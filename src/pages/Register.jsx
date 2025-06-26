import React, { useState, useEffect, useRef  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearRegisterState } from '../redux/slices/registerSlice';
import '../css/Register.css';
import signUpImage from '../assets/undraw_fingerprint-login_19qv.webp';

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

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video otomatik oynatma engellendi.', error);
        });
      }
    }
  }, []);

  return (
    <div>
      <video autoPlay loop muted className="backgroundVideoRegister" playsInline preload="auto">
        <source src="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776326/13523849_2160_3840_100fps_iwomk6.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
      </video>
      <h2 className="registerTitle">Kayıt Sayfası</h2>
      <div className="RegisterMain">
        <form className="registerZone" onSubmit={handleSubmit}>
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
          <button type="submit" disabled={loading}>{loading ? 'Kaydoluyor...' : 'Kaydol'}</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className="ifUWantToRegister">Eğer kayıt olmadan anasayfaya gitmek istiyorsanız{' '}<Link to="/homepage">tıklayınız !</Link></p>
        </form>

        <div className="verticalDivider"></div>

        <div className="photographZone">
          <h2>Tüm bilgileriniz Token ile gizlenmektedir.</h2>
          <img
            src={signUpImage}
            alt="Kayıt Ol"
            className="registerImage"
            loading="lazy" 
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
