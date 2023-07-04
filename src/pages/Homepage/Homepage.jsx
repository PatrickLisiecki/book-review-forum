import Footer from "../../components/Footer";
import HomepageEntry from "./HomepageEntry";
import HomepageMidsection from "./HomepageMidsection";
import HomepageNavbar from "./HomepageNavbar";
import React from "react";

export default function Homepage() {
    return (
        <section className="w-full h-min-screen bg-white">
            <HomepageNavbar />
            <HomepageEntry />
            <HomepageMidsection />
            <Footer />
        </section>
    );
}
