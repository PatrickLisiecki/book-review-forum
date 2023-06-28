// import { useState, useEffect } from "react";
// import books from "../books";

function Book({ book }) {
    const {
        image: { src, alt },
        title,
        author,
    } = book;

    return (
        <li className="w-11/12 mx-auto my-10 p-5 rounded-2xl bg-gray-400">
            <div className="flex justify-start overflow-hidden">
                <div className="w-40">
                    <img className="w-full rounded-2xl" src={src} alt={alt} />
                </div>
                <div className="w-full h-6/12 p-5 ml-3 text-gray-900 flex-col content-start rounded-2xl bg-gray-200">
                    <a href="src/pages/testForum.html">
                        <h2 className="text-2xl font-semibold">{title}</h2>
                    </a>
                    <h3 className="text-xl">{author}</h3>
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
        <>
            <div className="mx-auto w-9/12 pt-7 flex-col justify-center items-center border-r-2 border-l-2 border-gray-700">
                <ul className="w-11/12 mx-auto my-10 rounded-2xl p-5 bg-gray-600">
                    {allBooks}
                </ul>
            </div>
        </>
    );
}
