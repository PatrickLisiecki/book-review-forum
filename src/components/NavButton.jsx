export default function NavButton({ showModal, iconSrc, iconAlt, btnText }) {
    return (
        <button
            onClick={showModal}
            className="inline-flex items-center py-2 px-4 bg-gray-300 font-bold text-gray-800 rounded hover:bg-gray-400"
        >
            <img className="fill-current w-5 h-5" src={iconSrc} alt={iconAlt} />
            <span className="ml-2">{btnText}</span>
        </button>
    );
}
