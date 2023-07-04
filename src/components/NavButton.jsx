export default function NavButton({
    showSignInModal,
    iconSrc,
    iconAlt,
    btnText,
}) {
    return (
        <button
            onClick={showSignInModal}
            className="inline-flex items-center px-6 py-3 border border-gray-700 hover:border-sky-500 hover:text-sky-500 hover:-translate-y-[2px] focus:outline-none"
        >
            <img className="fill-current w-5 h-5" src={iconSrc} alt={iconAlt} />
            <span className="ml-2">{btnText}</span>
        </button>
    );
}
