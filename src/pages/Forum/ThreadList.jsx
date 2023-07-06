import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export async function loader({ params }) {
    let url = "http://localhost:3000/threads";

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function ThreadLink({ thread }) {
    const { thread_topic } = thread;

    return (
        <li className="w-11/12 mx-auto border-t border-b border-gray-400 bg-none first:border-t-0 last:border-b-0">
            <div className="h-[105px] flex justify-start overflow-hidden">
                <div className="w-auto p-3 flex justify-center items-center">
                    <Link to="/forums">
                        <FontAwesomeIcon
                            icon="fa-solid fa-link"
                            className="w-12 h-12 text-midnight cursor-pointer hover:text-sky-400 hover:-translate-y-[2px]"
                        />
                    </Link>
                </div>
                <div className="w-full p-3 ml-3 text-midnight flex-col content-start rounded-2xl bg-gray-200">
                    <p className="block p-3 text-lg">{thread_topic}</p>
                </div>
            </div>
        </li>
    );
}

export default function ThreadList({ forum }) {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchThreads() {
            const response = await fetch("http://localhost:3000/threads");
            const allThreads = await response.json();

            console.log(allThreads);

            if (!ignore) {
                setThreads(allThreads);
            }

            return allThreads;
        }

        fetchThreads();

        return () => {
            ignore = true;
        };
    }, []);

    const filteredThreads = threads.map((currentThread) => {
        console.log(currentThread.forum_id);
        if (currentThread.forum_id == forum.id) {
            return <ThreadLink thread={currentThread} key={currentThread.id} />;
        }
    });

    return (
        <ul className="w-full mx-auto my-10 rounded-2xl bg-zinc-200">
            {filteredThreads}
        </ul>
    );
}
