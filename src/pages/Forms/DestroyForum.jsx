import { redirect } from "react-router-dom";

export async function action({ params }) {
    const response = await fetch(
        `http://localhost:3000/forums/${params.forumId}/delete`,
        {
            method: "DELETE",
        }
    );

    if (!response.ok) {
        throw response;
    }

    return redirect("/forums");
}
