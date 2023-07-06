import { Form, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ForumHeader({ forum }) {
    const { name, description, id } = forum;

    return (
        <div className="w-full mx-auto my-10 flex flex-row justify-between gap-6 items-center rounded-2xl p-5 bg-zinc-200">
            <div className="h-[105px] flex justify-start overflow-hidden">
                <div className="w-auto p-5 flex justify-center items-center">
                    <Link to={`/forums/${id}`}>
                        <FontAwesomeIcon
                            icon="fa-comments"
                            className="w-16 h-16 text-midnight cursor-pointer hover:text-sky-500 hover:-translate-y-[2px]"
                        />
                    </Link>
                </div>
                <div className="w-full p-3 ml-3 text-midnight flex-col justify-center items-center rounded-2xl bg-gray-200">
                    <Link to={`/forums/${id}`} className="hover:underline">
                        <span className="block text-xl font-semibold">
                            {name}
                        </span>
                    </Link>
                    <span className="block text-lg">{description}</span>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mr-4">
                <Link
                    to={`/forums/${id}/edit`}
                    className="flex justify-center items-center p-2 text-midnight rounded-full border-2 border-midnight hover:border-green-500 hover:text-green-500 focus:outline-none"
                >
                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                </Link>
                <Form
                    method="POST"
                    action={`/forums/${id}/destroy`}
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "This will delete the forum and any related threads."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button className="flex justify-center items-center p-2 text-midnight rounded-full border-2 border-midnight hover:border-red-500 hover:text-red-500 focus:outline-none">
                        <FontAwesomeIcon icon="fa-solid fa-trash" />
                    </button>
                </Form>
            </div>
        </div>
    );
}
