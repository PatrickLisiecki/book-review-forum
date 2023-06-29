export default function AddBook({ showAddBookModal }) {
    return (
        <div className="w-11/12 mx-auto my-10 flex flex-row gap-2 rounded-2xl p-5 bg-gray-600">
            <button
                onClick={showAddBookModal}
                className="rounded-lg text-l py-2 px-4 bg-gray-300 font-bold text-gray-800 hover:bg-gray-400"
            >
                Add Book
            </button>
            <button
                className="rounded-lg text-l py-2 px-4 bg-gray-300 font-bold text-gray-800 hover:bg-gray-400"
            >
                Genre
            </button>
        </div>
    );
}
