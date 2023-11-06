import React from 'react';
import PreLoginLayout from '../Layout/Pre-Login-Layout';
import LoginForm from '../Components/Login';

const LoginPage: React.FC = () => {
    return (
        <PreLoginLayout>
            <LoginForm/>
        </PreLoginLayout>
    );
};

export default LoginPage;
