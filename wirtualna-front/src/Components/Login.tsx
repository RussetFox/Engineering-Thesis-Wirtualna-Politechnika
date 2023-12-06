import React, { useState } from 'react';
import Button from "./Button"
import '../Styles/Login-Page.css';
import '../Styles/Button.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const nav = useNavigate();
  const [login, setLogin] = useState(() => { return '' });
  const [password, setPassword] = useState(() => { return '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const sendData = {
        userName: login,
        password: password
      };

      await fetch("http://localhost:8080/user/auth/authenticate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(sendData)
      })
        .then(response => response.json())
        .then((data) => {
          if (data.token === "User authenticated")
            nav("/contents");
          else {alert("Niepoprawne dane logowania lub użytkownik nie istnieje");
          setPassword('')}
        })
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='gradient-background-claret'>
      <div className='login-form-frame'>
        <div className='login-form-data'>
          <h1>Zaloguj się</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label>Nazwa uzytkownika</label>
              <input
                type="login"
                placeholder="Wprowadź nazwę użytkownika"
                value={login}
                max={16}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Hasło:</label>
              <input
                type="password"
                placeholder="Wprowadź hasło"
                value={password}
                maxLength={32}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Zaloguj się</button>
          </form>
        </div>
        <div className='login-form-joinus'>
          <p>Przyłącz się do prężnie rozwijającej się społeczności i #bądźnabieżąco</p>
          <Button text='Dołącz do nas!' color='join-us-button' pagePath='/register' />
        </div>
      </div>
    </div>
  );
};

