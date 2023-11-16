import React from "react";
import NavButtonLogin from './Nav-Button-Logged'
import '../Styles/Navigation-Login-Container.css'
import LogoPwr from '../Resources/Logo/logo.png'
import FBLogo from '../Resources/Logo/FacebookTransparent.png'
import IGLogo from '../Resources/Logo/InstagramTransparent.png'

export default function NavBarLogin() {
    return (
        <div className="navigation-container">
            <div className="Logo-Container">
                <img className='Logo-Pwr' src={LogoPwr} alt="Logo-Pwr" />
            </div>
            <NavButtonLogin className="main-page" text="Strona Główna" pagePath="/contents" />
            <div className="separator"></div>
            <NavButtonLogin className="edit-profile" text="Edytuj Profil" pagePath="/editprofile" />
            <div className="separator"></div>
            <NavButtonLogin className="about-us" text="O nas" pagePath="/aboutus" />
            <div className="separator"></div>
            <NavButtonLogin className="contact-us" text="Kontakt" pagePath="/contact" />
            <div className="socials">
                <img src={FBLogo} className="Facebook" alt="Facebook" />
                <img src={IGLogo} className="IG" alt = "IG"/>
            </div>
        </div>
    )
}