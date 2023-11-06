import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register () {
  const [login, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if(password !== passwordRepeat) {
        alert("Hasła nie są takie same");
        return;
    }
    console.log('Zarejestrowano:', login, email, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Login:</label>
          <input
            type="text"
            placeholder="Wprowadź nazwę użytkownika"
            value={login}
            onChange={(e) => setName(e.target.value)}
            required = {true}
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
      <p>Masz już konto?</p>
      <Link to = '/login'>Zaloguj się!</Link>
    </div>
  );
};