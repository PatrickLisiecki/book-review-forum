export default function Footer() {
    return (
        <div className="w-11/12 mx-auto p-5 border-t border-gray-300">
            <div
                className="w-9/12 mx-auto flex justify-center items-center text-xl
                p-2.5"
            >
                <p className="text-midnight">
                    &copy; Copyright 2023 by
                    <a
                        href="https://github.com/PatrickLisiecki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-sky-400"
                    >
                        Patrick Lisiecki
                    </a>
                </p>
            </div>
        </div>
    );
}
