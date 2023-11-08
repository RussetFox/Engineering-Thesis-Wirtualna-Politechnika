import React from "react";
import ScaleText from "react-scale-text"
import Button from "./Button"
import PwrLogo from "../Resources/Logo/logo.png";


export default function Main_Page_Component() {
    return (
        <div className="gradient-background-mainpage">
            <div className="front-page-frame">
                <div className="front-page-frame-photo"><img src={PwrLogo} alt="H3h3h3" /></div>
                <div className="front-page-frame-title">
                    <ScaleText>
                        Wirtualna Politechnika
                    </ScaleText>
                </div>
                <div className="front-page-frame-login">
                    <Button text="Zaloguj się" color="orange-button" pagePath="/login"/>
                </div>
                <div className="front-page-frame-register">
                    <Button text="Zarejestruj się" color="blue-button" pagePath="/register"/>
                </div>
            </div >
        </div>
    );
}