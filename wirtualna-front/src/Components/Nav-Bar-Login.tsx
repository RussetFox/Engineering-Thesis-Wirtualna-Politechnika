import React from "react";
import NavButtonLogin from './Nav-Button-Logged'
import '../Styles/Navigation-Login-Container.css'
import LogoPwr from '../Resources/Logo/logo.png'
import '../Styles/Nav-Bar-Login.css'

export default function NavBarLogin() {
    return (
        <div className="navigation-container">
            <img src={LogoPwr} alt="Logo-Pwr" />
            <NavButtonLogin className = "main-page" text="Strona Główna" pagePath="/contents"/>
            <NavButtonLogin className = "edit-profile" text="O nas" pagePath="/editprofile"/>
            <NavButtonLogin className = "about-us" text="O nas" pagePath="/aboutus"/>
            <NavButtonLogin className = "contact-us" text="Kontakt" pagePath="/contact"/>
            <div>Socials</div>
        </div>
    )
}