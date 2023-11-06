
import PwrLogo from "../Resources/Logo/logo.png";
import NavButton from "./Nav-Button";
import ImageButton from "./Image-Nav-Button";
import InstagramLogo from "../Resources/Logo/InstagramTransparent.png";
import FacebookLogo from "../Resources/Logo/FacebookTransparent.png";
import "../Styles/Nav-Bar-Blue.css"
export default function Nav_Bar_Blue() {
    return (
        <div className='navbar-blue'>
            <ImageButton imageSource={PwrLogo} pagePath="/"/>
            <NavButton text="O nas" pagePath="/aboutus"></NavButton>
            <NavButton text="Kontakt" pagePath="/contact"></NavButton>
            <div className="filler"></div>
            <ImageButton imageSource={InstagramLogo} pagePath="/instagram"/>
            <ImageButton imageSource={FacebookLogo} pagePath="/facebook"/>
        </div>
    )
}