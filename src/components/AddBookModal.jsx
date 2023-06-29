export default function AddBookModal({ isVisible, hideAddBookModal }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div
            onClick={hideAddBookModal}
            className="fixed inset-0 flex justify-center items-center backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-xl w-6/12 mx-auto flex flex-col"
            >
                <div className="rounded-xl text-gray-800 p-8 bg-gray-300">
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="align-center text-2xl">
                                Create a New Forum
                            </h1>
                            <button
                                onClick={hideAddBookModal}
                                className="text-gray-200"
                            >
                                <img
                                    src="src/assets/images/x-icon.png"
                                    className="h-10 w-10"
                                />
                            </button>
                        </div>

                        <fieldset className="flex flex-col gap-1 mt-2">
                            <label htmlFor="forum-book-title">Book Title</label>
                            <input
                                type="text"
                                name="forum-book-title"
                                id="forum-book-title"
                                placeholder="Book Title"
                                className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                            />
                        </fieldset>

                        <fieldset className="flex flex-col gap-1 mt-3">
                            <label htmlFor="forum-book-author">Author</label>
                            <input
                                type="text"
                                name="forum-book-author"
                                id="forum-book-author"
                                placeholder="Author"
                                className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                            />
                        </fieldset>

                        <fieldset className="flex flex-col gap-1 mt-3">
                            <label htmlFor="forum-book-cover">
                                Cover Image
                            </label>
                            <input
                                type="text"
                                name="forum-book-cover"
                                id="forum-book-cover"
                                placeholder="URL"
                                className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                            />
                        </fieldset>

                        <input
                            type="submit"
                            value="Create"
                            className="bg-gray-800 mt-4 px-4 py-2 rounded-xl border-2 border-gray-800 cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
