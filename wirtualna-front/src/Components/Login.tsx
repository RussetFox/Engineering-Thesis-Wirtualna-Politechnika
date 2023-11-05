import React, { useState } from 'react';

export default function Login() {
  const [login, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log('Zalogowano:', login, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nazwa uzytkownika / E-mail:</label>
          <input
            type="login"
            placeholder="Wprowadź nazwę użytkownika lub e-mail"
            value={login}
            onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
};

