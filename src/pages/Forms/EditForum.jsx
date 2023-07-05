import { Form, Link, redirect, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const response = await fetch(
        `http://localhost:3000/forums/${params.forumId}`
    );

    const forum = await response.json();

    // console.log(forum);

    return forum;
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    const response = await fetch(
        `http://localhost:3000/forums/${params.forumId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updates),
        }
    );

    if (!response.ok) {
        throw response;
    }

    return redirect(`/forums/${params.forumId}`);
}

export default function EditForum() {
    const forum = useLoaderData();

    // console.log(forum);

    const { id, name, description } = forum;

    return (
        <div className="w-6/12 mx-auto my-40 p-5 rounded-xl bg-zinc-300">
            <Form method="POST" className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold align-center text-3xl text-midnight">
                        Edit Forum
                    </span>
                </div>

                <fieldset className="flex flex-col gap-1 mt-2">
                    <label
                        htmlFor="name"
                        className="text-xl font-semibold text-midnight"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                        defaultValue={name}
                    />
                </fieldset>

                <fieldset className="flex flex-col gap-1 mt-2">
                    <label
                        htmlFor="description"
                        className="text-xl font-semibold text-midnight"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                        placeholder="Describe your forum..."
                        defaultValue={description}
                    ></textarea>
                </fieldset>

                <fieldset className="flex flex-row justify-evenly mt-2">
                    <Link
                        to={`/forums/${id}`}
                        className="w-1/3 bg-gray-700 px-7 py-3 text-center rounded-xl cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                    >
                        Go Back
                    </Link>
                    <input
                        type="submit"
                        value="Update"
                        className="w-1/3 bg-gray-700 px-7 py-3 rounded-xl cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                    />
                </fieldset>
            </Form>
        </div>
    );
}
