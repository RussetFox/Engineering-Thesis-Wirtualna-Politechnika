import React from "react";
import '../Styles/Post-Login-Container.css'
import NavBarLogin from './Nav-Bar-Login'
import EventFrame from './Event-Frame'

export default function PostLoginFrameClaret({ children }) {
    return (
        <div className="post-login-frame">
            <div className="left-side">
                <NavBarLogin />
            </div>
            {children}
            <div className="right-side">
                <EventFrame/>
            </div>
        </div>
    )
}