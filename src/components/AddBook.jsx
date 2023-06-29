export default function AddBook({ showAddBookModal }) {
    return (
        <div className="w-11/12 mx-auto my-10 flex flex-row justify-evenly rounded-2xl p-5 bg-gray-600">
            <button
                onClick={showAddBookModal}
                className="rounded-lg py-2 px-4 bg-gray-300 font-bold text-gray-800 hover:bg-gray-400"
            >
                Create a Forum
            </button>
            <div className="w-6/12 p-2 mx-auto flex justify-center items-center">
                <label htmlFor="selectGenre" className="sr-only">
                    Underline select
                </label>
                <select
                    id="selectGenre"
                    className="w-full block py-3 text-l text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 peer"
                >
                    <option className="text-gray-800" selected>
                        Choose a genre
                    </option>
                    <option className="text-gray-800" value="fiction">
                        Fiction
                    </option>
                    <option className="text-gray-800" value="nonFiction">
                        Non-Fiction
                    </option>
                    <option className="text-gray-800" value="sciFi">
                        Sci-Fi
                    </option>
                    <option className="text-gray-800" value="biography">
                        Biography
                    </option>
                </select>
            </div>
        </div>
    );
}
