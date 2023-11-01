import React from "react";
import "../Styles/Nav-Button.css"
interface ButtonProps {
    text: string;
    onClick: () =>  void;
}

const NavButton: React.FC<ButtonProps> = ({text, onClick}) => {
    return(
        <button
        className="nav-button"
        onClick={onClick}>
            {text}
            </button>
    );
}
export default NavButton;