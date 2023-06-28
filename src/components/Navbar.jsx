import SearchBar from "./SearchBar";
import NavButton from "./NavButton";

export default function Navbar() {
    return (
        <div className="w-full fixed top-0 border-b-2 border-gray-700 bg-gray-900">
            <div className="w-9/12 mx-auto border-r-2 border-l-2 border-gray-700 flex justify-between">
                <div className="w-9/12 flex justify-start items-center">
                    <div className="p-5">
                        <img
                            className="w-20 h-20"
                            src="src/assets/images/logo.svg"
                            alt="Logo"
                        />
                    </div>
                    <span className="ml-2 text-3xl font-semibold text-gray-200">
                        Novel Opinions
                    </span>

                    {/*
                        SEARCH BAR COMPONENT
                    */}
                    <SearchBar />
                </div>
                <div className="w-3/12 p-2">
                    <div className="w-full h-full hidden lg:flex justify-evenly items-center">
                        <NavButton
                            iconSrc="src/assets/images/register.svg"
                            iconAlt="Register"
                            btnText={"Register"}
                        />
                        <NavButton
                            iconSrc="src/assets/images/avatar.svg"
                            iconAlt="Log In"
                            btnText={"Log In"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
