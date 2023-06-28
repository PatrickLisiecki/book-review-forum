export default function Modal({ isVisible, hideModal }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div
            onClick={hideModal}
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
                                Add Review
                            </h1>
                            <button onClick={hideModal} className="text-gray-200">
                                <img
                                    src="src/assets/images/x-icon.png"
                                    className="h-10 w-10"
                                />
                            </button>
                        </div>

                        <fieldset className="flex flex-col gap-1 mt-2">
                            <label htmlFor="post-title">Review Title</label>
                            <input
                                type="text"
                                name="post-title"
                                id="post-title"
                                placeholder="Title"
                                className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                            />
                        </fieldset>

                        <fieldset className="flex flex-col gap-1 mt-3">
                            <label htmlFor="post-text">Review</label>
                            <textarea
                                id="post-text"
                                name="post-text"
                                placeholder="Start typing..."
                                className="max-h-60 p-3 border-2 border-gray-400 bg-white focus:outline-none"
                            ></textarea>
                        </fieldset>

                        <input
                            className="bg-white hover:bg-gray-200 transition mt-4 px-4 py-2 border-2 border-gray-800 cursor-pointer text-gray-800"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
