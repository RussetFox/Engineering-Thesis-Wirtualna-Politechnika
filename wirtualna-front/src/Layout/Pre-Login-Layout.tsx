import React from "react";
import NavBar from "../Components/Nav-Bar-Blue";

function PreLoginLayout({ children }) {
    return (
        <div>
            <div>{children}</div>
            <NavBar />
        </div>
    )
}
export default PreLoginLayout;