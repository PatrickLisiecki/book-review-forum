import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HistoryBar({ forum }) {
    const { id, name } = forum;

    return (
        <div className="w-full mx-auto my-10 flex flex-row justify-start gap-6 items-center rounded-2xl p-5 bg-zinc-200">
            <Link to={`/forums/${id}/new`}>
                <button className="flex justify-center items-center p-3.5 border border-gray-700 hover:border-sky-400 hover:text-sky-400 focus:outline-none">
                    Create a Thread
                </button>
            </Link>
            <div className="min-w-[200px] max-w-[300px] flex flex-row justify-evenly items-center flex-grow">
                <Link
                    to="/forums/"
                    className="text-lg font-medium hover:underline"
                >
                    Forums
                </Link>
                <FontAwesomeIcon
                    icon="fa-solid fa-chevron-right"
                    className="w-4 h-4"
                />
                <Link
                    to={`/forums/${id}`}
                    className="text-lg font-medium hover:underline"
                >
                    {name}
                </Link>
            </div>
        </div>
    );
}
