import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ data }) {
    // State for search bar
    const [searchQuery, setSearchQuery] = useState("");

    // State for search query results
    const [searchResults, setSearchResults] = useState([]);

    const getSearchResults = () => {
        // Filter if search query includes
        const results = data.filter((forum) =>
            forum.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(results);
    };

    // Function for handling the search query state
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);

        getSearchResults();
    };

    return (
        <div className="w-full h-full flex items-center">
            <form className="w-11/12 mx-auto">
                <label
                    htmlFor="search"
                    className="mb-2 text-sm text-midnight sr-only"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="w-full bg-white rounded flex items-center p-4 shadow-sm border border-gray-200">
                        <button className="outline-none focus:outline-none">
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
                        </button>
                        <input
                            type="search"
                            id="search"
                            name="search"
                            placeholder="Search..."
                            className="w-full pl-4 text-m outline-none focus:outline-none bg-transparent"
                            required
                            value={searchQuery}
                            onChange={handleSearchQuery}
                        />
                        <div className="select">
                            <select
                                name="filter"
                                id="filter"
                                className="text-s outline-none focus:outline-none bg-transparent"
                            >
                                <option value="all">All</option>
                                <option value="name">Name</option>
                                <option value="genre">Genre</option>
                            </select>
                        </div>
                    </div>
                    {searchQuery && searchResults.length > 0 && (
                        <div className="w-full max-h-screen mt-2 flex flex-col gap-4 absolute z-50 p-5 overflow-auto text-midnight border border-zinc-600 rounded bg-zinc-400">
                            {searchResults.map((result, i) => (
                                <Link to="/" key={i}>
                                    <div className="w-full max-h-20 flex flex-row justify-evenly overflow-hidden p-2 rounded-lg bg-zinc-200">
                                        <div className="flex justify-center">
                                            <img
                                                src="src/assets/images/darkLogo.svg"
                                                alt="Forum Placeholder Image"
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <div className="w-9/12 text-midnight flex-col content-start">
                                            <span className="block text-l font-semibold">
                                                {result.name}
                                            </span>
                                            <span className="text-base">
                                                Threads: {result.thread_count}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
