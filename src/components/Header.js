import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  const toggleLoginState = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };
  return (
    <div className="header">
      <div className="logo-box">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="nav-item-list">
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
