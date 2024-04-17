import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [loginState, setLoginState] = useState("Login");
    const toggleLoginState = () => {
        loginState === "Login"
            ? setLoginState("Logout")
            : setLoginState("Login");
    };
    const isUserOnline = useOnlineStatus();
    return (
        <div className="header flex justify-between p-2 items-center bg-slate-900 shadow-xl text-gray-400">
            <div className="logo-box w-20">
                <img src={LOGO_URL} className="rounded-[50%]" />
            </div>
            <div className="nav-items">
                <ul className="nav-item-list flex gap-4 ">
                    <li>Online Status: {isUserOnline ? "✅" : "🚫"}</li>
                    <Link
                        to={"/"}
                        className="hover:cursor-pointer hover:text-gray-100"
                    >
                        Home
                    </Link>
                    <Link
                        to={"about"}
                        className="hover:cursor-pointer hover:text-gray-100"
                    >
                        About us
                    </Link>
                    <Link
                        to={"contact"}
                        className="hover:cursor-pointer hover:text-gray-100"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to={"/"}
                        className="hover:cursor-pointer hover:text-gray-100"
                    >
                        Cart
                    </Link>
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
