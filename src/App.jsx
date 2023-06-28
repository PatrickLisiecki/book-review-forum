import { useState } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./assets/App.css";

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };
    
    return (
        <main className="w-full min-h-screen font-noto grid bg-gray-900">
            <Navbar showModal={showModal} />
            <section className="pt-20">
                <BookList />
            </section>
            <Footer />
            <Modal isVisible={isModalVisible} hideModal={hideModal}></Modal>
        </main>
    );
}

export default App;
