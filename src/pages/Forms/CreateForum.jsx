import { Form, Link, redirect } from "react-router-dom";

export const action = async ({ request, params }) => {
    let forumData = Object.fromEntries(await request.formData());

    forumData.id = Math.floor(Math.random() * 100) + 1;
    forumData.thread_count = 0;

    console.log(forumData);

    const response = await fetch("http://localhost:3000/forum", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(forumData),
    });

    if (!response.ok) {
        throw response;
    }

    return redirect("/forums");
};

export default function CreateForum() {
    return (
        <div className="w-6/12 mx-auto my-40 p-5 rounded-xl bg-zinc-300">
            <Form method="POST" className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold align-center text-3xl text-midnight">
                        Create a New Forum
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
                    ></textarea>
                </fieldset>

                <fieldset className="flex flex-row justify-evenly mt-2">
                    <Link
                        to="/forums"
                        className="w-1/3 bg-gray-700 px-7 py-3 text-center rounded-xl cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                    >
                        Go Back
                    </Link>
                    <input
                        type="submit"
                        value="Create Forum"
                        className="w-1/3 bg-gray-700 px-7 py-3 rounded-xl cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                    />
                </fieldset>
            </Form>
        </div>
    );
}
