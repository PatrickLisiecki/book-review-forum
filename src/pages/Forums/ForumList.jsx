import { Link } from "react-router-dom";

function Forum({ forum }) {
    const { name, description, thread_count } = forum;

    return (
        <li className="w-full mx-auto p-5 border-t-2 border-b-2 border-gray-400 bg-none first:border-t-0 last:border-b-0">
            <div className="flex justify-start overflow-hidden">
                <div className="w-40">
                    <img
                        src="src/assets/images/lightLogo.svg"
                        alt="Forum Image"
                    />
                </div>
                <div className="w-full p-5 ml-3 text-gray-900 flex-col content-start rounded-2xl bg-gray-200">
                    <Link to="/forums/:forumId" className="hover:underline">
                        <span className="block text-2xl font-semibold">
                            {name}
                        </span>
                    </Link>
                    <span className="block text-xl">{description}</span>
                    <span className=" block text-l capitalize">
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
        return <Forum forum={currentForum} key={currentForum.forum_id} />;
    });

    return (
        <ul className="w-full mx-auto my-10 rounded-2xl bg-gray-600">
            {allForums}
        </ul>
    );
}
