import { Link } from "react-router-dom";
import React from "react";

export default function HomepageIntro() {
    return (
        <div className="w-full pt-10 pb-16">
            <div className="w-10/12 mx-auto flex justify-center items-center">
                <div className="w-6/12 flex flex-col justify-center items-center text-center text-midnight">
                    <span className="font-light text-6xl leading-tight tracking-tight">
                        Unveiling Literary Horizons,
                    </span>
                    <span className="font-bold text-6xl leading-tight mb-10">
                        A Haven for Book Lovers
                    </span>
                    <p className="text-xl">
                        Discover the vibrant and inclusive book review forum,
                        where avid readers gather to share their literary
                        adventures, engage in insightful discussions, and
                        discover a world of captivating stories.
                    </p>
                    <div className="w-full p-5 mt-12 flex flex-row justify-center gap-20">
                        <Link to="/signup">
                            <button className="w-56 relative flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-midnight rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200">
                                <span className="w-56 px-10 py-4 text-gray-600 bg-white relative transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 group-hover:text-white">
                                    Sign Up
                                </span>
                            </button>
                        </Link>
                        <Link to="/forums">
                            <button
                                type="button"
                                className="w-56 px-10 py-4 text-white text-xl font-medium bg-gradient-to-br from-green-400 to-blue-600 rounded-lg hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-200"
                            >
                                Go to Forum
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
