import React from "react";
import '../Styles/Post-Login-Container.css'
import NavBarLogin from './Nav-Bar-Login'

export default function PostLoginFrameClaret({ children }) {
    return (
        <div className="post-login-frame">
            <div className="left-side">
                <NavBarLogin />
            </div>
            {children}
            <div className="right-side"></div>
        </div>
    )
}