import React, { useState } from 'react';
import '../Styles/Register-Page.css'
import Button from './Button'
import { Link } from 'react-router-dom';

export default function Register() {
  const [login, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      alert("Hasła nie są takie same");
      return;
    }
    console.log('Zarejestrowano:', login, email, password);
  };

  return (
    <div className='gradient-background-purple'>
      <div className='register-form-frame'>
        <div className='register-form-data'>
          <h1>Zarejestruj się!</h1>
          <form onSubmit={handleRegister}>
            <div>
              <label>Login:</label>
              <input
                type="text"
                placeholder="Wprowadź nazwę użytkownika"
                value={login}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </div>
            <div>
              <label>E-mail:</label>
              <input
                type="email"
                placeholder="Wprowadź adres e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Hasło</label>
              <input
                type="password"
                placeholder="Wprowadź hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Powtórz hasło</label>
              <input
                type="password"
                placeholder="Powtórz hasło"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
                required
              />
            </div>
            <button type="submit">Zarejestruj się</button>
          </form>
        </div>
        <div className='register-form-login'>
          <p>Jesteś już częścią naszej społeczności?</p>
          <Button text='Zaloguj się!' color='login-to-button' pagePath = '/login' />
        </div>
      </div>
    </div>
  );
};