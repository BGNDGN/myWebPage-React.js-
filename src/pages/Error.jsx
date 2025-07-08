import React from 'react';
import '../css/Error.css';
import { useNavigate } from 'react-router-dom';

const Error = () => {

  const navigate = useNavigate();

    return(
      <div className='errorDiv'>
        <h2>404 Not Found</h2>
        <p>Aradığınız sayfa bulunamadı.</p>
        <button onClick={() => navigate('/')}>Anasayfa'ya Git</button>
        <button onClick={() => navigate('/kullanici-listesi')}>Kullanıcı Liste'si Sayfası'na Git</button>
      </div>
    )
}

export default Error;