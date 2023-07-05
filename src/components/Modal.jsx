import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <div className="rounded-xl text-midnight p-8 bg-zinc-300">
                    <div className="flex justify-end">
                        <button onClick={hideModal} className="inline-block">
                            <FontAwesomeIcon
                                icon="fa-solid fa-xmark"
                                className="w-6 h-6 p-2 text-midnight rounded-full border-2 border-midnight hover:text-sky-400 hover:border-sky-400"
                            />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
