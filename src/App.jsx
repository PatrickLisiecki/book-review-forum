import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignInModal from "./components/SignInModal";
import "./assets/App.css";
// import AddBook from "./components/AddBook";

function App() {
    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchBooks() {
            const response = await fetch("http://localhost:3000/books");

            const books = await response.json();

            console.log(books);

            if (!ignore) {
                setBooks(books);
            }
            return books;
        }

        fetchBooks();

        return () => {
            ignore = true;
        };
    }, []);

    const showSignInModal = () => {
        setIsSignInModalVisible(true);
    };

    const hideSignInModal = () => {
        setIsSignInModalVisible(false);
    };

    return (
        <main className="w-full min-h-screen font-noto grid bg-gray-900">
            <Navbar books={books} showSignInModal={showSignInModal} />

            <section className="mx-auto w-9/12 pt-25 flex-col justify-center items-center border-r-2 border-l-2 border-gray-700">
                <BookList books={books} />
            </section>

            <Footer />

            <SignInModal
                isVisible={isSignInModalVisible}
                hideSignInModal={hideSignInModal}
            />
        </main>
    );
}

export default App;
