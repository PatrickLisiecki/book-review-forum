import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/SignInModal";
import "./assets/App.css";

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
            <section className="pt-20">
                <BookList books={books} />
            </section>
            <Footer />
            <Modal
                isVisible={isSignInModalVisible}
                hideSignInModal={hideSignInModal}
            ></Modal>
        </main>
    );
}

export default App;
