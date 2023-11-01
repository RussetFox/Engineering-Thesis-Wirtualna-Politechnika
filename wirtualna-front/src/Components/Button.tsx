import React from "react";
import "../Styles/Button.css"
interface ButtonProps {
    text: string;
    color: string;
    onClick: () =>  void;
}

const Button: React.FC<ButtonProps> = ({text, color, onClick}) => {
    return(
        <button
        className= {`button ${color}`}
        onClick={onClick}>
            {text}
            </button>
    );
}
export default Button;