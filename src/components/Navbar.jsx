export default function Navbar() {
    return (
        <div className="w-full fixed top-0 border-b-2 border-gray-700 bg-gray-900">
            <div className="w-9/12 mx-auto border-r-2 border-l-2 border-gray-700 flex justify-between">
                <div className="w-9/12 flex justify-start items-center">
                    <div className="p-5">
                        <img
                            className="w-20 h-20 text-white"
                            src="src/images/logo.svg"
                            alt="Logo"
                        />
                    </div>
                    <span className="ml-2 text-3xl font-semibold text-gray-200">
                        Novel Opinions
                    </span>
                    <div className="w-9/12 h-full flex items-center">
                        <form className="w-9/12 mx-auto">
                            <label
                                htmlFor="search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="search"
                                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                                    placeholder="Search books..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2.5 bottom-2.5 focus:outline-none rounded-lg text-sm py-2 px-4 bg-gray-300 font-bold text-gray-800 hover:bg-gray-400"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-3/12 p-2">
                    <div className="w-full h-full flex justify-evenly items-center">
                        <button className="inline-flex items-center py-2 px-4 bg-gray-300 font-bold text-gray-800 rounded hover:bg-gray-400">
                            <img
                                className="fill-current w-5 h-5"
                                src="src/images/register.svg"
                                alt="Register Icon"
                            />
                            <span className="ml-2">Register</span>
                        </button>
                        <button className="inline-flex items-center py-2 px-4 bg-gray-300 font-bold text-gray-800 rounded hover:bg-gray-400">
                            <img
                                className="fill-current w-5 h-5"
                                src="src/images/avatar.svg"
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
