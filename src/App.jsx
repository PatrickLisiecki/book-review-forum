import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./assets/App.css";
import AddBook from "./components/AddBook";
import CreateForumForm from "./components/CreateForumForm";
import SignInForm from "./components/SignInForm";

function App() {
    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
    const [isCreateForumModalVisible, setIsCreateForumModalVisible] =
        useState(false);
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

    const showCreateForumModal = () => {
        setIsCreateForumModalVisible(true);
    };

    const hideCreateForumModal = () => {
        setIsCreateForumModalVisible(false);
    };

    const onCreateForum = (newBook) => {
        // modal should close
        hideCreateForumModal();

        // new job should be added to the DOM
        setBooks((books) => {
            return [...books, newBook];
        });
    };

    return (
        <main className="w-full min-h-screen font-noto grid bg-gray-900">
            <Navbar books={books} showSignInModal={showSignInModal} />

            <section className="mx-auto w-9/12 pt-32 flex-col justify-center items-center">
                <AddBook showAddBookModal={showCreateForumModal} />
                <BookList books={books} />
            </section>

            <Footer />

            <Modal
                isVisible={isCreateForumModalVisible}
                hideModal={hideCreateForumModal}
            >
                <CreateForumForm onCreateForum={onCreateForum} />
            </Modal>

            <Modal isVisible={isSignInModalVisible} hideModal={hideSignInModal}>
                <SignInForm />
            </Modal>
        </main>
    );
}

export default App;
