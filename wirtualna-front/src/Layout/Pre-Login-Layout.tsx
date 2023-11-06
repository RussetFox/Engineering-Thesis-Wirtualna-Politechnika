import React from "react";
import NavBar from "../Components/Nav-Bar-Blue";

function PreLoginLayout({ children }) {
    return (
        <>
            <div>{children}</div>
            <NavBar />
        </>
    )
}
export default PreLoginLayout;