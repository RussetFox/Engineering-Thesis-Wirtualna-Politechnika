import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState(() => {return ''});
  const [password, setPassword] = useState(() => {return ''});

  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log('Zalogowano:', login, password);
  };

  return (
    <div className='login-form-frame'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nazwa uzytkownika / E-mail:</label>
          <input
            type="login"
            placeholder="Wprowadź nazwę użytkownika lub e-mail"
            value={login}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Zaloguj się</button>
      </form>
      <p>Nie masz jeszcze konta?</p>
      <Link to = '/register'>Dołącz do nas!</Link>
    </div>
  );
};

