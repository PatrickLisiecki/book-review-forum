import { Form, Link, redirect } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

export const action = async ({ request, params }) => {
    let threadData = Object.fromEntries(await request.formData());

    threadData.id = uuidv4();
    threadData.forum_id = params.forumId;

    // console.log(threadData);

    const responseToGet = await fetch(
        `http://localhost:3000/forums/${params.forumId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const forum = await responseToGet.json();

    // console.log(forum);

    forum.thread_count += 1;

    const responseToPost = await fetch("http://localhost:3000/threads", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(threadData),
    });

    const responseToPatch = await fetch(
        `http://localhost:3000/forums/${params.forumId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(forum),
        }
    );

    if (!responseToGet.ok) {
        throw responseToGet;
    }

    if (!responseToPost.ok) {
        throw responseToPost;
    }

    if (!responseToPatch.ok) {
        throw responseToPatch;
    }

    return redirect(`/forums/${params.forumId}`);
};

export default function CreateThread() {
    return (
        <div className="w-6/12 mx-auto my-40 p-5 rounded-xl bg-zinc-300">
            <Form method="POST" className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold align-center text-3xl text-midnight">
                        Create a New Thread
                    </span>
                </div>

                <fieldset className="flex flex-col gap-1 mt-2">
                    <label
                        htmlFor="thread_topic"
                        className="text-xl font-semibold text-midnight"
                    >
                        Topic / Idea
                    </label>
                    <textarea
                        id="thread_topic"
                        name="thread_topic"
                        rows="4"
                        className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                        placeholder="Describe your thread..."
                    ></textarea>
                </fieldset>

                <fieldset className="flex flex-row justify-evenly mt-2">
                    <Link
                        to={`/forums/`}
                        className="w-1/3 bg-gray-700 px-7 py-3 text-center rounded-xl cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                    >
                        Go Back
                    </Link>
                    <input
                        type="submit"
                        value="Create Thread"
                        className="w-1/3 bg-gray-700 px-7 py-3 rounded-xl cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                    />
                </fieldset>
            </Form>
        </div>
    );
}
