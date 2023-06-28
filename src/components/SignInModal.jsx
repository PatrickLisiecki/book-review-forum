export default function Modal({ isVisible, hideModal }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div
            onClick={hideModal}
            className="fixed inset-0 flex justify-center items-center backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-xl w-6/12 mx-auto flex flex-col"
            >
                <div className="rounded-xl text-gray-800 p-8 bg-gray-300">
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="align-center text-2xl">
                                Welcome back!
                            </h1>
                            <button
                                onClick={hideModal}
                                className="text-gray-200"
                            >
                                <img
                                    src="src/assets/images/x-icon.png"
                                    className="h-10 w-10"
                                />
                            </button>
                        </div>

                        <fieldset className="flex flex-col gap-1 mt-2">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                            />
                        </fieldset>

                        <fieldset className="flex flex-col gap-1 mt-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                            />
                        </fieldset>

                        <input
                            className="bg-white hover:bg-gray-200 transition mt-4 px-4 py-2 border-2 border-gray-800 cursor-pointer text-gray-800"
                            type="submit"
                            value="Log In"
                        />

                        <div className="flex flex-row justify-center items-center mt-2 text-l">
                            <span>
                                New to Novel Opinions?
                                <a
                                    href="#"
                                    className="ml-1 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                                >
                                    Sign Up
                                </a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
