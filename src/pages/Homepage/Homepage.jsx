import HomepageIntro from "./HomepageIntro";
import HomepageNavbar from "./HomepageNavbar";
import React from "react";

export default function Homepage() {
    return (
        <section className="w-full h-min-screen bg-white">
            <HomepageNavbar />
            <HomepageIntro />
        </section>
    );
}
