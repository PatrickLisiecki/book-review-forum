import { Link } from "react-router-dom";

function ForumLink({ forum }) {
    const { id, name, description, thread_count } = forum;

    return (
        <li className="w-11/12 mx-auto border-t border-b border-gray-400 bg-none first:border-t-0 last:border-b-0">
            <div className="h-[105px] flex justify-start overflow-hidden">
                <div className="w-auto p-3 flex justify-center items-center">
                    <img
                        src="src/assets/images/darkLogo.svg"
                        alt="Forum Image"
                        className="w-16 h-16"
                    />
                </div>
                <div className="w-full p-3 ml-3 text-gray-900 flex-col content-start rounded-2xl bg-gray-200">
                    <Link to={`/forums/${id}`} className="hover:underline">
                        <span className="block text-xl font-semibold">
                            {name}
                        </span>
                    </Link>
                    <span className="block text-lg">{description}</span>
                    <span className=" block text-m capitalize">
                        Threads: {thread_count}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default function ForumList({ forums }) {
    const allForums = forums.map((currentForum) => {
        console.log(currentForum.forum_id);
        return <ForumLink forum={currentForum} key={currentForum.id} />;
    });

    return (
        <ul className="w-full mx-auto my-10 rounded-2xl bg-zinc-200">
            {allForums}
        </ul>
    );
}