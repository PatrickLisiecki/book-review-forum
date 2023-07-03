export default function Footer() {
    return (
        <footer className="w-full my-2.5 p-2.5 border-t-2 border-gray-700 bg-gray-900">
            <div
                className="w-9/12 max-h-8 mx-auto flex justify-center items-center text-xl
                p-2.5"
            >
                <p className="text-gray-200">
                    &copy; Copyright 2023 by
                    <a
                        href="https://github.com/PatrickLisiecki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-blue-300"
                    >
                        Patrick Lisiecki
                    </a>
                </p>
            </div>
        </footer>
    );
}
