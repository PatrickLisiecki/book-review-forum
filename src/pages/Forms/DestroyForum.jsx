import React from "react";
import { redirect } from "react-router-dom";

export async function action({ params }) {
    const response = await fetch(
        `http://localhost:3000/forums/${params.forumId}`,
        {
            method: "DELETE",
        }
    );

    if (!response.ok) {
        throw response;
    }

    return redirect("/forums");
}

export default function DestroyForum() {
    return <div>Loading...</div>;
}
