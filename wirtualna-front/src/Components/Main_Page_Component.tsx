import React from "react";
import ScaleText from "react-scale-text"
import Button from "./Button"
import NavBarBlue from "./Nav-Bar-Blue"
import PwrLogo from "../Resources/Logo/logo.png";


export default function Main_Page_Component() {
    return (
        <div className="gradient-background">
            <div className="front-page-frame">
                <div className="front-page-frame-photo"><img src={PwrLogo} alt="H3h3h3" /></div>
                <div className="front-page-frame-title">
                    <ScaleText>
                        Wirtualna Politechnika
                    </ScaleText>
                </div>
                <div className="front-page-frame-login" color="orange-button">
                    <Button text="Zaloguj się" color="orange-button" onClick={() => console.log("Login")} />
                </div>
                <div className="front-page-frame-register">
                    <Button text="Zarejestruj się" color="blue-button" onClick={() => console.log("Register")} />
                </div>
            </div >
            <NavBarBlue />
        </div>
    );
}