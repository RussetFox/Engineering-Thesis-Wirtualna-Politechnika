import React from "react";
import "../Styles/Contact-Us-Page.css";
import "../Styles/Gradient_Background.css"

import ContactForm from "./Contact-Form";

export default function Contact_Us() {
    return (
        <div className="gradient-background-claret">
            <h1>Zmienić właściwości i budowę div'ów w pliku w celu poprawy wyglądu. Dodać klasę dla forma i wstukiwać wartości</h1>
            <ContactForm/>
        </div>
    );
}