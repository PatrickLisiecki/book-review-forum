import { Form, redirect } from "react-router-dom";

import { useState } from "react";

export const action = async ({ request, params }) => {
    let forumData = Object.fromEntries(await request.formData());

    forumData.forum_id = Math.floor(Math.random() * 100) + 1;
    forumData.thread_count = 0;

    console.log(forumData);

    const response = await fetch("http://localhost:3000/forum", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(forumData),
    });

    debugger;

    if (!response.ok) {
        throw response;
    }

    return redirect("/forums");
};

// export const forumAction = async ({ request }) => {
//     const formData = await request.formData();

//     const submission = {
//         forum_id: Math.floor(Math.random() * 100) + 1,
//         topic: formData.get("topic"),
//         description: formData.get("description"),
//         thread_count: 0,
//     };

//     console.log(submission);

//     const response = await fetch("http://localhost:3000/forum", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submission),
//     });

//     if (!response.ok) {
//         throw response;
//     }

//     return redirect("/forums");
// };

export default function CreateForumForm() {
    return (
        <div className="w-6/12 mx-auto my-40 p-5 rounded-xl bg-gray-400">
            <Form method="POST" className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="align-center text-2xl">
                        Create a New Forum
                    </h1>
                </div>

                <fieldset className="flex flex-col gap-1 mt-2">
                    <label htmlFor="topic">Topic</label>
                    <input
                        type="text"
                        name="topic"
                        id="topic"
                        placeholder="Topic"
                        className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                    />
                </fieldset>

                <fieldset className="flex flex-col gap-1 mt-3">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description"
                        className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                    />
                </fieldset>

                <input
                    type="submit"
                    value="Create"
                    className="bg-gray-800 mt-4 px-4 py-2 rounded-xl border-2 border-gray-800 cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                />
            </Form>
        </div>
    );
}
