
import PwrLogo from "../Resources/Logo/logo.png";
import NavButton from "./Nav-Button";
import ImageButton from "./Image-Nav-Button";
import InstagramLogo from "../Resources/Logo/InstagramTransparent.png";
import FacebookLogo from "../Resources/Logo/FacebookTransparent.png";
import "../Styles/Nav-Bar-Blue.css"
export default function Nav_Bar_Blue() {
    return (
        <div className='navbar-blue'>
            <ImageButton imageSource={PwrLogo} onClick={() => console.log("Logo")} />
            <NavButton text="O nas" onClick={() => console.log("About Us")} />
            <NavButton text="Kontakt" onClick={() => console.log("Kontakt")}></NavButton>
            <div className="filler"></div>
            <ImageButton imageSource={InstagramLogo} onClick={() => console.log("Instagram")} />
            <ImageButton imageSource={FacebookLogo} onClick={() => console.log("Facebook")} />
        </div>
    )
}