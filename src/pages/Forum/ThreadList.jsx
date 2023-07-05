import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const response = await fetch(
        `http://localhost:3000/forum/${params.forumId}`
    );
    const threads = await response.json();
    return threads;
}

export default function ThreadList() {
    return <div>ThreadList</div>;
}
