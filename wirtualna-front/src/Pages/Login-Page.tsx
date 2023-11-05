import React from 'react';
import PreLoginLayout from '../Layout/Pre-Login-Layout';
import LoginForm from '../Components/Login-Form';

interface LoginPageProps {
    isLoginChosen: boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({isLoginChosen}) => {
    return (
        <PreLoginLayout>
            <LoginForm isLoginChosen = {isLoginChosen} />
        </PreLoginLayout>
    );
};

export default LoginPage;
