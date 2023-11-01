import React from "react";
import "../Styles/Contact-Us-Page.css";

export default function Contact_Us_Form() {
    function handleSubmit(event: any) {
        event.preventDefault();
        alert("Thank you for contacting us!");

    }
    return (
        <div className="contact-us-page">
            <div className="contact-us-container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Message:
                        <input type="text" name="message" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}