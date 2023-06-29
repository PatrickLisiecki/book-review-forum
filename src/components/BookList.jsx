// import { useState, useEffect } from "react";
// import books from "../books";

function Book({ book }) {
    const {
        image: { src, alt },
        title,
        author,
    } = book;

    return (
        <li className="w-full mx-auto p-5 border-t-2 border-b-2 border-gray-400 bg-none first:border-t-0 last:border-b-0">
            <div className="flex justify-start overflow-hidden">
                <div className="w-32">
                    <img
                        className="object-cover w-full h-full rounded-2xl"
                        src={src}
                        alt={alt}
                    />
                </div>
                <div className="w-full p-5 ml-3 text-gray-900 flex-col content-start rounded-2xl bg-gray-200">
                    <a
                        href="src/pages/testForum.html"
                        className="hover:underline"
                    >
                        <h2 className="text-2xl font-semibold">{title}</h2>
                    </a>
                    <h3 className="text-xl">{author}</h3>
                    <button className="mt-14 rounded-lg text-l py-2 px-4 bg-gray-300 font-bold text-gray-800 hover:bg-gray-400 inline-flex items-center">
                        <img
                            className="w-5 h-5 mr-2"
                            src="https://img.icons8.com/ios/100/long-arrow-right--v1.png"
                            alt="Right Arrow"
                        />
                        <span>Go To Forum</span>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default function BookList({ books }) {
    const allBooks = books.map((currentBook, i) => {
        return <Book book={currentBook} key={i} />;
    });

    return (
        <ul className="w-11/12 mx-auto my-10 rounded-2xl bg-gray-600">
            {allBooks}
        </ul>
    );
}
