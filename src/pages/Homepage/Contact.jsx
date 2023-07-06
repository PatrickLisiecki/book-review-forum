import React from "react";
import ScrollToBottom from "./ScrollToBottom";

export default function Contact() {
    return (
        <div className="w-6/12 mx-auto my-40 p-5 rounded-xl bg-zinc-300">
            <form method="POST" className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold align-center text-3xl text-midnight">
                        Contact
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
                        htmlFor="message"
                        className="text-xl font-semibold text-midnight"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="p-3 border-2 border-gray-400 bg-white focus:outline-none"
                        placeholder="Your message..."
                    ></textarea>
                </fieldset>

                <fieldset className="flex flex-row justify-evenly mt-2">
                    <input
                        type="submit"
                        value="Send"
                        className="w-full bg-gray-700 px-7 py-3 rounded-xl cursor-pointer text-white hover:bg-gray-600 hover:border-gray-600"
                    />
                </fieldset>
            </form>
            <ScrollToBottom />
        </div>
    );
}
