import Footer from "../../components/Footer";
import HomepageNavbar from "../Homepage/HomepageNavbar";
import React from "react";

export default function AboutPage() {
    return (
        <section className="w-full min-h-screen bg-white">
            <HomepageNavbar />

            <div className="w-10/12 h-auto mx-auto my-16 flex flex-row justify-evenly">
                <div className="w-6/12 max-h-full pt-10 pr-24 flex justify-end">
                    <img
                        src="src/assets/images/aboutReader.svg"
                        alt="Enlightened Reader"
                        className="max-w-md w-auto h-auto ml-8"
                    />
                </div>
                <div className="w-6/12 max-h-full flex flex-col justify-center items-start">
                    <div className="w-full max-w-xl mb-4">
                        <span className="text-4xl font-bold leading-tight text-midnight">
                            About Novel Opinions
                        </span>
                    </div>
                    <p className="text-lg max-w-xl">
                        Welcome to Novel Opinions, your online destination for
                        passionate readers and literary enthusiasts. Our forum
                        is a vibrant community dedicated to celebrating the
                        written word and sharing insightful discussions about
                        all things related to novels. Whether you're an avid
                        reader, an aspiring writer, or simply someone who
                        appreciates the magic of storytelling, Novel Opinions is
                        the perfect platform for you. Immerse yourself in
                        thought-provoking conversations, exchange
                        recommendations, and connect with like-minded
                        individuals who share your love for literature.
                    </p>
                </div>
            </div>

            <div className="w-10/12 mx-auto my-28 rounded-xl bg-zinc-300">
                <div className="w-10/12 h-auto mx-auto my-16 flex flex-row justify-evenly">
                    <div className="w-6/12 max-h-full p-16 flex flex-col justify-center items-start">
                        <div className="w-full max-w-xl mb-4">
                            <span className="text-4xl font-bold leading-tight text-midnight">
                                About The Creator
                            </span>
                        </div>
                        <p className="text-lg max-w-xl">
                            Enter the enigmatic world of Novel Opinions, a
                            unique online forum guided by the mysterious journey
                            of its owner. Once an elusive hacker, our anonymous
                            protagonist has transformed into the visionary
                            behind this literary haven. Drawing from their past
                            experiences, this enigmatic figure has channeled
                            their tech-savvy skills and passion for storytelling
                            into creating a thriving community of book readers.
                            With a deep understanding of the power of words, our
                            anonymous owner has curated an environment that
                            embraces anonymity, encourages free expression, and
                            fosters the exchange of diverse ideas. At Novel
                            Opinions, join fellow readers in exploring the vast
                            landscapes of literature and unravel the secrets of
                            captivating narratives. Indulge in the enigma and
                            find solace in the company of like-minded
                            individuals, all brought together under the
                            stewardship of an anonymous hacker turned literary
                            luminary.
                        </p>
                    </div>
                    <div className="w-6/12 max-h-full pt-10 pr-24 flex justify-end">
                        <img
                            src="src/assets/images/aboutCreator.svg"
                            alt="Enlightened Reader"
                            className="max-w-md w-auto h-auto ml-8"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}
