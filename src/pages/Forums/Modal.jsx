export default function Modal({ isVisible, hideModal, children }) {
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
                    <div className="flex justify-end">
                        <button onClick={hideModal} className="inline-block">
                            <img
                                src="src/assets/images/x-icon.png"
                                className="h-10 w-10"
                            />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
