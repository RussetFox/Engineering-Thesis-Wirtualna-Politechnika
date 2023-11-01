import React from "react";
import { useNavigate } from 'react-router-dom';
interface ButtonProps {
    text: string;
    pagePath: string;
}


const NavButton: React.FC<ButtonProps> = ({ text, pagePath}) => {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate(pagePath)
    }

    return (
        <button
            className="nav-button"
            onClick={navigateToPage}>
            {text}
        </button>
    );
}
export default NavButton;