import { Link } from "react-router-dom";
import React from "react";

export default function HomepageNavbar() {
    return (
        <div className="w-11/12 mx-auto border-b-2 border-gray-300 top-0">
            <div className="w-10/12 p-5 mx-auto flex justify-between">
                <div className="w-full flex justify-start items-center">
                    <div className="flex flex-row items-center gap-2">
                        <img
                            className="w-16 h-16"
                            src="src/assets/images/darkLogo.svg"
                            alt="Logo"
                        />
                        <span className="uppercase text-3xl font-semibold tracking-wider text-midnight">
                            Novel Opinions
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="w-full flex flex-row justify-end items-center text-xl text-midnight">
                        <li className="px-10 hover:text-blue-500">
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="px-10 hover:text-blue-500">
                            <Link to="/about">
                                <span>About</span>
                            </Link>
                        </li>
                        <li className="px-10 hover:text-blue-500">
                            <Link to="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li className="px-10">
                            <Link to="/forum">
                                <button
                                    type="button"
                                    className="text-white bg-gray-800 text-base font-semibold rounded-full px-7 py-4 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                                >
                                    Go to Forum
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
