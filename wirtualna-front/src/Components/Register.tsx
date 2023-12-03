import React, { useEffect, useState } from 'react';
import '../Styles/Register-Page.css'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom';

//Zamiast ścieżek na sztywno to napisać ścieżki routera

export default function Register() {
  const [login, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  var shouldNavigate: boolean = false;
  const nav = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      alert("Hasła nie są takie same");
      return;
    }
    try {
      const sendData = {
        userName: login,
        email: email,
        password: password
      };

      await fetch("http://localhost:8080/user/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(sendData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          nav("/contents");
        })
    } catch (error) {
      console.error('Error:', error);
    }
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
            <button type="submit" onSubmit={handleRegister}>Zarejestruj się</button>
          </form>
        </div>
        <div className='register-form-login'>
          <p>Jesteś już częścią naszej społeczności?</p>
          <Button text='Zaloguj się!' color='login-to-button' pagePath='/login' />
        </div>
      </div>
    </div>
  );
};