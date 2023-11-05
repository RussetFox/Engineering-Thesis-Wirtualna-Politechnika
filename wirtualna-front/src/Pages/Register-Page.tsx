import React from 'react';
import PreLoginLayout from '../Layout/Pre-Login-Layout';
import LoginForm from '../Components/Login-Form';

const RegisterPage: React.FC = () => {
    return (
        <PreLoginLayout>
            <LoginForm isLoginChosen = {false}/>
        </PreLoginLayout>
    );
};

export default RegisterPage;
