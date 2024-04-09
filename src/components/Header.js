import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    const [loginState, setLoginState] = useState("Login");
    const toggleLoginState = () => {
        loginState === "Login"
            ? setLoginState("Logout")
            : setLoginState("Login");
    };
    return (
        <div className="header">
            <div className="logo-box">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="nav-item-list">
                    <Link to={"/"}>Home</Link>
                    <Link to={"about"}>About us</Link>
                    <Link to={"contact"}>Contact Us</Link>
                    <Link to={"/"}>Cart</Link>
                    <li>
                        <button className="btn" onClick={toggleLoginState}>
                            {loginState}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
