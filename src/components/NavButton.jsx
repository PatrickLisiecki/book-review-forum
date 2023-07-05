import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function NavButton({ showSignInModal, btnText }) {
    return (
        <button
            onClick={showSignInModal}
            className="min-w-[140px] flex justify-center items-center p-3 border border-gray-700 hover:border-sky-500 hover:text-sky-500 hover:-translate-y-[2px] focus:outline-none"
        >
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <span className="ml-2">{btnText}</span>
        </button>
    );
}
