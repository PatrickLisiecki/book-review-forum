import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function TopBar({ data }) {
    return (
        <div className="w-full mx-auto my-10 flex flex-row justify-center items-center rounded-2xl p-5 bg-zinc-200">
            <Link to="/forums/new">
                <button className="flex justify-center items-center p-3.5 border border-gray-700 hover:border-sky-500 hover:text-sky-500 focus:outline-none">
                    Create a Forum
                </button>
            </Link>
            <div className="w-9/12">
                <SearchBar data={data} />
            </div>
        </div>
    );
}
