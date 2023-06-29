import { useState } from "react";

const initialForumFormState = {
    forumBookTitle: "",
    forumBookAuthor: "",
    forumBookGenre: "",
    forumBookCover: "",
};

export default function CreateForumForm({ onCreateForum }) {
    const [forumFormState, setForumFormState] = useState(initialForumFormState);

    const handleInputChange = (e) => {
        setForumFormState((forumFormState) => {
            return {
                ...forumFormState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleForumFormSubmit = async (e) => {
        e.preventDefault();

        const preparedForum = {
            id: Math.floor(Math.random() * 100) + 7,
            ...forumFormState,
        };

        const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(preparedForum),
        });

        const newForum = await response.json();

        // parent component should be notified of created job
        onCreateForum(newForum);

        // form should clear
        setForumFormState(initialForumFormState);
    };

    return (
        <form onSubmit={handleForumFormSubmit} className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
                <h1 className="align-center text-2xl">Create a New Forum</h1>
            </div>

            <fieldset className="flex flex-col gap-1 mt-2">
                <label htmlFor="forumBookTitle">Book Title</label>
                <input
                    type="text"
                    name="forumBookTitle"
                    id="forumBookTitle"
                    placeholder="Book Title"
                    className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                    onChange={handleInputChange}
                    value={forumFormState.forumBookTitle}
                />
            </fieldset>

            <fieldset className="flex flex-col gap-1 mt-3">
                <label htmlFor="forumBookAuthor">Author</label>
                <input
                    type="text"
                    name="forumBookAuthor"
                    id="forumBookAuthor"
                    placeholder="Author"
                    className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                    onChange={handleInputChange}
                    value={forumFormState.forumBookAuthor}
                />
            </fieldset>

            <fieldset className="flex flex-col gap-1 mt-3">
                <label htmlFor="forumBookGenre">Genre</label>
                <input
                    type="text"
                    name="forumBookGenre"
                    id="forumBookGenre"
                    placeholder="Genre"
                    className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                    onChange={handleInputChange}
                    value={forumFormState.forumBookGenre}
                />
            </fieldset>

            <fieldset className="flex flex-col gap-1 mt-3">
                <label htmlFor="forumBookCover">Cover Image</label>
                <input
                    type="text"
                    name="forumBookCover"
                    id="forumBookCover"
                    placeholder="URL"
                    className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                    onChange={handleInputChange}
                    value={forumFormState.forumBookCover}
                />
            </fieldset>

            <input
                type="submit"
                value="Create"
                className="bg-gray-800 mt-4 px-4 py-2 rounded-xl border-2 border-gray-800 cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
            />
        </form>
    );
}
