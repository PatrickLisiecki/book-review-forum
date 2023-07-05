export default function SignInForm() {
    return (
        <form className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
                <h1 className="align-center text-2xl">Welcome back!</h1>
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
                type="submit"
                value="Log In"
                className="bg-gray-800 mt-4 px-4 py-2 rounded-xl border-2 border-gray-800 cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
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
    );
}
