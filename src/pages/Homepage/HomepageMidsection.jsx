import React from "react";

export default function HomepageMidsection() {
    return (
        <div className="w-10/12 h-auto mx-auto my-16 flex flex-row justify-evenly">
            <div className="w-6/12 max-h-full pt-10 pr-24 flex justify-end">
                <img
                    src="src/assets/images/hpReader.svg"
                    alt="Enlightened Reader"
                    className="max-w-md w-auto h-auto ml-8"
                />
            </div>
            <div className="w-6/12 max-h-full flex flex-col justify-center items-start">
                <div className="w-full max-w-xl mb-4">
                    <span className="text-4xl font-bold leading-tight text-midnight">
                        Benefits of Reading
                    </span>
                </div>
                <p className="text-lg max-w-xl">
                    Reading is a gateway to a world of endless possibilities. It
                    stimulates our minds, broadens our horizons, and nurtures
                    our imaginations. Through books, we gain knowledge, empathy,
                    and new perspectives. Reading enhances critical thinking,
                    creativity, and problem-solving skills. It allows us to
                    escape into different worlds, experience diverse cultures,
                    and understand the human experience. Make reading a part of
                    your daily routine and unlock the extraordinary benefits it
                    brings to your mind.
                </p>
            </div>
        </div>
    );
}
