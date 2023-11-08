import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login-Page.css';
export default function Login() {
  const [login, setLogin] = useState(() => { return '' });
  const [password, setPassword] = useState(() => { return '' });

  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log('Zalogowano:', login, password);
  };

  return (
    <div className='login-page'>
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
          <p>Nie masz jeszcze konta?</p>
          <Link to='/register'>Dołącz do nas!</Link>
        </div>
      </div>
    </div>
  );
};
