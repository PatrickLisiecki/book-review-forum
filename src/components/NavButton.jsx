import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavButton({ showSignInModal, btnText }) {
    return (
        <button
            onClick={showSignInModal}
            className="min-w-[140px] flex justify-center items-center p-3 border border-gray-700 hover:border-sky-500 hover:text-sky-500 hover:-translate-y-[2px] focus:outline-none"
        >
            <FontAwesomeIcon icon={"fa-solid fa-arrow-right-to-bracket"} />
            <span className="ml-2">{btnText}</span>
        </button>
    );
}
