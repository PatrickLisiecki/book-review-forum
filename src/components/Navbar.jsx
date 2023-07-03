import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import SearchBar from "../pages/Forums/SearchBar";

export default function Navbar({ data, showSignInModal }) {
    return (
        <div className="w-full fixed top-0 border-b-2 border-gray-700 bg-gray-900">
            <div className="w-9/12 mx-auto flex justify-between">
                <div className="w-full flex justify-start items-center">
                    <div className="p-5">
                        <img
                            className="w-20 h-20"
                            src="src/assets/images/logo.svg"
                            alt="Logo"
                        />
                    </div>
                    <Link
                        to="/"
                        className="ml-2 text-3xl font-semibold text-gray-200"
                    >
                        Novel Opinions
                    </Link>

                    {/*
                        SEARCH BAR COMPONENT
                    */}
                    <SearchBar data={data} />
                </div>
                <div className="w-3/12 p-2">
                    <div className="w-full h-full hidden lg:flex justify-evenly items-center">
                        <NavButton
                            showSignInModal={showSignInModal}
                            // iconSrc="src/assets/images/login.svg"
                            iconSrc="https://img.icons8.com/ios-filled/50/login-rounded-right.png"
                            iconAlt="Sign In"
                            btnText="Sign In"
                        />
                        {/* <NavButton
                            iconSrc="src/assets/images/avatar.svg"
                            iconAlt="Log In"
                            btnText={"Log In"}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
