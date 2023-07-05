import "../../assets/App.css";

import Footer from "../../components/Footer";
import ForumList from "./ForumList";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";
import SignInForm from "../../components/SignInForm";
import TopBar from "./TopBar";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export async function loader({ params }) {
    let url = "http://localhost:3000/forums";

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default function ForumsPage() {
    const forums = useLoaderData();

    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

    const showSignInModal = () => {
        setIsSignInModalVisible(true);
    };

    const hideSignInModal = () => {
        setIsSignInModalVisible(false);
    };

    return (
        <main className="w-full min-h-screen flex flex-col justify-between">
            <Navbar showSignInModal={showSignInModal} />

            <section className="w-9/12 mx-auto flex-grow flex-col justify-center items-center">
                <TopBar data={forums} />
                <ForumList forums={forums} />
            </section>

            <Footer />

            <Modal isVisible={isSignInModalVisible} hideModal={hideSignInModal}>
                <SignInForm />
            </Modal>
        </main>
    );
}
