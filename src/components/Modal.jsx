import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

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
                                icon={faSquareXmark}
                                className="w-10 h-10 hover:text-sky-400"
                            />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
