import { useState } from "react";
import books from "../books";

export default function SearchBar() {
    // State for search bar
    const [searchQuery, setSearchQuery] = useState("");

    // State for search query results
    const [searchResults, setSearchResults] = useState([]);

    // Function for retrieving the books that match the search result
    const getBooks = () => {
        // Filter books if search query includes title, author, or genre
        const filteredBooks = books.filter(
            (book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Update the search results
        setSearchResults(filteredBooks);
    };

    // Function for handling the search query state
    const handleSearchQuery = (e) => {
        // Update the value inside of the input
        setSearchQuery(e.target.value);

        // Retrieve any books matching the search query
        getBooks();
    };

    return (
        <div className="w-9/12 h-full flex items-center">
            <form className="w-11/12 mx-auto">
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
                        value={searchQuery}
                        onChange={handleSearchQuery}
                    />
                    <button
                        type="submit"
                        className="absolute right-2.5 bottom-2.5 focus:outline-none rounded-lg text-sm py-2 px-4 bg-gray-300 font-bold text-gray-800 hover:bg-gray-400 hidden lg:inline"
                    >
                        Search
                    </button>
                    {searchQuery && searchResults.length > 0 && (
                        <div className="w-full max-h-screen mt-2 flex-col absolute z-50 px-5 overflow-auto text-white border border-gray-600 rounded-lg bg-gray-700">
                            {searchResults.map((book, i) => (
                                <div
                                    key={i}
                                    className="w-full max-h-20 flex justify-start overflow-hidden p-2 my-4 bg-gray-200"
                                >
                                    <div className="w-3/12 flex justify-center">
                                        <img
                                            className="max-w-full max-h-full"
                                            src={book.image.src}
                                            alt={book.image.alt}
                                        />
                                    </div>
                                    <div className="w-9/12 text-gray-900 flex-col content-start">
                                        <h2 className="text-l font-semibold">
                                            {book.title}
                                        </h2>
                                        <h3 className="text-base">
                                            by {book.author}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
