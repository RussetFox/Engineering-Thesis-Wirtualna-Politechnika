import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Button.css"
interface ButtonProps {
    text: string;
    color: string;
    pagePath: string;
}

const Button: React.FC<ButtonProps> = ({text, color, pagePath}) => {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate(pagePath)
    }
    return(
        <button
        className= {`button ${color}`}
        onClick={navigateToPage}>
            {text}
            </button>
    );
}
export default Button;