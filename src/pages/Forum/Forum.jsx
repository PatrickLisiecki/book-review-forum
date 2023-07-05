import React, { useState } from "react";

import Footer from "../../components/Footer";
import ForumHeader from "./ForumHeader";
import HistoryBar from "./HistoryBar";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";
import SignInForm from "../../components/SignInForm";
import ThreadList from "./ThreadList";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const response = await fetch(
        `http://localhost:3000/forums/${params.forumId}`
    );

    const forum = await response.json();

    console.log(forum);

    return forum;
}

export default function Forum() {
    const forum = useLoaderData();

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
                <ForumHeader forum={forum} />
                <HistoryBar forum={forum} />
                <ThreadList forum={forum} />
            </section>

            <Footer />

            <Modal isVisible={isSignInModalVisible} hideModal={hideSignInModal}>
                <SignInForm />
            </Modal>
        </main>
    );
}
