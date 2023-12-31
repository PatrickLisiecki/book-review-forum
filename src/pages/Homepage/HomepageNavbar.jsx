import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function HomepageNavbar() {
    return (
        <div className="w-11/12 mx-auto border-b border-gray-300 top-0">
            <div className="w-10/12 p-5 mx-auto flex justify-between">
                <div className="w-full flex justify-start items-center">
                    <div className="flex flex-row items-center gap-2">
                        <Link to="/">
                            <FontAwesomeIcon
                                icon="fa-bookmark"
                                className="w-10 h-10 text-midnight cursor-pointer hover:text-sky-400 hover:-translate-y-[2px]"
                            />
                        </Link>
                        <span className="uppercase text-3xl font-semibold tracking-wider text-midnight">
                            Novel Opinions
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="w-full flex flex-row justify-end items-center text-xl text-midnight">
                        <li className="px-8 hover:text-sky-400">
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="px-8 hover:text-sky-400">
                            <Link to="/about">
                                <span>About</span>
                            </Link>
                        </li>
                        <li className="px-8 hover:text-sky-400">
                            <Link to="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li className="px-8">
                            <Link to="/forums">
                                <button
                                    type="button"
                                    className="min-w-[140px] flex justify-center items-center p-3 border border-gray-700 hover:border-sky-400 hover:text-sky-400 hover:-translate-y-[2px] focus:outline-none"
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
