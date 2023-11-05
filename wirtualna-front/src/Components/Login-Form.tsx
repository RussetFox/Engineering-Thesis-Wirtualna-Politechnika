import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
// import './SwitchableForm.css'; // Import your CSS styles here

export default function LoginForm({ isLoginChosen }) {
  const [isLoginVisible, setLoginVisible] = useState(isLoginChosen);

  const toggleForm = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <div className="switchable-form-container">
      <div className={`form-container ${isLoginVisible ? 'login-form' : 'register-form'}`}>
        {isLoginVisible ? <Login /> : <Register />}
      </div>
      <div>
        <p className="toggle-button-text">
          {isLoginVisible ? 'Nie masz jeszcze konta?' : 'Masz już konto?'}
        </p>
        <button className="toggle-button" onClick={toggleForm}>
          {isLoginVisible ? 'Zarejestruj się' : 'Zaloguj się'}
        </button>
      </div>
    </div>
  );
};
