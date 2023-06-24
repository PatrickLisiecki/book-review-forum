export default function Footer() {
    return (
        <footer className="w-full my-2.5 p-2.5 bg-gray-900">
            <div
                className="w-9/12 h-3/12 mx-auto flex justify-center items-center text-xl
                p-2.5"
            >
                <p className="text-gray-200">&copy; Copyright 2023 by &nbsp;</p>
                <a
                    href="https://github.com/PatrickLisiecki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300"
                >
                    Patrick Lisiecki
                </a>
            </div>
        </footer>
    );
}
