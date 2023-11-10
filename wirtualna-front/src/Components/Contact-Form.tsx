import React, { useState } from "react";
import "../Styles/Contact-Us-Page.css";
import '../Styles/Button.css'

export default function Contact_Us_Form() {
    function handleSubmit(event: any) {
        event.preventDefault();
        alert("Dziękujemy za złożenie wiadomości! Odpowiemy najszybciej jak to możliwe.");

    }
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (event: any) => {
        const name: string = event.target.name
        const value = event.target.value
        setData({ ...data, [name]: value })
    }

    return (
        <div className="contact-us-page">
            <form onSubmit={handleSubmit}>
                <h1>Skontaktuj się z nami!</h1>
                <label>
                    Imię i nazwisko:
                    <input type="name"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                        placeholder="Podaj imię"
                        minLength={4}
                        maxLength={32} />
                </label>
                <label>
                    E-mail:
                    <input type="email"
                        onChange={handleChange}
                        value={data.email}
                        name="email"
                        placeholder="example@gmail.com" />
                </label>
                <label>
                    Wiadomość:
                    <textarea name="message"
                        id=""
                        onChange={handleChange}
                        value={data.message}
                        placeholder="Twoja wiadomość"
                        minLength={60}
                        maxLength={1000} />
                </label>
                <button className ='submit-form-button' type="submit">Wyślij</button>
            </form>
        </div>
    );
}