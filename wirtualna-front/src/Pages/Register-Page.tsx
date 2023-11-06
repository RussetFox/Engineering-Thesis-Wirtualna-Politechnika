import React from 'react';
import PreLoginLayout from '../Layout/Pre-Login-Layout';
import RegisterForm from '../Components/Register';

const RegisterPage: React.FC = () => {
    return (
        <PreLoginLayout>
            <RegisterForm/>
        </PreLoginLayout>
    );
};

export default RegisterPage;
