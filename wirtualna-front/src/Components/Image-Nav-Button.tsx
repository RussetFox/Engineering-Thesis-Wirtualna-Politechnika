import React from "react";
import "../Styles/Logo-Nav-Button.css"

interface ButtonProps {
    imageSource: string;
    onClick: () =>  void;
}

const ImageButton: React.FC<ButtonProps> = ({imageSource, onClick}) => {
    return(
        <button
        className="logo-nav"
        onClick={onClick}>
            <img src={imageSource} alt="Nav Button"/>
            </button>
    );
}
export default ImageButton;