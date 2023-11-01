import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Logo-Nav-Button.css"

interface ButtonProps {
    imageSource: string;
    pagePath: string;
}

const ImageButton: React.FC<ButtonProps> = ({imageSource, pagePath}) => {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate(pagePath)
    }
    return(
        <button
        className="logo-nav"
        onClick={navigateToPage}>
            <img src={imageSource} alt="Nav Button"/>
            </button>
    );
}
export default ImageButton;