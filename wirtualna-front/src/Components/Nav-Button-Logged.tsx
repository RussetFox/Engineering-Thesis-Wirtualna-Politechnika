import React from "react";
import { useNavigate } from 'react-router-dom';
interface ButtonProps {
    text: string;
    pagePath: string;
    className: string;
}


const NavButtonLogged: React.FC<ButtonProps> = ({className, text, pagePath}) => {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate(pagePath)
    }

    return (
        <button
            className= {className}
            onClick={navigateToPage}>
            {text}
        </button>
    );
}
export default NavButtonLogged;