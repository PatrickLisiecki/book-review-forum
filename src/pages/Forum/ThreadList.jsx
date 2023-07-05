import React, { useEffect, useState } from "react";

function ThreadLink({ thread }) {
    const { id, thread_topic } = thread;

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
                    <span className="block text-xl font-semibold">{id}</span>
                    <span className="block text-lg">Topic: {thread_topic}</span>
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
            const response = await fetch("http://localhost:3000/thread");
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

    console.log(filteredThreads);

    return (
        <ul className="w-full mx-auto my-10 rounded-2xl bg-zinc-200">
            {filteredThreads}
        </ul>
    );
}
