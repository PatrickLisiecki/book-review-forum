export default function Navbar() {
    return (
        <div className="w-full fixed top-0 border-b-2 border-gray-700 bg-gray-900">
            <div className="w-9/12 mx-auto border-r-2 border-l-2 border-gray-700 flex justify-between bg-blue-200">
                <div className="w-9/12 flex justify-start items-center bg-red-200">
                    <img
                        className="w-20 h-20"
                        src="src/images/logo.jpg"
                        alt="Logo"
                    />
                    <span className="ml-2 text-2xl font-semibold">Novel Opinions</span>
                </div>
                <div className="w-3/12 flex justify-center items-center bg-blue-400">
                    <button className="inline-flex items-center py-2 px-4 bg-gray-300 font-bold text-gray-800 rounded hover:bg-gray-400">
                        <img className="fill-current w-7 h-7 mr-2" src="src/images/avatar.svg" alt="Log In Avatar" />
                        <span>Log In</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
