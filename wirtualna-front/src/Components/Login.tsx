import React, { useState } from 'react';
import Button from "./Button"
import '../Styles/Login-Page.css';
import '../Styles/Button.css';
export default function Login() {
  const [login, setLogin] = useState(() => { return '' });
  const [password, setPassword] = useState(() => { return '' });

  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log('Zalogowano:', login, password);
  };

  return (
    <div className='gradient-background-claret'>
      <div className='login-form-frame'>
        <div className='login-form-data'>
          <h1>Zaloguj się</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label>Nazwa uzytkownika / E-mail:</label>
              <input
                type="login"
                placeholder="Wprowadź nazwę użytkownika lub e-mail"
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
          <Button text='Dołącz do nas!' color='join-us-button' pagePath = '/register' />
        </div>
      </div>
    </div>
  );
};

