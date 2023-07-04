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
                    <span className="font-bold text-6xl leading-tight mb-4">
                        A Haven for Book Lovers
                    </span>
                    <div className="w-10/12">
                        <p className="text-xl">
                            Discover the vibrant and inclusive book review
                            forum, where avid readers gather to share their
                            literary adventures, engage in insightful
                            discussions, and discover a world of captivating
                            stories.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-10/12 h-auto mx-auto mt-10 flex flex-row justify-evenly">
                <div className="w-6/12 max-h-full flex flex-col justify-center items-end">
                    <div className="w-full max-w-xl mb-4">
                        <span className="text-4xl font-bold leading-tight text-midnight">
                            Why Novel Opinions?
                        </span>
                    </div>
                    <p className="text-lg max-w-xl">
                        Connect, learn, and inspire with like-minded individuals
                        on a user-friendly platform. Discover endless
                        possibilities, meaningful discussions, and valuable
                        insights. Embrace collaboration, personal growth, and
                        the power of collective wisdom. Start your journey with
                        us now!
                    </p>
                    <div className="w-full max-w-xl mt-8 flex flex-row justify-start gap-4">
                        <Link to="/signup">
                            <button className="w-56 px-10 py-4 text-midnight text-xl font-medium border border-midnight hover:bg-gray-300">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/forums">
                            <button
                                type="button"
                                className="w-56 px-10 py-4 text-white text-xl font-medium bg-sky-400 border border-sky-400 hover:bg-sky-500 hover:border-sky-500"
                            >
                                Explore Forum
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-6/12 max-h-full pt-10 pl-24 flex justify-start">
                    <img
                        src="src/assets/images/hpLarge.svg"
                        alt="Homepage Book"
                        className="max-w-md w-auto h-auto ml-8"
                    />
                </div>
            </div>
        </div>
    );
}
