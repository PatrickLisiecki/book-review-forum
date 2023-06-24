import books from "../books";

function Book({ book }) {
    const { image: { src, alt}, title, author } = book;

    return (
        <div className="w-9/12 min-h-min mx-auto my-2.5 flex justify-center overflow-hidden bg-gray-200">
            <div className="h-full">
                <img className="object-fill" src={src} alt={alt} />
            </div>
            <div className="ml-2.5 text-gray-900 flex-col content-start">
                <h2 className="text-2xl">{title}</h2>
                <h3 className="text-xl">{author}</h3>
            </div>
        </div>
    );

}

export default function BookList() {
    const allBooks = books.map((currentBook, i) => {
        return <Book book={currentBook} key={i} />;
    });

    return (
        <div className="mx-auto w-9/12 pt-7 flex-col justify-center items-center border-r-2 border-l-2 border-gray-700">
            { allBooks }
        </div>
    );
}
