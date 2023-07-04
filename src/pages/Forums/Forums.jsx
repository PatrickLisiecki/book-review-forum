import "../../assets/App.css";

import { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import ForumList from "./ForumList";
import Modal from "./Modal";
import Navbar from "../../components/Navbar";
import SignInForm from "./SignInForm";
import TopBar from "./TopBar";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    let url = "http://localhost:3000/forum";

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default function Forums() {
    const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

    const forums = useLoaderData();

    const showSignInModal = () => {
        setIsSignInModalVisible(true);
    };

    const hideSignInModal = () => {
        setIsSignInModalVisible(false);
    };

    return (
        <main className="w-full min-h-screen">
            <Navbar showSignInModal={showSignInModal} />

            <section className="mx-auto w-9/12 flex-col justify-center items-center">
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
