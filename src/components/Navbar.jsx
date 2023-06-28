import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <div className="w-full fixed top-0 border-b-2 border-gray-700 bg-gray-900">
            <div className="w-9/12 mx-auto border-r-2 border-l-2 border-gray-700 flex justify-between">
                <div className="w-9/12 flex justify-start items-center">
                    <div className="p-5">
                        <img
                            className="w-20 h-20 text-white"
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
                    <div className="w-full h-full flex justify-evenly items-center">
                        <button className="inline-flex items-center py-2 px-4 bg-gray-300 font-bold text-gray-800 rounded hover:bg-gray-400">
                            <img
                                className="fill-current w-5 h-5"
                                src="src/assets//images/register.svg"
                                alt="Register Icon"
                            />
                            <span className="ml-2">Register</span>
                        </button>
                        <button className="inline-flex items-center py-2 px-4 bg-gray-300 font-bold text-gray-800 rounded hover:bg-gray-400">
                            <img
                                className="fill-current w-5 h-5"
                                src="src/assets/images/avatar.svg"
                                alt="Log In Icon"
                            />
                            <span className="ml-2">Log In</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
