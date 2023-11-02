import React, { useState } from "react";
import "../Styles/Contact-Us-Page.css";

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
        const name = event.target.name
        const value = event.target.value
        setData({...data, [name]:value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
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
            <button type="submit">Wyślij</button>
        </form>
    );
}